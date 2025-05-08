import React, { useEffect, useState } from "react";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import AboutUs from "../components/AboutUs";
import SomeSections from "../components/SomeSections";
import { ref, set, onDisconnect, onValue } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import { database } from "../../firebase";

const Home = () => {
  const [onlineCount, setOnlineCount] = useState(0);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    let userId = sessionStorage.getItem("visitorId");

    const userRef = ref(database, `onlineUsers/${userId || uuidv4()}`);
    const totalVisitorsRef = ref(database, "totalVisitors");

    // إذا لم يوجد userId => زائر جديد
    if (!userId) {
      userId = uuidv4();
      sessionStorage.setItem("visitorId", userId);

      // أضفه إلى قائمة الزوار الحاليين
      set(ref(database, `onlineUsers/${userId}`), true);
      onDisconnect(ref(database, `onlineUsers/${userId}`)).remove();

      // زيادة إجمالي الزوار
      import("firebase/database").then(({ runTransaction }) => {
        runTransaction(totalVisitorsRef, (currentValue) => {
          console.log("✅ Visitor incremented. Previous:", currentValue);
          return (currentValue || 0) + 1;
        });
      });
    } else {
      // زائر قديم - فقط أضفه إلى قائمة الحاليين
      set(userRef, true);
      onDisconnect(userRef).remove();
    }

    // متابعة عدد الزوار الحاليين
    const unsubscribeOnline = onValue(
      ref(database, "onlineUsers"),
      (snapshot) => {
        const users = snapshot.val();
        setOnlineCount(users ? Object.keys(users).length : 0);
      }
    );

    // متابعة إجمالي الزوار
    const unsubscribeTotal = onValue(totalVisitorsRef, (snapshot) => {
      setTotalVisitors(snapshot.val() || 0);
    });

    return () => {
      unsubscribeOnline();
      unsubscribeTotal();
    };
  }, []);

  return (
    <>
      <div className="relative z-0">
        {/* صورة الخلفية */}
        <img
          src="https://cdn.elwatannews.com/watan/840x473/14652412041630157923.jpg"
          className="w-full h-[700px] object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* النص و الأزرار */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="text-white font-semibold bg-orange-500 px-4 py-2 rounded-full shadow-lg">
              <span>الزوار الحاليين:</span>
              <span className="ml-2">{onlineCount}</span>
            </div>
            <div className="text-white font-semibold bg-green-600 px-4 py-2 rounded-full shadow-lg">
              <span>إجمالي الزوار:</span>
              <span className="ml-2">{totalVisitors}</span>
            </div>
          </div>

          <h1 className="sm:text-5xl text-3xl font-bold mb-4">
            مرحبا بكم في اعرف قسمك كلية اداب عين شمس
          </h1>
          <p className="sm:text-lg mb-6 max-w-2xl text-gray-300">
            يهدف موقع اعرف قسمك كلية اداب عين شمس إلى تقديم دليل كامل يساعد
            الطلاب في اختيار القسم المناسب لهم داخل كلية الآداب بجامعة عين شمس
          </p>

          {/* الأزرار */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/sections"
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition cursor-pointer duration-300"
            >
              شوف الاقسام من هنا
            </Link>

            <Link
              to="/contact"
              className="bg-transparent border-2 border-orange-700 px-8 py-3 rounded-full hover:bg-orange-700 text-white transition cursor-pointer flex gap-2 items-center duration-300"
            >
              <span className="text-lg">
                <MdCall />
              </span>
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>

      <AboutUs />
      <SomeSections />
    </>
  );
};

export default Home;

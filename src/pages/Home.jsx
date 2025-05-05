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

  useEffect(() => {
    const userId = uuidv4(); // إنشاء معرف فريد للمستخدم
    const userRef = ref(database, `onlineUsers/${userId}`); // تحديد المسار في قاعدة البيانات

    // إضافة المستخدم إلى قاعدة البيانات
    set(userRef, true)
      .then(() => {
        console.log(`User ${userId} added to online users`); // تأكيد إضافة المستخدم
      })
      .catch((error) => {
        console.error("Error adding user:", error); // في حالة حدوث خطأ
      });

    // إزالة المستخدم عند الخروج من الصفحة
    onDisconnect(userRef).remove();

    // مراقبة عدد المستخدمين في الوقت الفعلي
    const allUsersRef = ref(database, "onlineUsers");
    onValue(allUsersRef, (snapshot) => {
      const users = snapshot.val(); // الحصول على البيانات
      const count = users ? Object.keys(users).length : 0; // حساب عدد المستخدمين
      setOnlineCount(count); // تحديث حالة عدد المستخدمين
    });

    // تنظيف العملية عند الخروج من المكون
    return () => {
      // هنا يتم التعامل مع حذف المستخدم عند مغادرة الصفحة
      set(userRef, null); // يمكن استخدام null بدلاً من إزالة كامل البيانات
    };
  }, [database]); // التأكد من أن الـ `database` لا يتغير
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
          <div className="text-white font-semibold bg-orange-500 px-4 py-2 rounded-full shadow-lg mb-14">
            <span>عدد الزوار الحاليين:</span>
            <span className="ml-2">{onlineCount}</span>
          </div>
          <h1 className="sm:text-5xl text-3xl font-bold mb-4">
            مرحبا بكم في اعرف قسمك كلية اداب عين شمس
          </h1>
          <p className="sm:text-lg mb-6 max-w-2xl text-gray-300">
            يهدف موقع اعرف قسمك كلية اداب عين شمس إلى تقديم دليل كامل يساعد
            الطلاب في اختيار القسم المناسب لهم داخل كلية الآداب بجامعة عين شمس
          </p>

          {/* الأزرار مع الألوان المطلوبة */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* زر برتقالي غامق */}
            <Link
              to="/sections"
              className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition cursor-pointer duration-300"
            >
              شوف الاقسام من هنا
            </Link>

            {/* زر شفاف بحدود برتقالية */}
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

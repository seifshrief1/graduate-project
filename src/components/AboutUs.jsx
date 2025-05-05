import React from "react";
import { FaBook, FaUsers, FaUniversity, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center text-center p-6 my-5">
      {/* Title with Icon */}
      <h1 className="text-4xl font-bold text-orange-600/75 flex items-center gap-2">
        <FaUsers className="text-orange-600" /> معلومات عنا
      </h1>

      {/* Description Section */}
      <p className="text-lg mt-6 max-w-[1300px] leading-relaxed text-gray-700">
        يهدف موقع اعرف قسمك كلية اداب عين شمس إلى تقديم دليل كامل يساعد الطلاب
        في اختيار القسم المناسب لهم داخل كلية الآداب بجامعة عين شمس، استنادًا
        إلى اهتماماتهم وقدراتهم. يساهم الموقع في تقديم معلومات شاملة ومحدثة حول
        الأقسام المختلفة، بالإضافة إلى تجارب حقيقية من طلاب سبقوك، مما يسهل عليك
        اتخاذ القرار الأنسب لمستقبلك الأكاديمي والمهني. تُعد كلية الآداب بجامعة
        عين شمس واحدة من أعرق الكليات الإنسانية في مصر والعالم العربي، حيث تم
        تأسيسها عام 1950 كأول كلية للآداب ضمن كليات جامعة عين شمس. منذ نشأتها،
        لعبت الكلية دورًا بارزًا في خدمة المجتمع وتنمية الفكر والثقافة من خلال
        تخريج كوادر متميزة في مختلف مجالات العلوم الإنسانية والاجتماعية. تسعى
        الكلية إلى إعداد خريجين متميزين علميًا ومهنيًا في مجالات العلوم
        الاجتماعية والإنسانية، مع مواكبة التطورات المعرفية والتكنولوجية، وتعزيز
        القيم المهنية والأخلاقية، فضلاً عن خدمة المجتمع وتنميته وفقًا لاحتياجات
        سوق العمل داخل مصر وخارجها، وترسيخ الانتماء والهوية الوطنية في نفوس
        الطلاب.
      </p>

      {/* Additional Details */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8 text-gray-800">
        <div className="flex flex-col items-center p-4 bg-orange-100 rounded-lg shadow-md">
          <FaUniversity size={50} className="text-orange-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">التعليم الأكاديمي</h2>
          <p className="text-sm">
            نقدم مجموعة واسعة من البرامج الأكاديمية التي تلبي احتياجات السوق
            وتساعد الطلاب على تحقيق أهدافهم المهنية.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-orange-100 rounded-lg shadow-md">
          <FaBook size={50} className="text-orange-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">البحث العلمي</h2>
          <p className="text-sm">
            نؤمن بأهمية البحث العلمي في تطوير المعرفة، ونشجع طلابنا وأعضاء هيئة
            التدريس على إجراء أبحاث مبتكرة.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-orange-100 rounded-lg shadow-md">
          <FaUsers size={50} className="text-orange-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">الأنشطة الطلابية</h2>
          <p className="text-sm">
            نقدم مجموعة متنوعة من الأنشطة الطلابية التي تعزز المهارات الشخصية
            والاجتماعية، وتوفر بيئة تعليمية متكاملة.
          </p>
        </div>

        <div className="flex flex-col items-center p-4 bg-orange-100 rounded-lg shadow-md">
          <FaLightbulb size={50} className="text-orange-600 mb-3" />
          <h2 className="text-xl font-semibold mb-2">الابتكار والتطوير</h2>
          <p className="text-sm">
            نعمل باستمرار على تطوير برامجنا التعليمية واستخدام أحدث التقنيات
            لتعزيز تجربة التعلم للطلاب.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <p className="text-gray-600 mt-8 text-sm">
        نسعى دائماً إلى تقديم الأفضل لطلابنا ومجتمعنا من خلال برامج تعليمية
        متميزة وأبحاث علمية مبتكرة.
      </p>
    </div>
  );
};

export default AboutUs;

import React, { useState } from "react";

const SpecializationChecker = () => {
  const [marks, setMarks] = useState({
    arabic: "",
    english: "",
    french: "",
    psychology: "",
    geology: "",
    geography: "",
    pureMath: "",
  });

  const [preferredMajors, setPreferredMajors] = useState([]);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (value !== "") {
      const num = parseInt(value, 10);
      if (isNaN(num)) return;

      if (name === "arabic" && num > 80) value = "80";
      else if (name !== "arabic" && num > 60) value = "60";
    }

    setMarks({ ...marks, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { arabic, english, french } = marks;

    if (!arabic || !english || !french) {
      setError(
        "من فضلك أدخل درجات اللغة العربية واللغة الإنجليزية واللغة الفرنسية"
      );
      setResult([]);
      return;
    }

    setError("");

    const weights = {
      "اللغة العربية": parseInt(marks.arabic || 0),
      "اللغة الإنجليزية": parseInt(marks.english || 0),
      "اللغة الفرنسية": parseInt(marks.french || 0),
      الفلسفة: parseInt(marks.philosophy || 0),
      الجيولوجيا: parseInt(marks.geology || 0),
      الجغرافيا: parseInt(marks.geography || 0),
      "الرياضة البحتة": parseInt(marks.pureMath || 0),
      "علم النفس": parseInt(marks.psychology || 0),
    };

    const specializations = [
      "اللغة العربية",
      "اللغة العبرية",
      "اللغات الشرقية",
      "اللغة الإنجليزية",
      "اللغة الفرنسية",
      "الحضارة الأوربية",
      "التاريخ",
      "الجغرافيا",
      "الفلسفة",
      "علم النفس",
      "علم الاجتماع",
      "الارشاد السياحي",
      "دراسات المعلومات",
      "الدراما والنقد",
    ];

    const interestMapping = {
      "تعلم اللغات النادرة": ["اللغات الشرقية", "اللغة العبرية"],
      "تعلم لغات اجنبية": ["اللغة الفرنسية", "اللغة الإنجليزية"],
      "الإهتمام بالتكنولوجيا والتطور الرقمى": ["دراسات المعلومات"],
      "التمثيل والمسرح": ["الدراما والنقد"],
      "تطور الفكر الاوروبى": ["الحضارة الأوربية"],
      "تاريخ اوروبا الحديث": ["الحضارة الأوربية", "الجيولوجيا"],
      "اكتشاف الاماكن الاثاريه": ["الارشاد السياحي"],
      "تحليل القضايا المجتمعية": ["علم الاجتماع"],
      "الخرائط والتضاريس": ["الجغرافيا"],
      "القراءة العميقه": ["الفلسفة"],
      "اللغة وقواعدها": ["اللغة العربية", "اللغة الإنجليزية"],
      "التحليل الادبى": ["الدراما والنقد", "اللغة العربية"],
      "تحليل الظواهر الطبيعية": ["الجيولوجيا"],
      "حب الرياضيات والمنطق": ["الرياضة البحتة"],
    };

    const specializationWeights = specializations.map((major) => {
      let weight = 0;
      for (let key in weights) {
        if (major.includes(key)) {
          weight += weights[key];
        }
      }

      preferredMajors.forEach((interest) => {
        if (interestMapping[interest]?.includes(major)) {
          weight += 20;
        }
      });

      return { name: major, weight };
    });

    const sortedSpecializations = specializationWeights
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 12)
      .map((major, index) => `${index + 1} - ${major.name}`);

    setResult(["التخصصات المناسبة ليك:", sortedSpecializations]);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded shadow mt-20">
      <h2 className="text-3xl text-orange-500 font-bold mb-4 text-center">
        اختر درجاتك
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "اللغة العربية", name: "arabic" },
            { label: "اللغة الإنجليزية", name: "english" },
            { label: "اللغة الفرنسية", name: "french" },
            { label: "الفلسفة", name: "philosophy" },
            { label: "الجيولوجيا", name: "geology" },
            { label: "الجغرافيا", name: "geography" },
            { label: "الرياضة البحتة", name: "pureMath" },
            { label: "علم النفس", name: "psychology" },
          ].map(({ label, name }) => (
            <div key={name}>
              <label className="block mb-1 text-right font-semibold text-gray-700">
                {label}
              </label>
              <input
                type="number"
                name={name}
                value={marks[name]}
                onChange={handleChange}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                min="0"
              />
            </div>
          ))}
        </div>

        <div>
          <label className="block mb-2 text-right font-semibold text-gray-700">
            اختر التخصصات المفضلة لديك:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-right">
            {[
              "تعلم اللغات النادرة",
              "تعلم لغات اجنبية",
              "الإهتمام بالتكنولوجيا والتطور الرقمى",
              "التمثيل والمسرح",
              "تطور الفكر الاوروبى",
              "تاريخ اوروبا الحديث",
              "اكتشاف الاماكن الاثاريه",
              "تحليل القضايا المجتمعية",
              "الخرائط والتضاريس",
              "القراءة العميقه",
              "اللغة وقواعدها",
              "التحليل الادبى",
              "تحليل الظواهر الطبيعية",
              "حب الرياضيات والمنطق",
            ].map((major) => (
              <label key={major} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={major}
                  checked={preferredMajors.includes(major)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPreferredMajors((prev) => [...prev, major]);
                    } else {
                      setPreferredMajors((prev) =>
                        prev.filter((m) => m !== major)
                      );
                    }
                  }}
                />
                {major}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded font-bold"
        >
          عرض التخصصات المناسبة
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-600 font-bold text-right">{error}</div>
      )}

      {result.length > 0 && (
        <div className="mt-6 text-right space-y-3">
          <h3 className="text-lg font-semibold">{result[0]}</h3>
          <div className="grid grid-cols-2 gap-4">
            {result[1].map((major, i) => (
              <div key={i}>✅ {major}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpecializationChecker;

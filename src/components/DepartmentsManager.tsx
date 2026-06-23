import React from "react";
import { Grid, Stethoscope, BriefcaseMedical } from "lucide-react";

export default function DepartmentsManager({
  language,
}: {
  language: "ar" | "en";
}) {
  const isAr = language === "ar";

  return (
    <div
      className="p-4 md:p-6 bg-slate-50 min-h-full"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <Grid className="h-7 w-7 text-blue-600" />
            {isAr ? "الأقسام السريرية" : "Clinical Departments"}
          </h2>
          <p className="text-sm font-bold text-slate-500 mt-1">
            {isAr
              ? "إدارة وتصنيف الأقسام السريرية والإدارية"
              : "Routing and capability mappings for all IPD/OPD clinical services."}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex gap-3">
          <div className="bg-blue-50 p-2 rounded-lg h-fit">
            <Stethoscope className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="font-bold text-slate-800">Cardiology</div>
            <div className="text-xs text-slate-500">
              HoD: Dr. Hisham • Clinical: Yes
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex gap-3">
          <div className="bg-blue-50 p-2 rounded-lg h-fit">
            <Stethoscope className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="font-bold text-slate-800">Internal Medicine</div>
            <div className="text-xs text-slate-500">
              HoD: Dr. Sarah • Clinical: Yes
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex gap-3">
          <div className="bg-slate-50 p-2 rounded-lg h-fit">
            <BriefcaseMedical className="w-5 h-5 text-slate-600" />
          </div>
          <div>
            <div className="font-bold text-slate-800">IT Administration</div>
            <div className="text-xs text-slate-500">
              HoD: Eng. Ahmed • Clinical: No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

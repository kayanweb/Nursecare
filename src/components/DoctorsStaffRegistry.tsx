import React from "react";
import { Users2, UserCheck, ShieldCheck } from "lucide-react";

export default function DoctorsStaffRegistry({
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
            <Users2 className="h-7 w-7 text-emerald-600" />
            {isAr ? "سجل الموظفين والصلاحيات" : "Staff Directory & Roles"}
          </h2>
          <p className="text-sm font-bold text-slate-500 mt-1">
            {isAr
              ? "إدارة الأطباء، التمريض، وجداول العمل"
              : "RBAC mapping to HL7 practitioners."}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left" dir={isAr ? "rtl" : "ltr"}>
          <thead className="bg-slate-50 text-slate-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
            <tr>
              <th className="px-4 py-4">{isAr ? "الاسم" : "Name"}</th>
              <th className="px-4 py-4">{isAr ? "الدور" : "Role"}</th>
              <th className="px-4 py-4">{isAr ? "التخصص" : "Specialty"}</th>
              <th className="px-4 py-4 text-center">
                {isAr ? "الصلاحيات" : "Access"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr className="hover:bg-slate-50">
              <td className="px-4 py-3 font-bold text-slate-800">Dr. Hisham</td>
              <td className="px-4 py-3 font-bold text-slate-600 text-xs">
                Consultant
              </td>
              <td className="px-4 py-3 font-bold text-slate-600">Cardiology</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-2 py-0.5 rounded border border-emerald-200">
                  Full
                </span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="px-4 py-3 font-bold text-slate-800">
                Nurse Salma
              </td>
              <td className="px-4 py-3 font-bold text-slate-600 text-xs">
                Head Nurse
              </td>
              <td className="px-4 py-3 font-bold text-slate-600">ICU</td>
              <td className="px-4 py-3 text-center">
                <span className="bg-blue-50 text-blue-700 font-bold text-xs px-2 py-0.5 rounded border border-blue-200">
                  Restricted
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

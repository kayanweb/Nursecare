import React, { useState, useEffect } from "react";
import {
  FileBarChart,
  CheckCircle2,
  Clock,
  XCircle,
  FileWarning,
} from "lucide-react";
import { syncSetting, saveSetting } from "../lib/firestoreService";

interface ClaimItem {
  id: string;
  visitId: string;
  patient: string;
  insurance: string;
  status: "Draft" | "Sent" | "Paid" | "Rejected";
  amount: number;
}

export default function RCMClaims({ language }: { language: "ar" | "en" }) {
  const isAr = language === "ar";
  const [claims, setClaims] = useState<ClaimItem[]>([]);

  useEffect(() => {
    const unsub = syncSetting("his_rcm_claims", (data) => {
      if (data?.value && Array.isArray(data.value)) {
        setClaims(data.value);
      } else {
        const seeded: ClaimItem[] = [
          {
            id: "CLM-9912",
            visitId: "VST-881",
            patient: "Ahmed Yassin",
            insurance: "Tawuniya",
            status: "Sent",
            amount: 1500,
          },
          {
            id: "CLM-9913",
            visitId: "VST-882",
            patient: "Sara Kamal",
            insurance: "Bupa",
            status: "Paid",
            amount: 4500,
          },
          {
            id: "CLM-9914",
            visitId: "VST-883",
            patient: "Mona Hassan",
            insurance: "Medgulf",
            status: "Rejected",
            amount: 200,
          },
        ];
        setClaims(seeded);
        saveSetting("his_rcm_claims", seeded);
      }
    });
    return () => unsub();
  }, []);

  const getStatusColor = (status: string) => {
    if (status === "Paid")
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    if (status === "Sent") return "bg-blue-50 text-blue-700 border-blue-200";
    if (status === "Rejected")
      return "bg-rose-50 text-rose-700 border-rose-200";
    return "bg-slate-50 text-slate-700 border-slate-200";
  };

  return (
    <div
      className="p-4 md:p-6 bg-slate-50 min-h-full"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <FileBarChart className="h-7 w-7 text-indigo-600" />
            {isAr ? "إدارة دورة الإيرادات (RCM)" : "Revenue Cycle Management"}
          </h2>
          <p className="text-sm font-bold text-slate-500 mt-1">
            {isAr
              ? "دورة المطالبات التأمينية والمرتجعات"
              : "Claim generation, scrubbing, and remittance tracking."}
          </p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left" dir={isAr ? "rtl" : "ltr"}>
          <thead className="bg-slate-50 text-slate-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
            <tr>
              <th className="px-4 py-4">
                {isAr ? "رقم المطالبة" : "Claim ID"}
              </th>
              <th className="px-4 py-4">{isAr ? "المريض" : "Patient"}</th>
              <th className="px-4 py-4">{isAr ? "التأمين" : "Insurance"}</th>
              <th className="px-4 py-4">{isAr ? "المبلغ" : "Amount"}</th>
              <th className="px-4 py-4 text-center">
                {isAr ? "الحالة" : "Status"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {claims.map((c) => (
              <tr key={c.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono font-bold text-indigo-600">
                  {c.id}
                </td>
                <td className="px-4 py-3 font-bold text-slate-800">
                  {c.patient}
                </td>
                <td className="px-4 py-3 font-bold text-slate-600 font-xs">
                  {c.insurance}
                </td>
                <td className="px-4 py-3 font-black text-slate-700">
                  {c.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-1 rounded text-[10px] uppercase tracking-wider font-bold border ${getStatusColor(c.status)}`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

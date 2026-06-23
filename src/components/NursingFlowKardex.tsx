import React, { useState, useEffect } from "react";
import {
  ClipboardList,
  Plus,
  Search,
  Activity,
  HeartPulse,
  Stethoscope,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { syncSetting, saveSetting } from "../lib/firestoreService";
import { toast } from "sonner";

interface VitalNote {
  id: string;
  patientName: string;
  bedId: string;
  bp: string;
  hr: string;
  temp: string;
  spo2: string;
  note: string;
  nurseId: string;
  timestamp: string;
}

export default function NursingFlowKardex({
  language,
}: {
  language: "ar" | "en";
}) {
  const isAr = language === "ar";
  const [notes, setNotes] = useState<VitalNote[]>([]);

  useEffect(() => {
    const unsub = syncSetting("his_nursing_kardex", (data) => {
      if (data?.value && Array.isArray(data.value)) {
        setNotes(data.value);
      } else {
        const seeded: VitalNote[] = [
          {
            id: "NT-01",
            patientName: "Amina Saleh",
            bedId: "ICU-B1",
            bp: "120/80",
            hr: "85",
            temp: "37.1",
            spo2: "98%",
            note: "Patient stable. IV fluids running.",
            nurseId: "Nurse Salma",
            timestamp: new Date().toISOString(),
          },
          {
            id: "NT-02",
            patientName: "Said Kamal",
            bedId: "WARD-A-12",
            bp: "140/90",
            hr: "92",
            temp: "38.2",
            spo2: "95%",
            note: "Mild fever, administered Paracetamol as per PRN orders.",
            nurseId: "Nurse Yousef",
            timestamp: new Date(Date.now() - 3600000).toISOString(),
          },
        ];
        setNotes(seeded);
        saveSetting("his_nursing_kardex", seeded);
      }
    });
    return () => unsub();
  }, []);

  return (
    <div
      className="p-4 md:p-6 bg-slate-50 min-h-full"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-black text-rose-800 flex items-center gap-2">
            <ClipboardList className="h-7 w-7 text-rose-600" />
            {isAr ? "يوميات التمريض (Kardex)" : "Nursing Flow & Kardex"}
          </h2>
          <p className="text-sm font-bold text-rose-600/70 mt-1">
            {isAr
              ? "متابعة العلامات الحيوية، والملاحظات اليومية، والسوائل"
              : "Daily progress notes, vitals, fluid input/output, and BCMA"}
          </p>
        </div>
        <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow flex items-center gap-2 transition whitespace-nowrap">
          <Plus className="h-4 w-4" />{" "}
          {isAr ? "إضافة تقييم جديد" : "New Assessment"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-xl border border-rose-100 shadow-sm p-5 hover:border-rose-300 transition"
          >
            <div className="flex justify-between items-start border-b border-slate-100 pb-3 mb-3">
              <div>
                <h3 className="text-lg font-black text-slate-800">
                  {note.patientName}
                </h3>
                <div className="text-xs font-bold text-slate-500 font-mono mt-1 flex items-center gap-2">
                  <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    {note.bedId}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />{" "}
                    {new Date(note.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isAr ? "التمريض" : "Charting Nurse"}
                </div>
                <div className="text-sm font-bold text-rose-700">
                  {note.nurseId}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
                  BP
                </div>
                <div className="font-mono font-black text-slate-700">
                  {note.bp}
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
                  HR
                </div>
                <div className="font-mono font-black text-rose-600 flex items-center justify-center gap-1">
                  <HeartPulse className="w-3 h-3" /> {note.hr}
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
                  TEMP
                </div>
                <div className="font-mono font-black text-amber-600">
                  {note.temp}°C
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">
                  SPO2
                </div>
                <div className="font-mono font-black text-blue-600">
                  {note.spo2}
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-center flex flex-col justify-center items-center col-span-2 md:col-span-1 hover:bg-slate-100 cursor-pointer transition">
                <Activity className="w-5 h-5 text-slate-400 mb-1" />
                <span className="text-xs font-bold text-slate-500">
                  {isAr ? "رسم القلب" : "Trend"}
                </span>
              </div>
            </div>

            <div className="bg-rose-50/50 p-4 rounded-lg border border-rose-100">
              <div className="flex items-start gap-3">
                <Stethoscope className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-slate-700">{note.note}</p>
              </div>
            </div>
          </div>
        ))}

        {notes.length === 0 && (
          <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center text-slate-400 font-bold">
            {isAr
              ? "لا توجد ملاحظات تمريضية اليوم"
              : "No nursing notes for today"}
          </div>
        )}
      </div>
    </div>
  );
}

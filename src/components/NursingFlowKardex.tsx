import React, { useState } from "react";
import { ClipboardList, Activity, Droplet, UserCheck, ShieldAlert, HeartPulse, ListPlus } from "lucide-react";
import { toast } from "sonner";

interface Props {
  language: "ar" | "en";
}

export default function NursingFlowKardex({ language }: Props) {
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState<"vitals" | "io" | "assessments">("vitals");

  const [gcsScore, setGcsScore] = useState({ eye: 4, verbal: 5, motor: 6 });
  const [bradenScore, setBradenScore] = useState({ sensory: 4, moisture: 4, activity: 4, mobility: 4, nutrition: 4, friction: 3 });

  const totalGCS = gcsScore.eye + gcsScore.verbal + gcsScore.motor;
  const totalBraden = bradenScore.sensory + bradenScore.moisture + bradenScore.activity + bradenScore.mobility + bradenScore.nutrition + bradenScore.friction;

  const handleSaveAssessment = () => {
    toast.success(isAr ? "تم حفظ التقييم بنجاح!" : "Assessment saved successfully!");
  };

  return (
    <div className="p-4 md:p-6 bg-slate-50 min-h-full font-sans" dir={isAr ? "rtl" : "ltr"}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <ClipboardList className="w-7 h-7 text-rose-600" />
            {isAr ? "شيتات التمريض المتخصصة (Intensive Flowsheets)" : "Intensive Nursing Flowsheets"}
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            {isAr ? "العلامات الحيوية المستمرة، السوائل، وتقييمات الوعي ومخاطر السقوط." : "Continuous vitals, intensive I/O, and specialized clinical assessments."}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
        {/* Patient Banner */}
        <div className="p-4 bg-slate-800 text-white flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-black text-xl shrink-0">
              S
            </div>
            <div>
              <h3 className="font-black text-lg leading-tight">Said Kamal</h3>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300 mt-1 font-mono">
                <span>MRN-2026-0341</span>
                <span>|</span>
                <span>ICU-BED-04</span>
                <span>|</span>
                <span className="bg-rose-500/20 text-rose-300 px-2 rounded">High Risk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 overflow-x-auto">
          <button 
            onClick={() => setActiveTab("vitals")}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors ${activeTab === "vitals" ? "bg-white text-rose-600 border-b-2 border-rose-600" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`}
          >
            <Activity className="w-4 h-4"/> {isAr ? "العلامات الحيوية" : "Continuous Vitals"}
          </button>
          <button 
            onClick={() => setActiveTab("io")}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors ${activeTab === "io" ? "bg-white text-blue-600 border-b-2 border-blue-600" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`}
          >
            <Droplet className="w-4 h-4"/> {isAr ? "شيت السوائل" : "Intake / Output"}
          </button>
          <button 
            onClick={() => setActiveTab("assessments")}
            className={`flex items-center gap-2 px-6 py-4 font-bold text-sm whitespace-nowrap transition-colors ${activeTab === "assessments" ? "bg-white text-emerald-600 border-b-2 border-emerald-600" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`}
          >
            <UserCheck className="w-4 h-4"/> {isAr ? "التقييمات التخصصية" : "Clinical Assessments"}
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          
          {activeTab === "vitals" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-700">{isAr ? "تسجيل العلامات الحيوية" : "Record Vitals"}</h4>
                <button className="bg-slate-100 text-slate-700 p-2 rounded-xl hover:bg-slate-200 transition font-bold text-xs flex items-center gap-2">
                  <HeartPulse className="w-4 h-4"/> {isAr ? "قراءة من الأجهزة" : "Fetch from Monitors"}
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">BP (mmHg)</label>
                  <input type="text" defaultValue="120/80" className="w-full border border-slate-200 rounded-xl p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none font-mono font-bold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">HR (bpm)</label>
                  <input type="text" defaultValue="85" className="w-full border border-slate-200 rounded-xl p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none font-mono font-bold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Temp (°C)</label>
                  <input type="text" defaultValue="37.2" className="w-full border border-slate-200 rounded-xl p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none font-mono font-bold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">SpO2 (%)</label>
                  <input type="text" defaultValue="98" className="w-full border border-slate-200 rounded-xl p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none font-mono font-bold" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">RR (bpm)</label>
                  <input type="text" defaultValue="18" className="w-full border border-slate-200 rounded-xl p-2 text-sm focus:ring-2 focus:ring-rose-500 outline-none font-mono font-bold" />
                </div>
              </div>
              <button className="bg-rose-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-rose-700 transition">
                {isAr ? "حفظ السجل" : "Save Vitals"}
              </button>
            </div>
          )}

          {activeTab === "io" && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Intake */}
                 <div className="border border-blue-100 rounded-2xl p-4 bg-blue-50/50">
                    <h4 className="font-black text-blue-800 mb-4 flex items-center gap-2">
                      <ListPlus className="w-5 h-5"/> {isAr ? "المدخلات (Intake)" : "Intake"}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <select className="border border-slate-200 rounded-xl p-2 text-sm flex-1 focus:outline-none">
                          <option>IV Fluid (Normal Saline)</option>
                          <option>Oral (Water)</option>
                          <option>Blood Transfusion</option>
                        </select>
                        <input type="number" placeholder="ml" className="w-24 border border-slate-200 rounded-xl p-2 text-sm focus:outline-none" />
                        <button className="bg-blue-600 text-white px-4 rounded-xl font-bold text-sm hover:bg-blue-700">+</button>
                      </div>
                    </div>
                 </div>

                 {/* Output */}
                 <div className="border border-amber-100 rounded-2xl p-4 bg-amber-50/50">
                    <h4 className="font-black text-amber-800 mb-4 flex items-center gap-2">
                      <ListPlus className="w-5 h-5"/> {isAr ? "المخرجات (Output)" : "Output"}
                    </h4>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <select className="border border-slate-200 rounded-xl p-2 text-sm flex-1 focus:outline-none">
                          <option>Urine (Catheter)</option>
                          <option>Drain (Surgical)</option>
                          <option>Emesis / Vomitus</option>
                        </select>
                        <input type="number" placeholder="ml" className="w-24 border border-slate-200 rounded-xl p-2 text-sm focus:outline-none" />
                        <button className="bg-amber-600 text-white px-4 rounded-xl font-bold text-sm hover:bg-amber-700">+</button>
                      </div>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-800 text-white p-4 rounded-2xl flex justify-between items-center">
                <span className="font-bold">{isAr ? "ميزان السوائل (24H Balance)" : "24H Fluid Balance"}</span>
                <span className="font-mono text-xl font-black text-emerald-400">+ 150 ml</span>
              </div>
            </div>
          )}

          {activeTab === "assessments" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
              {/* GCS */}
              <div className="border border-slate-200 rounded-2xl p-4">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                  <h4 className="font-black text-slate-800">Glasgow Coma Scale (GCS)</h4>
                  <div className="bg-indigo-100 text-indigo-800 font-black text-xl px-3 py-1 rounded-lg">
                    {totalGCS}/15
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-2 block">Eye Opening (E)</label>
                    <input type="range" min="1" max="4" value={gcsScore.eye} onChange={(e) => setGcsScore({...gcsScore, eye: parseInt(e.target.value)})} className="w-full accent-indigo-600" />
                    <div className="text-xs text-center font-medium text-slate-700 mt-1">Score: {gcsScore.eye}</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-2 block">Verbal Response (V)</label>
                    <input type="range" min="1" max="5" value={gcsScore.verbal} onChange={(e) => setGcsScore({...gcsScore, verbal: parseInt(e.target.value)})} className="w-full accent-indigo-600" />
                    <div className="text-xs text-center font-medium text-slate-700 mt-1">Score: {gcsScore.verbal}</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 mb-2 block">Motor Response (M)</label>
                    <input type="range" min="1" max="6" value={gcsScore.motor} onChange={(e) => setGcsScore({...gcsScore, motor: parseInt(e.target.value)})} className="w-full accent-indigo-600" />
                    <div className="text-xs text-center font-medium text-slate-700 mt-1">Score: {gcsScore.motor}</div>
                  </div>
                </div>
              </div>

              {/* Braden Scale */}
              <div className="border border-slate-200 rounded-2xl p-4 flex flex-col">
                <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
                  <h4 className="font-black text-slate-800">Braden Scale (Pressure Ulcer Risk)</h4>
                  <div className={`font-black text-xl px-3 py-1 rounded-lg ${totalBraden <= 9 ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'}`}>
                    {totalBraden}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-4 flex-1">
                   {isAr ? "تقييم مخاطر تقرحات الفراش. (أقل من 9 = خطر شديد)." : "Pressure ulcer risk assessment. (Below 9 = Severe risk)."}
                </p>
                
                <button onClick={handleSaveAssessment} className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition">
                  {isAr ? "اعتماد التقييمات" : "Sign & Submit Assessments"}
                </button>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { 
  BarChart4, PieChart, TrendingUp, 
  Download, Filter, Activity, Users, DollarSign
} from "lucide-react";
import { toast } from "sonner";

interface Props {
  language: "ar" | "en";
}

export default function ReportsBIDashboard({ language }: Props) {
  const isAr = language === "ar";
  const [activeTab, setActiveTab] = useState<"clinical" | "financial">("clinical");

  return (
    <div className="p-4 md:p-6 bg-slate-50 min-h-full font-sans animate-fade-in" dir={isAr ? "rtl" : "ltr"}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <BarChart4 className="w-7 h-7 text-indigo-600" />
            {isAr ? "التقارير وذكاء الأعمال (BI)" : "Reports & BI Dashboard"}
          </h2>
          <p className="text-slate-500 font-medium mt-1">
            {isAr ? "تحليل البيانات السريرية والمالية للمستشفى" : "Analyze hospital clinical and financial data"}
          </p>
        </div>
        <div className="flex bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <button 
            onClick={() => setActiveTab("clinical")}
            className={`px-6 py-2.5 text-sm font-bold transition-colors ${activeTab === "clinical" ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600" : "text-slate-500 hover:bg-slate-50"}`}
          >
            {isAr ? "تقارير سريرية" : "Clinical Reports"}
          </button>
          <button 
            onClick={() => setActiveTab("financial")}
            className={`px-6 py-2.5 text-sm font-bold transition-colors ${activeTab === "financial" ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600" : "text-slate-500 hover:bg-slate-50"}`}
          >
            {isAr ? "تقارير مالية" : "Financial Reports"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-indigo-50 p-4 rounded-xl">
            <Users className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
             <p className="text-sm font-bold text-slate-500">{isAr ? "إجمالي المرضى (الشهر)" : "Total Patients (Month)"}</p>
             <h4 className="text-2xl font-black text-slate-800">12,450</h4>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-emerald-50 p-4 rounded-xl">
            <Activity className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
             <p className="text-sm font-bold text-slate-500">{isAr ? "نسبة إشغال الأسرة" : "Bed Occupancy Rate"}</p>
             <h4 className="text-2xl font-black text-slate-800">85%</h4>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-amber-50 p-4 rounded-xl">
            <DollarSign className="w-6 h-6 text-amber-600" />
          </div>
          <div>
             <p className="text-sm font-bold text-slate-500">{isAr ? "الإيرادات التقديرية" : "Estimated Revenue"}</p>
             <h4 className="text-2xl font-black text-slate-800">4.2M EGP</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 min-h-[400px] flex flex-col justify-center items-center text-center">
             <PieChart className="w-16 h-16 text-slate-200 mb-4" />
             <h3 className="text-xl font-bold text-slate-700 mb-2">{isAr ? "واجهة الرسوم البيانية التفاعلية" : "Interactive BI Charts Workspace"}</h3>
             <p className="text-slate-500 max-w-md mx-auto mb-6">
               {isAr ? "هذه المساحة مخصصة لدمج مكتبات الرسوم البيانية مثل Recharts لعرض الإحصائيات بالتفصيل." : "This space is reserved for integrating charting libraries like Recharts to display detailed metrics."}
             </p>
             <div className="flex gap-2 justify-center">
               <button onClick={() => toast.success("Exporting to PDF")} className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-lg font-bold transition flex items-center gap-2">
                 <Download className="w-4 h-4" /> {isAr ? "تصدير PDF" : "Export PDF"}
               </button>
               <button onClick={() => toast.success("Exporting to Excel")} className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-4 py-2 rounded-lg font-bold transition flex items-center gap-2">
                 <Download className="w-4 h-4" /> {isAr ? "تصدير Excel" : "Export Excel"}
               </button>
             </div>
          </div>
        </div>

        <div className="space-y-4">
           <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
             <h3 className="font-bold text-slate-800 mb-4">{isAr ? "التقارير الجاهزة" : "Canned Reports"}</h3>
             <div className="space-y-3">
               <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 p-3 rounded-xl flex items-center gap-3 transition border border-slate-200">
                 <TrendingUp className="w-5 h-5 text-indigo-500" />
                 <span className="text-sm font-bold text-left flex-1">{isAr ? "تقرير الدخل الشهري" : "Monthly Revenue Report"}</span>
               </button>
               <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 p-3 rounded-xl flex items-center gap-3 transition border border-slate-200">
                 <Users className="w-5 h-5 text-emerald-500" />
                 <span className="text-sm font-bold text-left flex-1">{isAr ? "إحصائيات العيادات" : "Clinics Statistics"}</span>
               </button>
               <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 p-3 rounded-xl flex items-center gap-3 transition border border-slate-200">
                 <Activity className="w-5 h-5 text-rose-500" />
                 <span className="text-sm font-bold text-left flex-1">{isAr ? "تقارير الوفيات والمضاعفات" : "Morbidity & Mortality"}</span>
               </button>
               <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 p-3 rounded-xl flex items-center gap-3 transition border border-slate-200">
                 <Filter className="w-5 h-5 text-amber-500" />
                 <span className="text-sm font-bold text-left flex-1">{isAr ? "منشئ تقارير مخصص" : "Custom Report Builder"}</span>
               </button>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}

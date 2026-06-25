import React, { useState } from "react";
import { 
  Printer, Share2, MoreHorizontal, AlertTriangle, UserPlus, FileText, Beaker, Zap, Pill, 
  Calendar, CheckCircle2, ChevronRight, Download, Activity, HeartPulse, Droplets, Thermometer,
  Wind, Scale, Search, Clock, Plus, ArrowRight
} from "lucide-react";
import { motion } from "motion/react";

interface Props {
  language: "ar" | "en";
  currentUser?: any;
  systemUsers?: any[];
  departments?: string[];
}

export default function DoctorConsultationDesk({ language, currentUser, systemUsers, departments }: Props) {
  const isAr = language === "ar";
  
  const [activeTab, setActiveTab] = useState("Overview");
  const [noteTab, setNoteTab] = useState("Subjective");

  const tabs = ["Overview", "Complaints", "Allergies", "History", "Vitals", "Diagnosis", "Orders", "Prescription", "Clinical Notes"];

  return (
    <div className="flex flex-col h-full bg-slate-50 font-sans" dir={isAr ? "rtl" : "ltr"}>
      
      {/* Top Banner - Patient Context */}
      <div className="bg-white p-4 sm:p-6 border-b border-slate-200 shrink-0">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-slate-100 shrink-0">
              <img src="https://i.pravatar.cc/150?u=a042581f4e29026704b" alt="Ahmed Mohamed Ali" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-xs font-bold text-blue-600 mb-0.5">MRN-00012345</div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-800">Ahmed Mohamed Ali</h1>
                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center">
                  <span className="text-xs">♂</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-700 mb-2">62 Y , Male</div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-1 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-rose-500" />
                  15 May 1962 (62 YO)
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-teal-500" />
                  +20101 123 4567 <span className="bg-rose-100 text-rose-700 px-1 rounded text-[10px] font-bold ml-1">B+</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-6 xl:gap-10">
            <div className="flex flex-col justify-center">
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">National ID</div>
              <div className="text-sm font-bold text-slate-800 mb-2">28705152203551</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Policy No.</div>
              <div className="text-sm font-bold text-slate-800">AXA-987654321</div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Insurance</div>
              <div className="text-sm font-bold text-slate-800">AXA Insurance</div>
            </div>
          </div>

          <div className="hidden xl:flex gap-4">
            <div className="bg-rose-50 border border-rose-100 rounded-xl p-3 w-40 flex flex-col justify-center">
              <div className="text-xs font-bold text-rose-600 mb-2">Allergies</div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" /> Penicillin
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 ml-1"></div> Aspirin
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 w-48 flex flex-col justify-center">
              <div className="text-xs font-bold text-blue-600 mb-2">Chronic Diseases</div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1"></div> Hypertension
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-1"></div> Diabetes Mellitus Type 2
              </div>
            </div>
          </div>
          
          <div className="hidden 2xl:flex gap-4">
             <div className="border-l border-slate-200 pl-4 flex flex-col justify-center">
                 <div className="text-xs font-bold text-slate-800 mb-2">Last Visit</div>
                 <div className="text-sm font-bold text-slate-800 mb-1">20 May 2024</div>
                 <div className="text-xs font-bold text-slate-700">{currentUser ? (isAr ? currentUser.nameAr : currentUser.nameEn) : "Dr. Ahmed Mostafa"}</div>
                 <div className="text-[10px] text-slate-500">Cardiology</div>
             </div>
             <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 w-48 flex flex-col justify-center relative">
                 <div className="text-xs font-bold text-teal-600 mb-2">Next Appointment</div>
                 <div className="text-sm font-bold text-slate-800 mb-1">24 May 2024</div>
                 <div className="text-xs text-slate-500 font-medium">10:30 AM</div>
                 <button className="absolute bottom-3 right-3 border border-blue-200 text-blue-600 px-2 py-0.5 rounded text-[10px] font-bold hover:bg-blue-50">Details</button>
             </div>
          </div>

          <div className="flex lg:flex-col justify-end gap-2 shrink-0">
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
                <Printer className="w-3.5 h-3.5 text-teal-600" /> Print
              </button>
              <button className="flex items-center gap-1.5 border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
                <Share2 className="w-3.5 h-3.5 text-teal-600" /> Share
              </button>
              <button className="flex items-center gap-1 border border-slate-200 text-slate-600 px-2 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors">
                <MoreHorizontal className="w-4 h-4 text-slate-600" /> More
              </button>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-6 flex items-center gap-6 overflow-x-auto custom-scrollbar border-b border-slate-200">
          {tabs.map((tab) => {
            const isActive = tab === activeTab || (tab === "Orders 3" && activeTab === "Orders") || (tab === "Results 5" && activeTab === "Results");
            const label = tab.replace(/[0-9]/g, '').trim();
            const badge = tab.match(/[0-9]/)?.[0];
            
            return (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-1.5
                  ${isActive ? "text-blue-600" : "text-slate-500 hover:text-slate-800"}
                `}
              >
                {label}
                {badge && (
                  <span className="bg-slate-800 text-white text-[10px] px-1.5 py-0.5 rounded-md leading-none">{badge}</span>
                )}
                {isActive && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Column 1: Patient Summary & Vitals */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h3 className="text-sm font-bold text-blue-800 mb-4">Patient Summary</h3>
              
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-xs text-slate-500 col-span-1">Address</div>
                  <div className="text-xs font-semibold text-slate-800 col-span-2">23 El Nozha St. Nasr City,<br/>Cairo, Egypt</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-xs text-slate-500 col-span-1">Marital Status</div>
                  <div className="text-xs font-semibold text-slate-800 col-span-2">Married</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-xs text-slate-500 col-span-1">Occupation</div>
                  <div className="text-xs font-semibold text-slate-800 col-span-2">Retired</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-xs text-slate-500 col-span-1">Email</div>
                  <div className="text-xs font-semibold text-slate-800 col-span-2">ahmed.mali@email.com</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-xs text-slate-500 col-span-1">Primary Contact</div>
                  <div className="text-xs font-semibold text-slate-800 col-span-2">Amal Ahmed (Wife)<br/><span className="text-slate-500">+20100 987 6543</span></div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-blue-800 flex items-center gap-1.5">
                  Vitals <span className="text-slate-400 text-xs font-normal">(Today 09:15 AM)</span>
                </h3>
                <button className="text-blue-600 text-xs font-bold border border-blue-200 px-2 py-0.5 rounded hover:bg-blue-50">Edit</button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <HeartPulse className="w-4 h-4 text-rose-500" /> Blood Pressure
                  </div>
                  <div className="text-sm font-bold text-slate-800">120/80 <span className="text-xs text-slate-500 font-normal">mmHg</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Activity className="w-4 h-4 text-blue-400" /> Heart Rate
                  </div>
                  <div className="text-sm font-bold text-slate-800">78 <span className="text-xs text-slate-500 font-normal">bpm</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Wind className="w-4 h-4 text-teal-400" /> Respiratory Rate
                  </div>
                  <div className="text-sm font-bold text-slate-800">18 <span className="text-xs text-slate-500 font-normal">/min</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Thermometer className="w-4 h-4 text-amber-500" /> Temperature
                  </div>
                  <div className="text-sm font-bold text-slate-800">36.6 <span className="text-xs text-slate-500 font-normal">°C</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Droplets className="w-4 h-4 text-blue-500" /> Oxygen Saturation
                  </div>
                  <div className="text-sm font-bold text-slate-800">98 <span className="text-xs text-slate-500 font-normal">%</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Scale className="w-4 h-4 text-slate-400" /> Weight
                  </div>
                  <div className="text-sm font-bold text-slate-800">82 <span className="text-xs text-slate-500 font-normal">Kg</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Scale className="w-4 h-4 text-slate-400" /> Height
                  </div>
                  <div className="text-sm font-bold text-slate-800">175 <span className="text-xs text-slate-500 font-normal">cm</span></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <Scale className="w-4 h-4 text-slate-400" /> BMI
                  </div>
                  <div className="text-sm font-bold text-slate-800">26.8</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Clinical Notes & Vitals Trend */}
          <div className="lg:col-span-5 space-y-6 flex flex-col">
            {activeTab === "Clinical Notes" && (
            <div className="bg-white border border-slate-200 rounded-xl p-4 min-h-[400px] flex flex-col flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-blue-800">Clinical Notes (SOAP)</h3>
                <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 flex items-center gap-1.5 transition-colors shadow-sm">
                  <Plus className="w-3.5 h-3.5" /> New Note
                </button>
              </div>

              <div className="flex gap-4 flex-1">
                {/* Vertical Tabs */}
                <div className="flex flex-col gap-2 w-28 shrink-0">
                  {['Subjective', 'Objective', 'Assessment', 'Plan'].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setNoteTab(t)}
                      className={`text-left px-3 py-2.5 rounded-lg text-xs font-bold transition-all border ${
                        noteTab === t 
                        ? 'bg-blue-50 border-blue-100 text-blue-700' 
                        : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`inline-block w-4 ${noteTab === t ? 'text-blue-600' : 'text-slate-400'}`}>{t[0]}</span> {t}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content */}
                <div className="flex-1 border-l border-slate-100 pl-4 py-2">
                  {noteTab === "Subjective" && (
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 mb-1">Chief Complaint</h4>
                        <p className="text-sm text-slate-600">Chest pain and shortness of breath on exertion since 2 days.</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-800 mb-1">History of Present Illness</h4>
                        <p className="text-sm text-slate-600">The patient is having central chest pain, pressure like, increases with exertion and relieved by rest. Associated with mild shortness of breath. No fever. No cough.</p>
                      </div>
                      <div className="pt-2">
                        <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-blue-600">
                          <FileText className="w-3.5 h-3.5" /> Add Attachment
                        </button>
                      </div>
                    </div>
                  )}
                  {noteTab !== "Subjective" && (
                     <div className="text-sm text-slate-500 italic">Content for {noteTab} goes here...</div>
                  )}
                </div>
              </div>
            </div>
            )}

            {activeTab === "Diagnosis" && (
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-blue-800">Diagnosis (ICD-10)</h3>
                  <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 flex items-center gap-1.5 transition-colors shadow-sm">
                    <Plus className="w-3.5 h-3.5" /> Add Diagnosis
                  </button>
                </div>
                <div className="mb-4 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input type="text" placeholder="Search ICD-10 codes..." className="w-full pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center">
                    <div>
                      <div className="text-xs font-bold text-slate-800">I20.9 - Angina pectoris, unspecified</div>
                      <div className="text-[10px] text-slate-500">Primary Diagnosis • Added Today</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 text-[10px] font-bold">Edit</button>
                      <button className="text-rose-600 text-[10px] font-bold">Delete</button>
                    </div>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-3 flex justify-between items-center">
                    <div>
                      <div className="text-xs font-bold text-slate-800">I10 - Essential (primary) hypertension</div>
                      <div className="text-[10px] text-slate-500">Comorbidity • Chronic</div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-blue-600 text-[10px] font-bold">Edit</button>
                      <button className="text-rose-600 text-[10px] font-bold">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Orders" && (
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-blue-800">Order Management</h3>
                </div>
                <div className="flex gap-3 mb-6">
                  <button className="flex-1 bg-blue-50 border border-blue-200 text-blue-700 py-3 rounded-lg flex flex-col items-center gap-1 hover:bg-blue-100 transition">
                    <Beaker className="w-5 h-5" />
                    <span className="text-xs font-bold">Order Lab</span>
                  </button>
                  <button className="flex-1 bg-emerald-50 border border-emerald-200 text-emerald-700 py-3 rounded-lg flex flex-col items-center gap-1 hover:bg-emerald-100 transition">
                    <Zap className="w-5 h-5" />
                    <span className="text-xs font-bold">Order Radiology</span>
                  </button>
                  <button className="flex-1 bg-purple-50 border border-purple-200 text-purple-700 py-3 rounded-lg flex flex-col items-center gap-1 hover:bg-purple-100 transition">
                    <Activity className="w-5 h-5" />
                    <span className="text-xs font-bold">Order Procedure</span>
                  </button>
                </div>
                <div className="text-sm font-bold text-slate-700 mb-2">Recent Orders</div>
                <div className="text-xs text-slate-500 italic">No new orders placed in this session.</div>
              </div>
            )}

            {activeTab === "Prescription" && (
              <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-blue-800">Prescription (eRx)</h3>
                  <div className="flex gap-2">
                    <button className="text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-amber-100 flex items-center gap-1 transition-colors">
                      <AlertTriangle className="w-3.5 h-3.5" /> Allergy Check
                    </button>
                    <button className="text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-lg text-[10px] font-bold hover:bg-indigo-100 flex items-center gap-1 transition-colors">
                      <Zap className="w-3.5 h-3.5" /> Drug Interaction
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-700 flex items-center gap-1.5 transition-colors shadow-sm">
                      <Plus className="w-3.5 h-3.5" /> Add Drug
                    </button>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border border-slate-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="text-sm font-bold text-slate-800 flex items-center gap-2">Aspirin 81 mg <span className="bg-emerald-100 text-emerald-700 text-[9px] px-1.5 rounded">Safe</span></div>
                        <div className="text-xs text-slate-500">1 Tablet(s) - Oral - Once Daily - After Food - 30 Days</div>
                      </div>
                      <button className="text-rose-600 text-[10px] font-bold">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {["Overview", "Complaints", "Allergies", "History", "Vitals"].includes(activeTab) && (

            <div className="bg-white border border-slate-200 rounded-xl p-4">
               <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-blue-800">Vitals Trend</h3>
                  <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 rounded-full bg-blue-500"></div> BP (mmHg)</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 rounded-full bg-teal-400"></div> Pulse (bpm)</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-slate-600"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Temp (°C)</span>
                  </div>
                  <select className="text-xs border border-slate-200 rounded p-1 outline-none text-slate-600">
                    <option>Last 7 Days</option>
                  </select>
               </div>
               
               {/* Mock Chart Area */}
               <div className="h-32 w-full flex items-end justify-between relative mt-8 border-b border-slate-100 pb-2">
                  <div className="absolute inset-0 flex flex-col justify-between z-0">
                    <div className="w-full border-t border-slate-100 h-0"></div>
                    <div className="w-full border-t border-slate-100 h-0"></div>
                    <div className="w-full border-t border-slate-100 h-0"></div>
                    <div className="w-full border-t border-slate-100 h-0"></div>
                  </div>
                  
                  {/* Y Axis labels left */}
                  <div className="absolute left-0 top-[-10px] bottom-0 flex flex-col justify-between text-[10px] text-blue-400 font-mono z-10 w-6">
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>
                  
                   {/* Y Axis labels right */}
                  <div className="absolute right-0 top-[-10px] bottom-0 flex flex-col justify-between text-[10px] text-amber-500 font-mono z-10 w-6 text-right">
                    <span>40</span>
                    <span>38</span>
                    <span>36</span>
                    <span>34</span>
                  </div>

                   <div className="w-full flex justify-between px-8 z-10">
                     {[14,15,16,17,18,19,20].map(day => (
                       <div key={day} className="flex flex-col items-center gap-1">
                          <div className="relative w-2 h-24">
                             {/* Fake data points */}
                             <div className="absolute w-2 h-2 rounded-full bg-blue-500 left-0" style={{bottom: `${Math.random() * 20 + 70}%`}}></div>
                             <div className="absolute w-2 h-2 rounded-full bg-teal-400 left-0" style={{bottom: `${Math.random() * 10 + 40}%`}}></div>
                             <div className="absolute w-2 h-2 rounded-full bg-amber-400 left-0" style={{bottom: `${Math.random() * 5 + 15}%`}}></div>
                          </div>
                          <div className="text-[10px] text-slate-500 font-medium">{day} May</div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
            )}
          </div>

          {/* Column 3: Orders, Meds, Quick Actions */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-blue-800">Active Orders</h3>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                <div className="border border-slate-100 rounded-xl p-3 flex gap-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Beaker className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-0.5">LAB</div>
                    <div className="text-xs font-bold text-slate-800">Complete Blood Count (CBC)</div>
                    <div className="text-[10px] text-slate-500 mt-1">Ordered by <span className="font-bold text-slate-700">{currentUser ? (isAr ? currentUser.nameAr : currentUser.nameEn) : "Dr. Ahmed Mostafa"}</span></div>
                  </div>
                  <div className="absolute top-3 right-3 text-right">
                    <div className="text-[10px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded ml-auto w-max mb-1">Ordered</div>
                    <div className="text-[10px] text-slate-400">20 May 2024 09:20 AM</div>
                  </div>
                </div>

                <div className="border border-slate-100 rounded-xl p-3 flex gap-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <Zap className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-0.5">RAD</div>
                    <div className="text-xs font-bold text-slate-800">Chest X-Ray</div>
                    <div className="text-[10px] text-slate-500 mt-1">Ordered by <span className="font-bold text-slate-700">{currentUser ? (isAr ? currentUser.nameAr : currentUser.nameEn) : "Dr. Ahmed Mostafa"}</span></div>
                  </div>
                  <div className="absolute top-3 right-3 text-right">
                    <div className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded ml-auto w-max mb-1">Scheduled</div>
                    <div className="text-[10px] text-slate-400">20 May 2024 09:25 AM</div>
                  </div>
                </div>

                <div className="border border-slate-100 rounded-xl p-3 flex gap-3 relative">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center shrink-0 border border-orange-100">
                    <FileText className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-orange-500 uppercase tracking-wider mb-0.5">MED</div>
                    <div className="text-xs font-bold text-slate-800">Prescription</div>
                    <div className="text-[10px] text-slate-500 mt-1">3 Medications</div>
                  </div>
                  <div className="absolute top-3 right-3 text-right">
                    <div className="text-[10px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded ml-auto w-max mb-1">Pending</div>
                    <div className="text-[10px] text-slate-400">20 May 2024 09:30 AM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-blue-800">Medications</h3>
                <button className="text-blue-600 text-xs font-bold hover:underline">View All</button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Amlodipine 5 mg</div>
                    <div className="text-[10px] text-slate-500">1 Tab - Once Daily - After Breakfast</div>
                  </div>
                  <div className="text-[10px] font-bold text-teal-600 border border-teal-200 bg-teal-50 px-2 py-0.5 rounded-full">Active</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Atorvastatin 20 mg</div>
                    <div className="text-[10px] text-slate-500">1 Tab - Once Daily - At Bedtime</div>
                  </div>
                  <div className="text-[10px] font-bold text-teal-600 border border-teal-200 bg-teal-50 px-2 py-0.5 rounded-full">Active</div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Metformin 500 mg</div>
                    <div className="text-[10px] text-slate-500">1 Tab - Twice Daily - After Meals</div>
                  </div>
                  <div className="text-[10px] font-bold text-teal-600 border border-teal-200 bg-teal-50 px-2 py-0.5 rounded-full">Active</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4">
              <h3 className="text-sm font-bold text-blue-800 mb-4">Actions</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
                 {[
                   {icon: UserPlus, label: "Admit\nPatient", color: "rose"},
                   {icon: Share2, label: "Refer\nDoctor", color: "indigo"},
                   {icon: Calendar, label: "Follow Up", color: "blue"},
                   {icon: ArrowRight, label: "Discharge", color: "emerald"},
                 ].map((action, i) => {
                   const AIcon = action.icon;
                   return (
                     <button key={i} className="flex flex-col items-center gap-2 group">
                        <div className={`w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center bg-white group-hover:bg-slate-50 transition-colors shadow-sm`}>
                          <AIcon className={`w-4 h-4 text-${action.color}-500`} />
                        </div>
                        <span className="text-[9px] font-bold text-slate-600 text-center leading-tight whitespace-pre-wrap">{action.label}</span>
                     </button>
                   )
                 })}
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Patient Queue Bottom Bar */}
      <div className="bg-white border-t border-slate-200 shrink-0 shadow-[0_-4px_6px_-1px_rgb(0,0,0,0.05)]">
         <div className="flex items-center gap-4 px-4 py-3 border-b border-slate-100">
           <h3 className="text-sm font-bold text-blue-800 shrink-0">Patient Queue</h3>
           <div className="flex gap-4 overflow-x-auto custom-scrollbar">
             {["All (12)", "Waiting (5)", "With Doctor (2)", "Investigation (1)", "Completed (4)"].map((q, i) => (
               <button key={i} className={`text-xs font-bold whitespace-nowrap ${i === 0 ? "text-blue-600 border-b-2 border-blue-600 pb-1" : "text-slate-500 pb-1"}`}>
                 {q}
               </button>
             ))}
           </div>
           <button className="ml-auto bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shrink-0 hover:bg-blue-700">
             Next Patient <ArrowRight className="w-3.5 h-3.5" />
           </button>
         </div>
         
         <div className="flex gap-4 p-3 overflow-x-auto custom-scrollbar bg-slate-50/50">
            {/* Active Patient Card */}
            <div className="bg-white border-2 border-amber-300 rounded-xl p-2 w-64 shrink-0 shadow-sm relative">
              <div className="absolute top-2 right-2 cursor-pointer"><div className="w-2 h-2 rounded-full bg-slate-200 flex items-center justify-center"><div className="w-1.5 h-0.5 bg-slate-400 rotate-45 absolute"></div><div className="w-1.5 h-0.5 bg-slate-400 -rotate-45 absolute"></div></div></div>
              <div className="flex items-center justify-between mb-2 pr-4">
                <div className="text-[10px] font-bold text-slate-500">09:30 AM</div>
                <div className="text-[10px] font-bold text-amber-600">MRN-00012345</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704b" className="w-8 h-8 rounded-full" alt="pic" />
                <div className="text-xs font-bold text-slate-800">Ahmed Mohamed Ali</div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">With Doctor</span>
              </div>
            </div>

            {/* Waiting Card 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-2 w-64 shrink-0 hover:border-blue-300 transition-colors cursor-pointer relative">
               <div className="absolute top-2 right-2 cursor-pointer"><div className="w-2 h-2 rounded-full bg-slate-200 flex items-center justify-center"><div className="w-1.5 h-0.5 bg-slate-400 rotate-45 absolute"></div><div className="w-1.5 h-0.5 bg-slate-400 -rotate-45 absolute"></div></div></div>
              <div className="flex items-center justify-between mb-2 pr-4">
                <div className="text-[10px] font-bold text-slate-500">09:45 AM</div>
                <div className="text-[10px] font-bold text-slate-500">MRN-00012346</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-8 h-8 rounded-full" alt="pic" />
                <div className="text-xs font-bold text-slate-800">Sara Hassan</div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">Waiting</span>
              </div>
            </div>

            {/* Waiting Card 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-2 w-64 shrink-0 hover:border-blue-300 transition-colors cursor-pointer relative">
              <div className="absolute top-2 right-2 cursor-pointer"><div className="w-2 h-2 rounded-full bg-slate-200 flex items-center justify-center"><div className="w-1.5 h-0.5 bg-slate-400 rotate-45 absolute"></div><div className="w-1.5 h-0.5 bg-slate-400 -rotate-45 absolute"></div></div></div>
              <div className="flex items-center justify-between mb-2 pr-4">
                <div className="text-[10px] font-bold text-slate-500">10:00 AM</div>
                <div className="text-[10px] font-bold text-slate-500">MRN-00012347</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704c" className="w-8 h-8 rounded-full" alt="pic" />
                <div className="text-xs font-bold text-slate-800">Mohamed Tarek</div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">Waiting</span>
              </div>
            </div>

             {/* Investigation Card 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-2 w-64 shrink-0 hover:border-blue-300 transition-colors cursor-pointer relative">
               <div className="absolute top-2 right-2 cursor-pointer"><div className="w-2 h-2 rounded-full bg-slate-200 flex items-center justify-center"><div className="w-1.5 h-0.5 bg-slate-400 rotate-45 absolute"></div><div className="w-1.5 h-0.5 bg-slate-400 -rotate-45 absolute"></div></div></div>
              <div className="flex items-center justify-between mb-2 pr-4">
                <div className="text-[10px] font-bold text-slate-500">08:15 AM</div>
                <div className="text-[10px] font-bold text-slate-500">MRN-00012348</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704e" className="w-8 h-8 rounded-full" alt="pic" />
                <div className="text-xs font-bold text-slate-800">Noura Ahmed</div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">Investigation</span>
              </div>
            </div>
            
             {/* Completed Card 4 */}
            <div className="bg-white border border-slate-200 rounded-xl p-2 w-64 shrink-0 hover:border-blue-300 transition-colors cursor-pointer relative opacity-60">
              <div className="flex items-center justify-between mb-2 pr-4">
                <div className="text-[10px] font-bold text-slate-500">08:00 AM</div>
                <div className="text-[10px] font-bold text-slate-500">MRN-00012349</div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704f" className="w-8 h-8 rounded-full" alt="pic" />
                <div className="text-xs font-bold text-slate-800">Youssef Ali</div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-slate-700 bg-slate-200 px-1.5 py-0.5 rounded">Completed</span>
              </div>
            </div>
         </div>
      </div>

    </div>
  );
}

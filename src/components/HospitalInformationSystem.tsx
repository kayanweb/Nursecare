import React, { useState, useEffect } from "react";
import {
  Users,
  Stethoscope,
  BedDouble,
  Scissors,
  Pill,
  Receipt,
  Microscope,
  Settings,
  TrendingUp,
  Activity,
  LayoutGrid,
  ShieldAlert,
  LogOut,
  FileText,
  Database,
  CreditCard,
  ChevronDown,
  ChevronRight,
  ActivitySquare,
  PlusSquare,
  Network,
  FlaskConical,
  CircleDollarSign,
  CheckSquare,
  Dna,
  FileArchive,
  ArrowRightLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import PatientRegistration from "./PatientRegistration";
import EMRDashboard from "./EMRDashboard";
import WardNurseDashboard from "./WardNurseDashboard";
import OperatingTheaterBoard from "./OperatingTheaterBoard";
import PharmacyInventory from "./PharmacyInventory";
import BillingInsurance from "./BillingInsurance";
import LISRISDashboard from "./LISRISDashboard";
import NursingDirectorDashboard from "./NursingDirectorDashboard";
import NursingSupervisorDashboard from "./NursingSupervisorDashboard";
import HeadNurseDashboard from "./HeadNurseDashboard";
import InfectionControlHub from "./InfectionControlHub";
import ICUDashboard from "./ICUDashboard";
import ERDashboard from "./ERDashboard";
import CPOEDashboard from "./CPOEDashboard";
import AppointmentsManager from "./AppointmentsManager";
import VisitManager from "./VisitManager";
import DrugMasterIndex from "./DrugMasterIndex";
import InsuranceMaster from "./InsuranceMaster";
import QueueRoutingSystem from "./QueueRoutingSystem";
import NursingFlowKardex from "./NursingFlowKardex";
import PathologyDashboard from "./PathologyDashboard";
import InventoryManager from "./InventoryManager";
import PurchasingPO from "./PurchasingPO";
import CashierPointOfSale from "./CashierPointOfSale";
import RCMClaims from "./RCMClaims";
import AnalyticsKPIDashboard from "./AnalyticsKPIDashboard";
import BranchesManager from "./BranchesManager";
import DepartmentsManager from "./DepartmentsManager";
import DoctorsStaffRegistry from "./DoctorsStaffRegistry";

interface Props {
  language: "en" | "ar";
  currentUser?: any;
  systemUsers?: any[];
  hospitalSettings?: any;
  onLogout?: () => void;
}

export default function HospitalInformationSystem({
  language,
  currentUser,
  systemUsers,
  hospitalSettings,
  onLogout,
}: Props) {
  const [activeModule, setActiveModule] = useState<string>(() => {
    return sessionStorage.getItem("hospital_his_activeModule") || "patients";
  });
  const [activeSubTab, setActiveSubTab] = useState<string>(() => {
    return sessionStorage.getItem("hospital_his_activeSubTab") || "adt";
  });

  useEffect(() => {
    sessionStorage.setItem("hospital_his_activeModule", activeModule);
  }, [activeModule]);

  useEffect(() => {
    sessionStorage.setItem("hospital_his_activeSubTab", activeSubTab);
  }, [activeSubTab]);

  const isAr = language === "ar";

  const systemModules = [
    {
      id: "master_data",
      labelAr: "البيانات الأساسية",
      labelEn: "Master Data",
      icon: Database,
      items: [
        { id: "branches", label: isAr ? "الفروع والمنشآت" : "Branches" },
        { id: "depts", label: isAr ? "الأقسام السريرية" : "Departments" },
        { id: "staff", label: isAr ? "الموظفون والأطباء" : "Doctors & Staff" },
        {
          id: "insurance_master",
          label: isAr ? "شركات التأمين" : "Insurance Rules",
        },
        {
          id: "drug_master",
          label: isAr ? "دليل الأدوية العالمي" : "Drug Master",
        },
      ],
    },
    {
      id: "patients",
      labelAr: "إدارة المرضى",
      labelEn: "Patients & Visits",
      icon: Users,
      items: [
        {
          id: "adt",
          label: isAr ? "الاستقبال والتسجيل (ADT)" : "Registration (ADT)",
        },
        { id: "appointments", label: isAr ? "المواعيد" : "Appointments" },
        { id: "queue", label: isAr ? "طابور الانتظار" : "Queue & Routing" },
        {
          id: "visits",
          label: isAr ? "إدارة الزيارات (OPD)" : "Visit Management",
        },
      ],
    },
    {
      id: "clinical",
      labelAr: "الإدارة السريرية (EMR)",
      labelEn: "Clinical (EMR)",
      icon: Stethoscope,
      items: [
        { id: "emr_core", label: isAr ? "الملف السريري المركزي" : "Core EMR" },
        {
          id: "cpoe",
          label: isAr ? "الطلبات الإلكترونية (CPOE)" : "CPOE / Orders",
        },
        {
          id: "ipd",
          label: isAr ? "الأقسام الداخلية (IPD)" : "Inpatient Wards",
        },
        { id: "icu", label: isAr ? "العناية المركزة (ICU)" : "Intensive Care" },
        { id: "er", label: isAr ? "الطوارئ (ER)" : "Emergency" },
        {
          id: "ot",
          label: isAr ? "العمليات الجراحية (OT)" : "Operating Theater",
        },
        {
          id: "nursing_flow",
          label: isAr ? "سير التمريض والكارديكس" : "Nursing Flow",
        },
        {
          id: "infection_control",
          label: isAr ? "مكافحة العدوى" : "Infection Control",
        },
      ],
    },
    {
      id: "diagnostic",
      labelAr: "الخدمات التشخيصية",
      labelEn: "Diagnostic Services",
      icon: Microscope,
      items: [
        {
          id: "lis_ris",
          label: isAr ? "المعمل والأشعة (LIS/RIS)" : "Lab & Radiology",
        },
        { id: "pathology", label: isAr ? "الباثولوجي والأنسجة" : "Pathology" },
      ],
    },
    {
      id: "pharmacy",
      labelAr: "الصيدلية والمخازن",
      labelEn: "Pharmacy & Materials",
      icon: Pill,
      items: [
        {
          id: "pharmacy",
          label: isAr ? "صرف الأدوية (Dispensing)" : "Dispensing",
        },
        {
          id: "inventory",
          label: isAr ? "المخزون والمستودعات" : "Inventory & Stock",
        },
        {
          id: "purchasing",
          label: isAr ? "المشتريات الطبية (PO)" : "Purchasing (PO)",
        },
      ],
    },
    {
      id: "finance",
      labelAr: "النظام المالي والفوترة",
      labelEn: "Financial Engine",
      icon: Receipt,
      items: [
        {
          id: "billing",
          label: isAr ? "الحسابات والمطالبات" : "Billing & Claims",
        },
        { id: "cashier", label: isAr ? "الصندوق والدفع" : "Cashier" },
        {
          id: "rcm",
          label: isAr ? "دورة الإيرادات (RCM)" : "Revenue Cycle (RCM)",
        },
      ],
    },
    {
      id: "dashboards",
      labelAr: "المؤشرات والتقارير",
      labelEn: "Dashboards & KPIs",
      icon: ActivitySquare,
      items: [
        {
          id: "cno",
          label: isAr ? "شاشة الإدارة العليا CNO" : "CNO Dashboard",
        },
        {
          id: "supervisor",
          label: isAr ? "إشراف أرضي وتوجيه" : "Floor Supervisor",
        },
        { id: "headnurse", label: isAr ? "إدارة القسم" : "Head Nurse Details" },
        {
          id: "kpi",
          label: isAr ? "التحليل المالي والطبي" : "Clinical/Financial KPI",
        },
      ],
    },
  ];

  const handleSubTabClick = (moduleId: string, subId: string) => {
    setActiveModule(moduleId);
    setActiveSubTab(subId);
  };

  const renderMockView = (
    title: string,
    structure: string[],
    description: string,
  ) => (
    <div className="p-8 h-full flex flex-col pt-12 items-center justify-center text-center animate-fade-in bg-slate-50/50">
      <div className="bg-blue-100/50 text-blue-600 h-24 w-24 rounded-3xl flex items-center justify-center mb-6 shadow-inner shadow-blue-200 border border-blue-200">
        <Network className="h-10 w-10" />
      </div>
      <h2 className="text-3xl font-black text-slate-800 mb-3">{title}</h2>
      <p className="text-slate-500 max-w-lg mx-auto mb-8 font-medium">
        {description}
      </p>

      <div
        className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg overflow-hidden max-w-3xl w-full text-left relative"
        dir="ltr"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0 opacity-50"></div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5 relative z-10">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-indigo-500" />
            <h3 className="font-bold text-slate-700 tracking-tight">
              Active Core Tables
            </h3>
          </div>
          <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-2 py-1 rounded">
            Linked to VisitID Engine
          </span>
        </div>
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap gap-2">
            {structure.map((tb) => (
              <span
                key={tb}
                className="bg-slate-50 text-slate-600 font-mono text-[11px] font-bold px-3 py-1.5 rounded-lg border border-slate-200 flex items-center gap-1.5 shadow-sm"
              >
                <ChevronRight className="h-3 w-3 text-indigo-400" /> {tb}
              </span>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 p-5 rounded-xl text-left">
            <h4 className="font-black text-blue-900 mb-2.5 flex items-center gap-2 text-sm">
              <ArrowRightLeft className="w-4 h-4 text-blue-600" /> Order
              Management Engine Routing
            </h4>
            <p className="text-sm font-medium text-blue-800/80 leading-relaxed">
              Records written here trigger signals through the standard HL7
              workflow:
            </p>
            <div className="mt-3 flex items-center flex-wrap gap-2 text-xs font-mono font-bold text-slate-700">
              <span className="bg-white border border-blue-100 px-2 py-1 rounded shadow-sm">
                Visit
              </span>
              <span className="text-blue-300">&rarr;</span>
              <span className="bg-white border border-blue-100 px-2 py-1 rounded shadow-sm">
                Order
              </span>
              <span className="text-blue-300">&rarr;</span>
              <span className="bg-white border border-blue-100 px-2 py-1 rounded shadow-sm">
                Service
              </span>
              <span className="text-blue-300">&rarr;</span>
              <span className="bg-white border border-blue-100 px-2 py-1 rounded shadow-sm">
                Charge
              </span>
              <span className="text-blue-300">&rarr;</span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded shadow-sm">
                Claim &amp; Invoice
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="h-full flex flex-col space-y-4 p-2 sm:p-4 bg-slate-50 min-h-screen"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Header Block */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-2xl shadow-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white relative overflow-hidden shrink-0 border border-blue-900/50">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-emerald-400 to-indigo-500"></div>

        <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
          <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 shadow-inner flex shrink-0 items-center justify-center">
            <Network className="w-8 h-8 text-blue-300" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 drop-shadow-sm">
              {isAr
                ? "نظام الإدارة الصحية المتكامل (HIS-X)"
                : "Enterprise Hospital Information System (HIS-X)"}
            </h1>
            <div className="flex items-center gap-3 mt-2 opacity-90 flex-wrap">
              <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold border border-emerald-500/30 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                {isAr ? "محرك الطلبات يعمل" : "CPOE Engine Active"}
              </span>
              <span className="text-[10px] sm:text-xs text-indigo-200 flex items-center gap-1 font-mono">
                <Database className="w-3 h-3" /> 158 Core Tables Linked
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex border-t md:border-t-0 md:border-x border-white/10 pt-4 md:pt-0 md:px-6 w-full md:w-auto justify-between items-center gap-4">
          {currentUser ? (
            <div
              className={`flex flex-col ${isAr ? "text-right" : "text-left"}`}
            >
              <span className="font-bold text-sm text-white drop-shadow-md">
                {isAr ? currentUser.nameAr : currentUser.nameEn}
              </span>
              <span className="text-[10px] text-indigo-300 font-mono font-bold tracking-wider mt-0.5">
                {currentUser.staffId} •{" "}
                {(currentUser.role || "STAFF").toUpperCase()}
              </span>
            </div>
          ) : null}
          {onLogout && (
            <button
              onClick={onLogout}
              className="p-2 sm:px-4 sm:py-2.5 bg-rose-600/90 hover:bg-rose-500 text-white rounded-xl transition-all flex items-center justify-center gap-2 font-bold text-xs shadow-lg shadow-rose-900/20 border border-rose-400/30"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isAr ? "إغلاق الواجهة" : "Exit System"}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Main Interface: Sidebar + Content */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 h-[calc(100vh-140px)] min-h-[600px] relative">
        {/* Deep Navigation Sidebar */}
        <div className="w-full md:w-72 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col overflow-hidden shrink-0">
          <div className="p-4 bg-slate-50 border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <LayoutGrid className="w-4 h-4" />{" "}
            {isAr ? "مركز التحكم والوحدات" : "Control Center & Modules"}
          </div>
          <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
            {systemModules.map((module) => {
              const MIcon = module.icon;
              const isModuleOpen = activeModule === module.id;

              return (
                <div key={module.id} className="mb-2">
                  <button
                    onClick={() =>
                      setActiveModule(isModuleOpen ? "" : module.id)
                    }
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-bold transition-all border ${isModuleOpen ? "bg-indigo-50 border-indigo-100 text-indigo-700 shadow-sm" : "bg-transparent border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-200"}`}
                  >
                    <div className="flex items-center gap-3">
                      <MIcon
                        className={`w-5 h-5 ${isModuleOpen ? "text-indigo-600" : "text-slate-400"}`}
                      />
                      {isAr ? module.labelAr : module.labelEn}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isModuleOpen ? "rotate-180 text-indigo-500" : "text-slate-300"}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isModuleOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`mt-1.5 space-y-1 ${isAr ? "pr-9" : "pl-9"}`}
                        >
                          {module.items.map((item) => {
                            const isActiveItem = activeSubTab === item.id;
                            return (
                              <button
                                key={item.id}
                                onClick={() =>
                                  handleSubTabClick(module.id, item.id)
                                }
                                className={`w-full text-${isAr ? "right" : "left"} p-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 border ${
                                  isActiveItem
                                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-600/20"
                                    : "bg-transparent border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                }`}
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full ${isActiveItem ? "bg-white" : "bg-slate-300"}`}
                                ></div>
                                {item.label}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
          {/* Health / Engine Status */}
          <div className="p-4 bg-slate-900 border-t-4 border-indigo-500 text-white text-xs font-mono select-none">
            <div className="flex justify-between items-center mb-2">
              <span className="text-emerald-400 flex items-center gap-1.5 font-bold">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>{" "}
                SYSTEM LINKED
              </span>
              <span className="text-slate-500 bg-slate-800 px-1.5 rounded">
                v9.2.1
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[10px]">
              Cerner/Epic-Style Arch
              <br />
              ICD-10 / CPT ACTIVE
            </p>
          </div>
        </div>

        {/* Dynamic Working Area */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="h-full overflow-y-auto custom-scrollbar"
            >
              {/* ---------- EXISTING REAL IMPLEMENTATIONS ---------- */}
              {activeSubTab === "adt" && (
                <PatientRegistration language={language} />
              )}
              {activeSubTab === "emr_core" && (
                <EMRDashboard language={language} />
              )}
              {activeSubTab === "ipd" && (
                <WardNurseDashboard language={language} />
              )}
              {activeSubTab === "ot" && (
                <OperatingTheaterBoard language={language} />
              )}
              {activeSubTab === "pharmacy" && (
                <PharmacyInventory language={language} />
              )}
              {activeSubTab === "billing" && (
                <BillingInsurance language={language} />
              )}
              {activeSubTab === "lis_ris" && (
                <LISRISDashboard language={language} />
              )}
              {activeSubTab === "infection_control" && (
                <InfectionControlHub
                  language={language}
                  currentUser={currentUser}
                  systemUsers={systemUsers || []}
                  hospitalSettings={hospitalSettings || {}}
                />
              )}

              {activeSubTab === "cno" && (
                <NursingDirectorDashboard language={language} />
              )}
              {activeSubTab === "supervisor" && (
                <NursingSupervisorDashboard language={language} />
              )}
              {activeSubTab === "headnurse" && (
                <HeadNurseDashboard language={language} />
              )}

              {/* ---------- CORE SYSTEM MODULES ---------- */}

              {/* Master Data */}
              {activeSubTab === "branches" && (
                <BranchesManager language={language} />
              )}
              {activeSubTab === "depts" && (
                <DepartmentsManager language={language} />
              )}
              {activeSubTab === "staff" && (
                <DoctorsStaffRegistry language={language} />
              )}
              {activeSubTab === "insurance_master" && (
                <InsuranceMaster language={language} />
              )}
              {activeSubTab === "drug_master" && (
                <DrugMasterIndex language={language} />
              )}

              {/* Patients */}
              {activeSubTab === "appointments" && (
                <AppointmentsManager language={language} />
              )}
              {activeSubTab === "queue" && (
                <QueueRoutingSystem language={language} />
              )}
              {activeSubTab === "visits" && (
                <VisitManager language={language} />
              )}

              {/* Clinical */}
              {activeSubTab === "cpoe" && <CPOEDashboard language={language} />}
              {activeSubTab === "icu" && <ICUDashboard language={language} />}
              {activeSubTab === "er" && <ERDashboard language={language} />}
              {activeSubTab === "nursing_flow" && (
                <NursingFlowKardex language={language} />
              )}

              {/* Diagnostic */}
              {activeSubTab === "pathology" && (
                <PathologyDashboard language={language} />
              )}

              {/* Pharmacy */}
              {activeSubTab === "inventory" && (
                <InventoryManager language={language} />
              )}
              {activeSubTab === "purchasing" && (
                <PurchasingPO language={language} />
              )}

              {/* Finance */}
              {activeSubTab === "cashier" && (
                <CashierPointOfSale language={language} />
              )}
              {activeSubTab === "rcm" && <RCMClaims language={language} />}

              {/* Dashboards */}
              {activeSubTab === "kpi" && (
                <AnalyticsKPIDashboard language={language} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

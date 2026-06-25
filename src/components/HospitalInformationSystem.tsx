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
  Menu,
  MessageSquare,
  Star,
  Search,
  UserCircle,
  Globe,
  Bell,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";

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
import HISOverviewDashboard from "./HISOverviewDashboard";

import RadiologyDashboard from "./RadiologyDashboard";
import AuditTrailDashboard from "./AuditTrailDashboard";
import MultiTenantDashboard from "./MultiTenantDashboard";
import NutritionDashboard from "./NutritionDashboard";
import GateReceptionDashboard from "./GateReceptionDashboard";
import NICUDashboard from "./NICUDashboard";
import PACUDashboard from "./PACUDashboard";

import RehabDashboard from "./RehabDashboard";
import PsychiatryDashboard from "./PsychiatryDashboard";
import DialysisDashboard from "./DialysisDashboard";
import OncologyDashboard from "./OncologyDashboard";
import ObstetricsDashboard from "./ObstetricsDashboard";
import MortuaryDashboard from "./MortuaryDashboard";
import HRDashboard from "./HRDashboard";
import SystemAdminDashboard from "./SystemAdminDashboard";
import ClinicsListDashboard from "./ClinicsListDashboard";
import DoctorConsultationDesk from "./DoctorConsultationDesk";
import HelpdeskDashboard from "./HelpdeskDashboard";
import ReportsBIDashboard from "./ReportsBIDashboard";
import MasterDataDashboard from "./MasterDataDashboard";
import ClinicalFormsLibrary from "./ClinicalFormsLibrary";
import PatientJourneySimulator from "./PatientJourneySimulator";

import PatientPortalDashboard from "./PatientPortalDashboard";

interface HospitalInformationSystemProps {
  language: "en" | "ar";
  currentUser?: any;
  systemUsers?: any[];
  hospitalSettings?: any;
  departments?: string[];
  onLogout?: () => void;
  onLanguageToggle?: () => void;
  onOpenNotifications?: () => void;
  onOpenMessages?: () => void;
  notifications?: any[];
  setNotifications?: (n: any[]) => void;
  handleNotificationClick?: (n: any) => void;
}

export default function HospitalInformationSystem({
  language,
  currentUser,
  systemUsers,
  hospitalSettings,
  departments = [],
  onLogout,
  onLanguageToggle,
  onOpenNotifications,
  onOpenMessages,
  notifications = [],
  setNotifications,
  handleNotificationClick,
}: HospitalInformationSystemProps) {
  const [isHISNotificationsOpen, setIsHISNotificationsOpen] = useState(false);
  const [isHISMessagesOpen, setIsHISMessagesOpen] = useState(false);

  const [activeModule, setActiveModule] = useState<string>(() => {
    return sessionStorage.getItem("hospital_his_activeModule") || "overview";
  });
  const [activeSubTab, setActiveSubTab] = useState<string>(() => {
    return sessionStorage.getItem("hospital_his_activeSubTab") || "opd";
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    sessionStorage.setItem("hospital_his_activeModule", activeModule);
  }, [activeModule]);

  useEffect(() => {
    sessionStorage.setItem("hospital_his_activeSubTab", activeSubTab);
  }, [activeSubTab]);

  const isAr = language === "ar";

  const systemModules = [
    {
      id: "main_dashboard",
      labelAr: "لوحة التحكم",
      labelEn: "Dashboard",
      icon: LayoutGrid,
    },
    {
      id: "adt",
      labelAr: "التسجيل",
      labelEn: "Registration",
      icon: UserCircle,
      hasChildren: true,
      subItems: [
        { id: "adt", labelAr: "تسجيل المرضى", labelEn: "Patient Registration" },
        {
          id: "patient_portal",
          labelAr: "بوابة المريض",
          labelEn: "Patient Portal",
        },
      ],
    },
    {
      id: "appointments",
      labelAr: "المواعيد",
      labelEn: "Appointments",
      icon: CheckSquare,
      hasChildren: true,
      subItems: [
        {
          id: "appointments",
          labelAr: "مواعيد العيادات",
          labelEn: "Clinic Appointments",
        },
      ],
    },
    {
      id: "opd",
      labelAr: "العيادات الخارجية",
      labelEn: "OPD",
      icon: Stethoscope,
      hasChildren: true,
      subItems: [
        {
          id: "clinics_list",
          labelAr: "قائمة العيادات",
          labelEn: "Clinics List",
        },
        { id: "opd", labelAr: "مكتب الطبيب", labelEn: "Doctor Desk" },
      ],
    },
    {
      id: "ipd",
      labelAr: "الأقسام الداخلية",
      labelEn: "Admission (IPD)",
      icon: BedDouble,
      hasChildren: true,
      subItems: [
        { id: "ipd", labelAr: "إدارة الأجنحة", labelEn: "Ward Management" },
        {
          id: "nursing_flow",
          labelAr: "متابعة التمريض",
          labelEn: "Nursing Flow",
        },
      ],
    },
    {
      id: "er",
      labelAr: "الطوارئ",
      labelEn: "Emergency (ER)",
      icon: ActivitySquare,
      hasChildren: true,
      subItems: [
        { id: "er", labelAr: "لوحة الطوارئ", labelEn: "ER Dashboard" },
      ],
    },
    {
      id: "nursing",
      labelAr: "التمريض",
      labelEn: "Nursing",
      icon: Activity,
      hasChildren: true,
      subItems: [
        { id: "cno", labelAr: "مدير التمريض", labelEn: "Nursing Director" },
        {
          id: "supervisor",
          labelAr: "مشرف التمريض",
          labelEn: "Nursing Supervisor",
        },
        { id: "icu", labelAr: "العناية المركزة", labelEn: "ICU" },
        { id: "nicu", labelAr: "الحضانات", labelEn: "NICU" },
        { id: "pacu", labelAr: "الإفاقة", labelEn: "PACU" },
      ],
    },
    {
      id: "lis_ris",
      labelAr: "المختبر",
      labelEn: "Laboratory",
      icon: Microscope,
      hasChildren: true,
      subItems: [
        { id: "lis_ris", labelAr: "لوحة المختبر", labelEn: "Lab Dashboard" },
        { id: "pathology", labelAr: "علم الأمراض", labelEn: "Pathology" },
      ],
    },
    {
      id: "radiology",
      labelAr: "الأشعة",
      labelEn: "Radiology",
      icon: Network,
      hasChildren: true,
      subItems: [
        {
          id: "radiology",
          labelAr: "لوحة الأشعة",
          labelEn: "Radiology Dashboard",
        },
      ],
    },
    {
      id: "pharmacy",
      labelAr: "الصيدلية",
      labelEn: "Pharmacy",
      icon: Pill,
      hasChildren: true,
      subItems: [
        { id: "pharmacy", labelAr: "صرف الأدوية", labelEn: "Dispensing" },
        { id: "inventory", labelAr: "المخزون", labelEn: "Inventory" },
      ],
    },
    {
      id: "ot",
      labelAr: "العمليات",
      labelEn: "Operation Theater",
      icon: Scissors,
      hasChildren: true,
      subItems: [
        { id: "ot", labelAr: "لوحة العمليات", labelEn: "Operation Board" },
      ],
    },
    {
      id: "billing",
      labelAr: "الفوترة",
      labelEn: "Billing",
      icon: Receipt,
      hasChildren: true,
      subItems: [
        {
          id: "billing",
          labelAr: "إدارة الفواتير",
          labelEn: "Billing Management",
        },
        { id: "rcm", labelAr: "دورة الإيرادات", labelEn: "RCM Claims" },
      ],
    },
    {
      id: "patient_portal",
      labelAr: "بوابة المريض",
      labelEn: "Patient Portal",
      icon: Globe,
      hasChildren: false,
    },
    {
      id: "cashier",
      labelAr: "الصندوق",
      labelEn: "Cashier",
      icon: CircleDollarSign,
      hasChildren: true,
      subItems: [
        { id: "cashier", labelAr: "لوحة الصندوق", labelEn: "Cashier POS" },
      ],
    },
    {
      id: "insurance_master",
      labelAr: "التأمين",
      labelEn: "Insurance",
      icon: ShieldAlert,
      hasChildren: true,
      subItems: [
        {
          id: "insurance_master",
          labelAr: "إدارة التأمين",
          labelEn: "Insurance Management",
        },
      ],
    },
    {
      id: "inventory",
      labelAr: "المخزون",
      labelEn: "Inventory",
      icon: Database,
      hasChildren: true,
      subItems: [
        {
          id: "inventory",
          labelAr: "إدارة المخزون",
          labelEn: "Inventory Management",
        },
        { id: "purchasing", labelAr: "المشتريات", labelEn: "Purchasing PO" },
      ],
    },
    {
      id: "reports",
      labelAr: "التقارير",
      labelEn: "Reports",
      icon: TrendingUp,
      hasChildren: true,
      subItems: [
        { id: "reports", labelAr: "التقارير الإحصائية", labelEn: "BI Reports" },
        { id: "kpi", labelAr: "مؤشرات الأداء", labelEn: "KPIs" },
        { id: "audit_trail", labelAr: "سجل التدقيق", labelEn: "Audit Trail" },
      ],
    },
    {
      id: "hr",
      labelAr: "الإدارة",
      labelEn: "Administration",
      icon: Users,
      hasChildren: true,
      subItems: [
        { id: "hr", labelAr: "الموارد البشرية", labelEn: "HR Dashboard" },
        { id: "helpdesk", labelAr: "الدعم الفني", labelEn: "Helpdesk" },
      ],
    },
    {
      id: "sysadmin",
      labelAr: "إعدادات النظام",
      labelEn: "System Setup",
      icon: Settings,
      hasChildren: true,
      subItems: [
        { id: "sysadmin", labelAr: "إدارة النظام", labelEn: "System Admin" },
        {
          id: "multi_tenant",
          labelAr: "الشركات والفروع",
          labelEn: "Multi-Tenant",
        },
        {
          id: "master_data",
          labelAr: "البيانات الأساسية",
          labelEn: "Master Data",
        },
        {
          id: "clinical_forms",
          labelAr: "النماذج الطبية",
          labelEn: "Clinical Forms",
        },
        {
          id: "infection_control",
          labelAr: "مكافحة العدوى",
          labelEn: "Infection Control",
        },
      ],
    },
  ];

  const [expandedModules, setExpandedModules] = useState<string[]>([]);

  const toggleExpand = (moduleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setExpandedModules((prev) =>
      prev.includes(moduleId)
        ? prev.filter((id) => id !== moduleId)
        : [...prev, moduleId],
    );
  };

  const handleSubTabClick = (moduleId: string, subId?: string) => {
    if (subId) {
      setActiveSubTab(subId);
    } else {
      setActiveSubTab(moduleId);
    }
    if (
      window.innerWidth < 768 &&
      !subId &&
      !systemModules.find((m) => m.id === moduleId)?.subItems
    ) {
      setIsSidebarOpen(false);
    } else if (window.innerWidth < 768 && subId) {
      setIsSidebarOpen(false);
    }
  };

  // Generic Module Configs mapping
  const genericModules: Record<string, any> = {
    gate_reception: {
      title: isAr ? "بوابة الدخول والاستقبال" : "Gate & Main Reception",
      description: isAr
        ? "إدارة دخول الزوار وتسجيل المرضى المبدئي."
        : "Manage visitor access and initial patient check-in.",
      sections: [
        {
          title: isAr ? "بوابة الدخول (Gate Management)" : "Gate Management",
          actions: [
            {
              label: isAr
                ? "تسجيل دخول الزائر (Visitor Check-in)"
                : "Visitor Check-in",
              variant: "primary",
            },
            {
              label: isAr
                ? "تسجيل دخول المريض (Patient Check-in)"
                : "Patient Check-in",
              variant: "primary",
            },
            {
              label: isAr ? "طباعة تصريح دخول" : "Print Access Pass",
              variant: "outline",
            },
            {
              label: isAr ? "كشف الحرارة (Thermal Scanner)" : "Thermal Scanner",
              variant: "warning",
            },
            {
              label: isAr ? "تحويل إلى الاستقبال" : "Route to Reception",
              variant: "secondary",
            },
          ],
        },
        {
          title: isAr ? "الاستقبال الرئيسي (Main Reception)" : "Main Reception",
          actions: [
            {
              label: isAr ? "تسجيل مريض جديد" : "New Patient Registration",
              variant: "success",
              action: () => handleSubTabClick("reception", "adt"),
            },
            {
              label: isAr ? "تحديث بيانات مريض" : "Update Patient Info",
              variant: "secondary",
            },
            {
              label: isAr ? "حجز موعد" : "Book Appointment",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "appointments"),
            },
            {
              label: isAr ? "جدول العيادات" : "Clinics Schedule",
              variant: "outline",
            },
            {
              label: isAr ? "خدمة العملاء (Call Center)" : "Call Center",
              variant: "secondary",
            },
            {
              label: isAr ? "الشكاوى والاقتراحات" : "Complaints & Suggestions",
              variant: "outline",
            },
            {
              label: isAr ? "توجيه المريض" : "Patient Routing Guide",
              variant: "outline",
            },
          ],
        },
      ],
    },
    clinics_list: {
      title: isAr ? "قائمة العيادات (Clinic List)" : "Clinic List",
      description: isAr
        ? "الوصول السريع للعيادات التخصصية."
        : "Quick access to specialty clinics.",
      sections: [
        {
          title: isAr ? "العيادات الخارجية" : "Outpatient Clinics",
          actions: [
            {
              label: isAr ? "جميع العيادات" : "All Clinics",
              variant: "outline",
            },
            {
              label: isAr ? "عيادة القلب" : "Cardiology",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة الباطنة" : "Internal Medicine",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة العظام" : "Orthopedics",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة الأعصاب" : "Neurology",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة النساء والولادة" : "Obstetrics & Gynecology",
              variant: "primary",
              action: () => handleSubTabClick("special_services", "obs_gyn"),
            },
            {
              label: isAr ? "عيادة الأطفال" : "Pediatrics",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة الجلدية" : "Dermatology",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة الأنف والأذن والحنجرة" : "ENT",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة العيون" : "Ophthalmology",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة المسالك البولية" : "Urology",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
            {
              label: isAr ? "عيادة النفسية" : "Psychiatry",
              variant: "primary",
              action: () => handleSubTabClick("special_services", "psychiatry"),
            },
            {
              label: isAr ? "عيادة الأورام" : "Oncology",
              variant: "primary",
              action: () => handleSubTabClick("special_services", "oncology"),
            },
            {
              label: isAr ? "عيادة الروماتيزم" : "Rheumatology",
              variant: "primary",
              action: () => handleSubTabClick("outpatient", "emr_core"),
            },
          ],
        },
      ],
    },
    nicu: {
      title: isAr ? "الحضانات (NICU Screen)" : "Neonatal ICU",
      description: isAr
        ? "إدارة العناية المركزة لحديثي الولادة."
        : "Neonatal Intensive Care Unit Management.",
      sections: [
        {
          title: isAr ? "إجراءات الحضانات" : "NICU Actions",
          actions: [
            {
              label: isAr ? "تسجيل مولود جديد" : "Newborn Registration",
              variant: "success",
            },
            {
              label: isAr ? "ربط بالأم" : "Link to Mother",
              variant: "primary",
            },
            {
              label: isAr ? "مراقبة الحاضنة" : "Incubator Monitoring",
              variant: "warning",
            },
            {
              label: isAr ? "تغذية المولود" : "Newborn Feeding",
              variant: "secondary",
            },
            {
              label: isAr ? "وزن المولود" : "Weight Logging",
              variant: "outline",
            },
            {
              label: isAr ? "فحوصات المولود" : "Newborn Tests (PKU)",
              variant: "primary",
            },
            { label: isAr ? "تطعيمات" : "Vaccinations", variant: "success" },
          ],
        },
      ],
    },
    pacu: {
      title: isAr
        ? "غرفة الإفاقة (Recovery Room - PACU)"
        : "Recovery Room (PACU)",
      description: isAr
        ? "إدارة المرضى ما بعد العمليات الجراحية."
        : "Post-Anesthesia Care Unit management.",
      sections: [
        {
          title: isAr ? "إجراءات الإفاقة" : "PACU Actions",
          actions: [
            {
              label: isAr ? "استقبال المريض" : "Receive Patient",
              variant: "success",
            },
            {
              label: isAr ? "مراقبة العلامات" : "Vital Signs Monitoring",
              variant: "warning",
            },
            {
              label: isAr ? "تقييم الألم" : "Pain Assessment",
              variant: "secondary",
            },
            {
              label: isAr ? "تسجيل السوائل" : "Fluid Logging",
              variant: "outline",
            },
            {
              label: isAr ? "حالة الوعي" : "Consciousness State",
              variant: "primary",
            },
            {
              label: isAr ? "تقرير الإفاقة" : "PACU Report",
              variant: "outline",
            },
            {
              label: isAr ? "نقل لقسم تنويم" : "Transfer to Ward",
              variant: "primary",
            },
            {
              label: isAr ? "نقل لـ ICU" : "Transfer to ICU",
              variant: "danger",
            },
          ],
        },
      ],
    },
    radiology: {
      title: isAr ? "الأشعة (Radiology)" : "Radiology",
      description: isAr
        ? "إدارة طلبات وتقارير الأشعة."
        : "Radiology orders and reporting.",
      sections: [
        {
          title: isAr ? "طلبات الأشعة (Radiology Orders)" : "Radiology Orders",
          actions: [
            { label: isAr ? "طلبات جديدة" : "New Orders", variant: "primary" },
            {
              label: isAr ? "تصنيف الفحوصات" : "Categorize Modalities",
              variant: "outline",
            },
            { label: isAr ? "قبول الطلب" : "Accept Order", variant: "success" },
            {
              label: isAr ? "جدولة الموعد" : "Schedule Exam",
              variant: "secondary",
            },
            { label: isAr ? "إلغاء الطلب" : "Cancel Order", variant: "danger" },
            {
              label: isAr ? "إجراء الفحص" : "Perform Exam",
              variant: "primary",
            },
            {
              label: isAr ? "رفع الصور (PACS)" : "Upload Images",
              variant: "warning",
            },
            {
              label: isAr ? "إدخال التقرير" : "Enter Report",
              variant: "outline",
            },
          ],
        },
        {
          title: isAr
            ? "أخصائي الأشعة (Radiologist Screen)"
            : "Radiologist Screen",
          actions: [
            { label: isAr ? "قراءة الصور" : "Read Images", variant: "primary" },
            {
              label: isAr ? "كتابة التقرير" : "Write Report",
              variant: "secondary",
            },
            {
              label: isAr ? "تعديل التقرير" : "Edit Report",
              variant: "outline",
            },
            {
              label: isAr ? "اعتماد التقرير" : "Sign-off Report",
              variant: "success",
            },
            {
              label: isAr ? "مقارنة بصور سابقة" : "Compare Previous",
              variant: "outline",
            },
            {
              label: isAr ? "إرسال التقرير للطبيب" : "Send Report to Physician",
              variant: "primary",
            },
          ],
        },
      ],
    },
    nutrition: {
      title: isAr ? "قسم التغذية (Nutrition)" : "Nutrition",
      description: isAr
        ? "إدارة طلبات التغذية العلاجية."
        : "Clinical nutrition and diet management.",
      sections: [
        {
          title: isAr ? "طلبات التغذية (Diet Orders)" : "Diet Orders",
          actions: [
            {
              label: isAr ? "طلبات جديدة" : "New Diet Orders",
              variant: "primary",
            },
            {
              label: isAr
                ? "نظام غذائي (عادي، سكري...)"
                : "Diet Types Selection",
              variant: "outline",
            },
            {
              label: isAr ? "تجهيز الوجبة" : "Prepare Meal",
              variant: "warning",
            },
            {
              label: isAr ? "توزيع الوجبة" : "Distribute Meal",
              variant: "success",
            },
            {
              label: isAr
                ? "تغذية خاصة (أنبوبة، وريدي)"
                : "Special Feeding (Enteral/TPN)",
              variant: "danger",
            },
            {
              label: isAr ? "تقرير التغذية" : "Nutrition Report",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    pt: {
      title: isAr ? "العلاج الطبيعي (Physical Therapy)" : "Physical Therapy",
      description: isAr
        ? "جلسات وخطط العلاج الطبيعي."
        : "Physical therapy sessions and planning.",
      sections: [
        {
          title: isAr ? "جلسات العلاج الطبيعي" : "PT Sessions",
          actions: [
            { label: isAr ? "جلسة جديدة" : "New Session", variant: "success" },
            {
              label: isAr ? "تحديد موعد" : "Schedule Session",
              variant: "primary",
            },
            {
              label: isAr ? "تحديد أخصائي" : "Assign Therapist",
              variant: "secondary",
            },
            { label: isAr ? "نوع العلاج" : "Therapy Type", variant: "outline" },
            {
              label: isAr ? "تقييم أولي" : "Initial Assessment",
              variant: "warning",
            },
            {
              label: isAr ? "تقرير الجلسة" : "Session Report",
              variant: "outline",
            },
            {
              label: isAr ? "تطور الحالة" : "Progress Note",
              variant: "primary",
            },
          ],
        },
      ],
    },
    rehab: {
      title: isAr
        ? "التأهيل والعلاج الوظيفي (Rehabilitation)"
        : "Rehabilitation",
      description: isAr
        ? "خطط التأهيل وإدارة الأجهزة المساعدة."
        : "Rehab planning and assistive devices.",
      sections: [
        {
          title: isAr ? "واجهة التأهيل" : "Rehab Screen",
          actions: [
            {
              label: isAr ? "تقييم وظيفي" : "Functional Assessment",
              variant: "primary",
            },
            { label: isAr ? "خطة التأهيل" : "Rehab Plan", variant: "success" },
            {
              label: isAr ? "جلسة تأهيل" : "Rehab Session",
              variant: "secondary",
            },
            {
              label: isAr ? "تقرير التقدم" : "Progress Report",
              variant: "outline",
            },
            {
              label: isAr
                ? "تجهيز الأجهزة (كرسي/مشاية)"
                : "Assistive Devices Request",
              variant: "warning",
            },
          ],
        },
      ],
    },
    psychiatry: {
      title: isAr ? "العلاج النفسي (Psychiatry)" : "Psychiatry",
      description: isAr
        ? "التقييمات والجلسات النفسية."
        : "Psychiatric assessments and sessions.",
      sections: [
        {
          title: isAr ? "واجهة العلاج النفسي" : "Psychiatry Screen",
          actions: [
            {
              label: isAr ? "تقييم نفسي أولي" : "Initial Psych Assessment",
              variant: "primary",
            },
            {
              label: isAr ? "جلسة علاجية" : "Therapy Session",
              variant: "success",
            },
            {
              label: isAr ? "أدوية نفسية" : "Psychiatric Meds",
              variant: "danger",
            },
            {
              label: isAr ? "متابعة الحالة" : "Case Follow-up",
              variant: "secondary",
            },
            {
              label: isAr ? "تقرير الحالة" : "Case Report",
              variant: "outline",
            },
          ],
        },
      ],
    },
    dialysis: {
      title: isAr ? "الغسيل الكلوي (Dialysis)" : "Dialysis",
      description: isAr
        ? "إدارة جلسات الديلزة الدموية والصفاقية."
        : "Hemodialysis and peritoneal dialysis management.",
      sections: [
        {
          title: isAr ? "جلسات الغسيل الكلوي" : "Dialysis Sessions",
          actions: [
            { label: isAr ? "جلسة جديدة" : "New Session", variant: "success" },
            {
              label: isAr ? "تحديد موعد" : "Schedule Session",
              variant: "primary",
            },
            {
              label: isAr ? "وزن المريض (قبل وبعد)" : "Pre/Post Weight",
              variant: "warning",
            },
            {
              label: isAr ? "نوع الغسيل (دموي/صفاقي)" : "Dialysis Type",
              variant: "outline",
            },
            {
              label: isAr ? "مدة الجلسة" : "Session Duration",
              variant: "secondary",
            },
            {
              label: isAr ? "المضاعفات" : "Complications Log",
              variant: "danger",
            },
            {
              label: isAr ? "تقرير الجلسة" : "Session Report",
              variant: "outline",
            },
          ],
        },
      ],
    },
    oncology: {
      title: isAr ? "العلاج الكيماوي والإشعاعي (Oncology)" : "Oncology",
      description: isAr
        ? "خطط العلاج للأورام."
        : "Chemotherapy and Radiotherapy plans.",
      sections: [
        {
          title: isAr ? "العلاج الكيماوي" : "Chemotherapy Screen",
          actions: [
            { label: isAr ? "خطة علاجية" : "Chemo Plan", variant: "primary" },
            { label: isAr ? "جرعة جديدة" : "New Dose", variant: "success" },
            {
              label: isAr ? "تحديد الدواء" : "Select Drug",
              variant: "outline",
            },
            {
              label: isAr ? "تحديد الجرعة (حسب الوزن)" : "Calculate Dose",
              variant: "warning",
            },
            {
              label: isAr ? "مراقبة الآثار" : "Monitor Side Effects",
              variant: "danger",
            },
            {
              label: isAr ? "تقرير الجلسة" : "Session Report",
              variant: "secondary",
            },
          ],
        },
        {
          title: isAr ? "العلاج الإشعاعي" : "Radiotherapy Screen",
          actions: [
            { label: isAr ? "خطة إشعاعية" : "Radio Plan", variant: "primary" },
            { label: isAr ? "جلسة جديدة" : "New Session", variant: "success" },
            {
              label: isAr ? "تحديد المنطقة" : "Target Area",
              variant: "outline",
            },
            { label: isAr ? "الجرعة" : "Radiation Dose", variant: "warning" },
            {
              label: isAr ? "مراقبة الآثار" : "Monitor Side Effects",
              variant: "danger",
            },
            {
              label: isAr ? "تقرير الجلسة" : "Session Report",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    obs_gyn: {
      title: isAr ? "قسم الولادة (Obstetrics)" : "Obstetrics",
      description: isAr
        ? "متابعة الحمل وإجراءات الولادة."
        : "Prenatal care and delivery management.",
      sections: [
        {
          title: isAr ? "متابعة الحمل" : "Prenatal Screen",
          actions: [
            {
              label: isAr ? "تسجيل حمل جديد" : "New Pregnancy",
              variant: "success",
            },
            {
              label: isAr ? "مواعيد المتابعة" : "Follow-up Schedule",
              variant: "primary",
            },
            {
              label: isAr ? "الفحوصات الدورية" : "Routine Tests",
              variant: "outline",
            },
            {
              label: isAr ? "السونار" : "Ultrasound Order",
              variant: "secondary",
            },
            {
              label: isAr ? "تقييم الحمل" : "Pregnancy Assessment",
              variant: "warning",
            },
            {
              label: isAr ? "تحديد موعد الولادة" : "Set EDD",
              variant: "primary",
            },
          ],
        },
        {
          title: isAr ? "واجهة الولادة" : "Delivery Screen",
          actions: [
            {
              label: isAr ? "تسجيل ولادة" : "Register Delivery",
              variant: "success",
            },
            {
              label: isAr ? "نوع الولادة (طبيعية/قيصرية)" : "Delivery Type",
              variant: "outline",
            },
            {
              label: isAr ? "توقيت الولادة" : "Delivery Timing",
              variant: "secondary",
            },
            {
              label: isAr ? "مضاعفات" : "Complications Log",
              variant: "danger",
            },
            {
              label: isAr ? "حالة الأم" : "Maternal Status",
              variant: "warning",
            },
            {
              label: isAr ? "حالة المولود (أبغار)" : "Neonate Status (Apgar)",
              variant: "primary",
            },
            {
              label: isAr ? "تسجيل مولود" : "Register Newborn",
              variant: "success",
            },
            {
              label: isAr ? "ربط المولود بالأم" : "Link Newborn to Mother",
              variant: "outline",
            },
          ],
        },
      ],
    },
    mortuary: {
      title: isAr ? "قسم الموتى (Mortuary)" : "Mortuary",
      description: isAr
        ? "إدارة الوفيات وتصاريح الدفن."
        : "Death registration and burial permits.",
      sections: [
        {
          title: isAr ? "واجهة الوفيات" : "Death Screen",
          actions: [
            {
              label: isAr ? "تسجيل وفاة" : "Register Death",
              variant: "danger",
            },
            {
              label: isAr ? "تقرير الوفاة" : "Death Report",
              variant: "primary",
            },
            {
              label: isAr ? "شهادة الوفاة" : "Print Death Certificate",
              variant: "outline",
            },
            {
              label: isAr ? "تسليم الجثة" : "Handover Body",
              variant: "warning",
            },
            {
              label: isAr ? "تصريح الدفن" : "Burial Permit",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    hr: {
      title: isAr ? "الموارد البشرية (HR)" : "Human Resources",
      description: isAr
        ? "إدارة شؤون الموظفين والرواتب."
        : "Employee management and payroll.",
      sections: [
        {
          title: isAr ? "إدارة الموظفين" : "Employee Management",
          actions: [
            { label: isAr ? "إضافة موظف" : "Add Employee", variant: "success" },
            {
              label: isAr ? "تعديل بيانات موظف" : "Edit Employee",
              variant: "outline",
            },
            {
              label: isAr ? "جداول المناوبات" : "Shift Rosters",
              variant: "primary",
            },
            {
              label: isAr ? "الحضور والانصراف" : "Attendance Tracker",
              variant: "warning",
            },
            {
              label: isAr ? "الإجازات" : "Leave Management",
              variant: "secondary",
            },
            { label: isAr ? "الرواتب" : "Payroll", variant: "danger" },
            {
              label: isAr ? "تقييم الأداء" : "Performance Appraisal",
              variant: "outline",
            },
            {
              label: isAr ? "تقارير الموارد البشرية" : "HR Reports",
              variant: "primary",
            },
          ],
        },
      ],
    },
    sysadmin: {
      title: isAr ? "إدارة النظام (System Admin)" : "System Administration",
      description: isAr
        ? "التحكم الشامل في إعدادات النظام والصلاحيات."
        : "Global system settings and permissions.",
      sections: [
        {
          title: isAr ? "لوحة الإدارة" : "Admin Panel",
          actions: [
            {
              label: isAr ? "إدارة المستخدمين" : "User Management",
              variant: "primary",
            },
            {
              label: isAr ? "الصلاحيات" : "Permissions / Roles",
              variant: "warning",
            },
            {
              label: isAr ? "إدارة الأقسام" : "Department Config",
              variant: "outline",
            },
            {
              label: isAr ? "إدارة الأسرة" : "Bed Configuration",
              variant: "outline",
            },
            {
              label: isAr ? "إدارة الخدمات" : "Service Master",
              variant: "secondary",
            },
            {
              label: isAr ? "إدارة الأدوية" : "Drug Master Config",
              variant: "outline",
            },
            {
              label: isAr ? "إدارة الفحوصات" : "Tests Config",
              variant: "outline",
            },
            {
              label: isAr ? "النسخ الاحتياطي" : "Database Backup",
              variant: "success",
            },
            {
              label: isAr ? "استعادة البيانات" : "Restore Data",
              variant: "danger",
            },
            { label: isAr ? "سجل النشاط" : "Audit Logs", variant: "primary" },
            {
              label: isAr ? "الإعدادات العامة" : "Global Settings",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    helpdesk: {
      title: isAr ? "الدعم الفني وخدمة العملاء" : "Helpdesk & Customer Service",
      description: isAr
        ? "إدارة تذاكر الدعم الفني وشكاوى المرضى."
        : "IT tickets and patient feedback management.",
      sections: [
        {
          title: isAr ? "الدعم الفني (IT Helpdesk)" : "IT Helpdesk",
          actions: [
            {
              label: isAr ? "تسجيل مشكلة" : "Log New Ticket",
              variant: "warning",
            },
            {
              label: isAr ? "تتبع المشكلات" : "Track Tickets",
              variant: "outline",
            },
            {
              label: isAr ? "حل المشكلة" : "Resolve Issue",
              variant: "success",
            },
            {
              label: isAr ? "إغلاق التذكرة" : "Close Ticket",
              variant: "secondary",
            },
            {
              label: isAr ? "تقارير الدعم" : "Helpdesk Reports",
              variant: "primary",
            },
          ],
        },
        {
          title: isAr ? "خدمة العملاء (Customer Service)" : "Customer Service",
          actions: [
            {
              label: isAr ? "استفسار مريض" : "Patient Inquiry",
              variant: "outline",
            },
            {
              label: isAr ? "شكوى مريض" : "Patient Complaint",
              variant: "danger",
            },
            {
              label: isAr ? "متابعة الشكوى" : "Follow-up Complaint",
              variant: "warning",
            },
            {
              label: isAr ? "حل الشكوى" : "Resolve Complaint",
              variant: "success",
            },
            {
              label: isAr ? "رضا المريض" : "Patient Satisfaction Survey",
              variant: "primary",
            },
            {
              label: isAr ? "تقارير الخدمة" : "CS Reports",
              variant: "secondary",
            },
          ],
        },
      ],
    },
    reports: {
      title: isAr
        ? "التقارير والإحصاء (Reports & BI)"
        : "Reports & BI Dashboard",
      description: isAr
        ? "مؤشرات الأداء واستخراج التقارير."
        : "KPIs and data export tools.",
      sections: [
        {
          title: isAr ? "لوحة التقارير" : "Reports Dashboard",
          actions: [
            {
              label: isAr ? "تقارير سريرية" : "Clinical Reports",
              variant: "primary",
            },
            {
              label: isAr ? "تقارير إدارية" : "Administrative Reports",
              variant: "secondary",
            },
            {
              label: isAr ? "تقارير مالية" : "Financial Reports",
              variant: "success",
            },
            {
              label: isAr ? "تقارير الموارد البشرية" : "HR Reports",
              variant: "outline",
            },
            {
              label: isAr ? "إحصاءات المرضى" : "Patient Statistics",
              variant: "primary",
            },
            {
              label: isAr ? "مؤشرات الأداء (KPIs)" : "KPI Dashboards",
              variant: "warning",
            },
            {
              label: isAr ? "تقارير مخصصة" : "Custom Reports Builder",
              variant: "danger",
            },
            {
              label: isAr ? "تصدير التقرير" : "Export (PDF/Excel)",
              variant: "outline",
            },
            {
              label: isAr ? "طباعة التقرير" : "Print Report",
              variant: "outline",
            },
          ],
        },
      ],
    },
    master_data: {
      title: isAr ? "البيانات الأساسية (Master Data)" : "Master Data",
      description: isAr
        ? "إدارة القوائم والبيانات المرجعية للنظام."
        : "Management of system lookup lists and registries.",
      sections: [
        {
          title: isAr ? "الجداول المرجعية" : "Reference Tables",
          actions: [
            {
              label: isAr ? "الفروع والمنشآت" : "Branches",
              variant: "primary",
              action: () => handleSubTabClick("system_admin", "branches"),
            },
            {
              label: isAr ? "الأقسام السريرية" : "Departments",
              variant: "primary",
              action: () => handleSubTabClick("system_admin", "depts"),
            },
            {
              label: isAr ? "الموظفون والأطباء" : "Staff Registry",
              variant: "primary",
              action: () => handleSubTabClick("system_admin", "staff"),
            },
            {
              label: isAr ? "دليل الأدوية العالمي" : "Drug Master Index",
              variant: "outline",
              action: () => handleSubTabClick("pharmacy_supply", "drug_master"),
            },
          ],
        },
      ],
    },
  };

  const navBarButtons = [
    {
      id: "menu",
      icon: Menu,
      label: "MENU",
      action: () => setIsSidebarOpen(!isSidebarOpen),
    },
    {
      id: "patients",
      icon: Users,
      label: "PATIENTS",
      action: () => handleSubTabClick("reception", "adt"),
    },
    {
      id: "tasks",
      icon: CheckSquare,
      label: "TASKS",
      action: () => toast.info("Opened Tasks List"),
    },
    {
      id: "messages",
      icon: MessageSquare,
      label: "MESSAGES",
      action: () => toast.info("Opened Messaging Center"),
    },
    {
      id: "favorites",
      icon: Star,
      label: "FAVORITES",
      action: () => toast.info("Opened Favorites"),
    },
    {
      id: "search",
      icon: Search,
      label: "SEARCH",
      action: () => toast.info("Opened Global Search"),
    },
  ];

  const rightNavBarButtons = [
    {
      id: "help",
      icon: HelpCircle,
      label: "HELP",
      action: () => toast.info("Opened Help Center"),
    },
    {
      id: "notifications",
      icon: Bell,
      label: "NOTIFICATIONS",
      action: () => toast.info("Opened Notifications"),
    },
    {
      id: "language",
      icon: Globe,
      label: "LANGUAGE",
      action:
        onLanguageToggle || (() => toast.info("Language Toggle Triggered")),
    },
    {
      id: "logout",
      icon: LogOut,
      label: "LOGOUT",
      action: onLogout || (() => toast.info("Logged Out")),
    },
  ];

  return (
    <div
      className="flex h-screen overflow-hidden bg-slate-50 font-sans"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 ${isAr ? "right-0" : "left-0"} z-50 w-64 bg-[#0a4275] text-white flex-shrink-0 flex flex-col transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : isAr ? "translate-x-full md:translate-x-0" : "-translate-x-full md:translate-x-0"} md:block ${!isSidebarOpen && "md:w-20"}`}
      >
        {/* Logo area */}
        <div className="h-16 flex items-center px-4 border-b border-white/10 shrink-0">
          <Activity className="w-8 h-8 text-white mr-2 shrink-0" />
          <span
            className={`font-bold text-lg leading-tight whitespace-nowrap ${!isSidebarOpen && "md:hidden"}`}
          >
            Medica
            <br />
            CloudCare
          </span>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto custom-scrollbar py-4 space-y-1 px-2">
          {systemModules.map((module) => {
            const MIcon = module.icon;
            const isModuleActive =
              activeSubTab === module.id ||
              (module.subItems &&
                module.subItems.some((sub) => sub.id === activeSubTab));
            const isExpanded = expandedModules.includes(module.id);

            return (
              <div key={module.id} className="flex flex-col">
                <button
                  onClick={() => {
                    if (module.subItems) {
                      toggleExpand(module.id);
                      if (!isModuleActive) handleSubTabClick(module.id);
                    } else {
                      handleSubTabClick(module.id);
                    }
                  }}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-sm transition-all ${isModuleActive ? "bg-blue-600 text-white font-bold shadow-md" : "bg-transparent text-slate-300 hover:bg-white/10 hover:text-white font-medium"}`}
                >
                  <div className="flex items-center gap-3">
                    <MIcon
                      className={`w-5 h-5 shrink-0 ${isModuleActive ? "text-white" : "text-slate-400"}`}
                    />
                    <span
                      className={`whitespace-nowrap ${!isSidebarOpen && "md:hidden"}`}
                    >
                      {isAr ? module.labelAr : module.labelEn}
                    </span>
                  </div>
                  {module.hasChildren && (
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform ${isExpanded ? "rotate-180" : ""} ${!isSidebarOpen && "md:hidden"} ${isModuleActive ? "text-white" : "text-slate-400"}`}
                    />
                  )}
                </button>

                {/* Sub Menu */}
                {module.subItems && isExpanded && isSidebarOpen && (
                  <div className="mt-1 flex flex-col space-y-1 pl-11 pr-2 pb-1">
                    {module.subItems.map((sub) => {
                      const isSubActive = activeSubTab === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubTabClick(module.id, sub.id);
                          }}
                          className={`w-full text-start p-2 rounded-lg text-xs transition-all ${isSubActive ? "bg-blue-500/20 text-white font-bold" : "text-slate-400 hover:text-white hover:bg-white/5"}`}
                        >
                          {isAr ? sub.labelAr : sub.labelEn}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer info (version) */}
        <div
          className={`p-4 text-xs text-white/50 border-t border-white/10 shrink-0 whitespace-nowrap ${!isSidebarOpen && "md:hidden"}`}
        >
          © 2024 Medica CloudCare
          <br />
          v2.5.1
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10">
          {/* Left: toggle & search */}
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-slate-500 hover:text-slate-800"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative max-w-md w-full hidden sm:block">
              <Search
                className={`absolute ${isAr ? "right-3" : "left-3"} top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400`}
              />
              <input
                type="text"
                placeholder={
                  isAr ? "البحث عن مريض / قائمة" : "Search Patient / Menu"
                }
                className={`w-full ${isAr ? "pr-10 pl-16" : "pl-10 pr-16"} py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0a4275]`}
              />
              <div
                className={`absolute ${isAr ? "left-3" : "right-3"} top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded`}
              >
                Ctrl + K
              </div>
            </div>
          </div>

          {/* Right: Icons & Profile */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-4 sm:gap-5 text-slate-500">
              <div className="relative">
                <div
                  className="relative cursor-pointer hover:text-slate-800 transition"
                  onClick={() => setIsHISNotificationsOpen(!isHISNotificationsOpen)}
                >
                  <Bell className="w-5 h-5 text-rose-500" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center border border-white">
                    2
                  </span>
                </div>
                {isHISNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="p-3 border-b border-slate-100 bg-slate-50 font-bold text-xs text-slate-800">
                      {isAr ? "إشعارات النظام الطبي" : "Clinical Notifications"}
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
                        <div className="text-xs font-bold text-slate-800">Lab Result Ready</div>
                        <div className="text-[10px] text-slate-500 mt-1">Patient: Ahmed Ali - CBC results are ready.</div>
                      </div>
                      <div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
                        <div className="text-xs font-bold text-rose-600">Critical Value</div>
                        <div className="text-[10px] text-slate-500 mt-1">Patient: Sara Ahmed - High Troponin.</div>
                      </div>
                    </div>
                    <div className="p-2 text-center border-t border-slate-100 bg-slate-50 text-indigo-600 font-bold text-xs cursor-pointer hover:bg-slate-100 transition">
                      {isAr ? "عرض الكل" : "View All"}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <div
                  className="relative cursor-pointer hover:text-slate-800 transition"
                  onClick={() => setIsHISMessagesOpen(!isHISMessagesOpen)}
                >
                  <MessageSquare className="w-5 h-5 text-[#0a4275]" />
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 rounded-full text-white text-[10px] font-bold flex items-center justify-center border border-white">
                    1
                  </span>
                </div>
                {isHISMessagesOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="p-3 border-b border-slate-100 bg-slate-50 font-bold text-xs text-slate-800">
                      {isAr ? "رسائل الطاقم الطبي" : "Clinical Messages"}
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <div className="p-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer">
                        <div className="text-xs font-bold text-slate-800">Dr. Sarah</div>
                        <div className="text-[10px] text-slate-500 mt-1">Can you review patient 402?</div>
                      </div>
                    </div>
                    <div className="p-2 text-center border-t border-slate-100 bg-slate-50 text-indigo-600 font-bold text-xs cursor-pointer hover:bg-slate-100 transition">
                      {isAr ? "عرض كل الرسائل" : "View All Messages"}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition"
              onClick={onLanguageToggle}
            >
              <img
                src={
                  isAr
                    ? "https://flagcdn.com/w20/sa.png"
                    : "https://flagcdn.com/w20/gb.png"
                }
                alt="flag"
                className="w-6 sm:w-5 rounded-sm object-cover"
              />
              <span className="text-sm font-semibold text-slate-700 hidden sm:block">
                {isAr ? "العربية" : "English"}
              </span>
              <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:block" />
            </div>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

            <div className="flex items-center gap-3 cursor-pointer">
              <div className="text-right hidden md:block">
                <div className="text-sm font-bold text-slate-800">
                  {currentUser?.nameAr || "Dr. Ahmed Mostafa"}
                </div>
                <div className="text-xs text-slate-500">
                  {currentUser?.titleAr || "Consultant Cardiology"}
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-slate-300 shrink-0 hidden sm:block">
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown className="w-4 h-4 text-slate-500 hidden sm:block" />
            </div>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

            <button
              onClick={onLogout}
              className="p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              title={isAr ? "تسجيل الخروج" : "Logout"}
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Working Area */}
        <div
          className={`flex-1 relative ${["opd", "physician_desk"].includes(activeSubTab) ? "overflow-hidden flex flex-col" : "overflow-y-auto custom-scrollbar"} bg-slate-50`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className={
                ["opd", "physician_desk"].includes(activeSubTab)
                  ? "h-full flex flex-col"
                  : "min-h-full"
              }
            >
              {activeSubTab === "gate_reception" && (
                <GateReceptionDashboard language={language} departments={departments} />
              )}
              {activeSubTab === "clinics_list" && (
                <ClinicsListDashboard language={language} systemUsers={systemUsers || []} departments={departments} onNavigate={handleSubTabClick} />
              )}
              {activeSubTab === "physician_desk" && (
                <DoctorConsultationDesk language={language} currentUser={currentUser} systemUsers={systemUsers || []} departments={departments} />
              )}
              {activeSubTab === "opd" && (
                <DoctorConsultationDesk language={language} currentUser={currentUser} systemUsers={systemUsers || []} departments={departments} />
              )}
              {activeSubTab === "nicu" && <NICUDashboard language={language} />}
              {activeSubTab === "pacu" && <PACUDashboard language={language} />}
              {activeSubTab === "radiology" && (
                <RadiologyDashboard language={language} />
              )}
              {activeSubTab === "nutrition" && (
                <NutritionDashboard language={language} />
              )}
              {activeSubTab === "pt" && <RehabDashboard language={language} />}
              {activeSubTab === "rehab" && (
                <RehabDashboard language={language} />
              )}
              {activeSubTab === "psychiatry" && (
                <PsychiatryDashboard language={language} />
              )}
              {activeSubTab === "dialysis" && (
                <DialysisDashboard language={language} />
              )}
              {activeSubTab === "oncology" && (
                <OncologyDashboard language={language} />
              )}
              {activeSubTab === "obs_gyn" && (
                <ObstetricsDashboard language={language} />
              )}
              {activeSubTab === "mortuary" && (
                <MortuaryDashboard language={language} />
              )}
              {activeSubTab === "hr" && <HRDashboard language={language} />}
              {activeSubTab === "sysadmin" && (
                <SystemAdminDashboard language={language} systemUsers={systemUsers || []} departments={departments} />
              )}
              {activeSubTab === "multi_tenant" && (
                <MultiTenantDashboard language={language} />
              )}
              {activeSubTab === "audit_trail" && (
                <AuditTrailDashboard language={language} />
              )}
              {activeSubTab === "helpdesk" && (
                <HelpdeskDashboard language={language} />
              )}
              {activeSubTab === "reports" && (
                <ReportsBIDashboard language={language} />
              )}
              {activeSubTab === "master_data" && (
                <MasterDataDashboard language={language} />
              )}
              {activeSubTab === "clinical_forms" && <ClinicalFormsLibrary />}
              {activeSubTab === "patient_journey" && (
                <PatientJourneySimulator language={language} />
              )}

              {activeSubTab === "main_dashboard" && (
                <HISOverviewDashboard language={language} />
              )}
              {activeSubTab === "adt" && (
                <PatientRegistration language={language} departments={departments} />
              )}
              {activeSubTab === "appointments" && (
                <AppointmentsManager language={language} />
              )}
              {activeSubTab === "patient_portal" && (
                <PatientPortalDashboard language={language} />
              )}
              {activeSubTab === "emr_core" && (
                <EMRDashboard language={language} currentUser={currentUser} />
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
              {activeSubTab === "nursing" && (
                <NursingDirectorDashboard language={language} />
              )}
              {activeSubTab === "supervisor" && (
                <NursingSupervisorDashboard language={language} />
              )}
              {activeSubTab === "icu" && <ICUDashboard language={language} />}
              {activeSubTab === "er" && <ERDashboard language={language} />}
              {activeSubTab === "nursing_flow" && (
                <NursingFlowKardex language={language} />
              )}
              {activeSubTab === "pathology" && (
                <PathologyDashboard language={language} />
              )}
              {activeSubTab === "inventory" && (
                <InventoryManager language={language} />
              )}
              {activeSubTab === "purchasing" && (
                <PurchasingPO language={language} />
              )}
              {activeSubTab === "cashier" && (
                <CashierPointOfSale language={language} />
              )}
              {activeSubTab === "insurance_master" && (
                <InsuranceMaster language={language} />
              )}
              {activeSubTab === "insurance" && (
                <InsuranceMaster language={language} />
              )}
              {activeSubTab === "rcm" && <RCMClaims language={language} />}
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

import React, { useState, useEffect } from "react";
import {
  Activity,
  Plus,
  Search,
  FileText,
  FlaskConical,
  Stethoscope,
  Scissors,
  AlertTriangle,
  Pill,
  CheckCircle,
  Clock,
  Bed,
} from "lucide-react";
import { syncSetting, saveSetting } from "../lib/firestoreService";
import { toast } from "sonner";

interface Order {
  id: string;
  visitId: string;
  patientName: string;
  mrn: string;
  doctorId: string;
  orderType:
    | "Lab"
    | "Radiology"
    | "Medication"
    | "Procedure"
    | "Admission"
    | "Surgery";
  orderName: string;
  status: "Pending" | "In Progress" | "Completed" | "Cancelled";
  priority: "Routine" | "Urgent" | "STAT";
  createdAt: string;
}

export default function OrderManagementEngine({
  language,
}: {
  language: "ar" | "en";
}) {
  const isAr = language === "ar";
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("All");

  useEffect(() => {
    const unsub = syncSetting("his_cpoe_orders", (data) => {
      if (data?.value && Array.isArray(data.value)) {
        setOrders(data.value);
      } else {
        const seeded: Order[] = [
          {
            id: "ORD-9912",
            visitId: "VST-881",
            patientName: "Said Kamal",
            mrn: "MRN-1002",
            doctorId: "Dr. Hisham",
            orderType: "Lab",
            orderName: "CBC + Liver Profile",
            status: "Pending",
            priority: "STAT",
            createdAt: new Date(Date.now() - 3600000).toISOString(),
          },
          {
            id: "ORD-9913",
            visitId: "VST-881",
            patientName: "Said Kamal",
            mrn: "MRN-1002",
            doctorId: "Dr. Hisham",
            orderType: "Radiology",
            orderName: "CT Scan - Abdomen",
            status: "In Progress",
            priority: "Urgent",
            createdAt: new Date(Date.now() - 3000000).toISOString(),
          },
          {
            id: "ORD-9914",
            visitId: "VST-105",
            patientName: "Amina Saleh",
            mrn: "MRN-3341",
            doctorId: "Dr. Rami",
            orderType: "Medication",
            orderName: "Ceftriaxone 1g IV",
            status: "Completed",
            priority: "Routine",
            createdAt: new Date(Date.now() - 7200000).toISOString(),
          },
        ];
        setOrders(seeded);
        saveSetting("his_cpoe_orders", seeded);
      }
    });
    return () => unsub();
  }, []);

  const getOrderIcon = (type: string) => {
    switch (type) {
      case "Lab":
        return <FlaskConical className="w-4 h-4 text-purple-500" />;
      case "Radiology":
        return <Activity className="w-4 h-4 text-emerald-500" />;
      case "Medication":
        return <Pill className="w-4 h-4 text-blue-500" />;
      case "Procedure":
        return <Stethoscope className="w-4 h-4 text-orange-500" />;
      case "Admission":
        return <Bed className="w-4 h-4 text-indigo-500" />;
      case "Surgery":
        return <Scissors className="w-4 h-4 text-rose-500" />;
      default:
        return <FileText className="w-4 h-4 text-slate-500" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "STAT":
        return (
          <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-xs font-bold border border-rose-200">
            {priority}
          </span>
        );
      case "Urgent":
        return (
          <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold border border-orange-200">
            {priority}
          </span>
        );
      default:
        return (
          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-bold border border-slate-200">
            {priority}
          </span>
        );
    }
  };

  const filtered = orders.filter(
    (o) =>
      (filterType === "All" || o.orderType === filterType) &&
      (o.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        o.id.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div
      className="p-4 md:p-6 bg-slate-50 min-h-full"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <Settings className="h-7 w-7 text-indigo-600" />
            {isAr
              ? "محرك إدارة الطلبات الطبية (CPOE)"
              : "Computerized Physician Order Entry"}
          </h2>
          <p className="text-sm font-bold text-slate-500 mt-1">
            {isAr
              ? "نظام الإرسال الموحد للخدمات السريرية والتسعير التلقائي"
              : "Centralized clinical ordering & automated routing engine"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 justify-between h-auto rounded-xl border border-slate-200 flex flex-col items-center">
          <span className="text-sm font-bold text-slate-500">
            {isAr ? "الطلبات النشطة" : "Active Orders"}
          </span>
          <span className="text-3xl font-black text-indigo-600">
            {
              orders.filter(
                (o) => o.status !== "Completed" && o.status !== "Cancelled",
              ).length
            }
          </span>
        </div>
        <div className="md:col-span-3 flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm overflow-x-auto">
          <div className="font-bold text-xs text-slate-500 uppercase whitespace-nowrap">
            {isAr ? "الفلترة حسب نوع الطلب" : "Filter by Type"}
          </div>
          {["All", "Lab", "Radiology", "Medication", "Procedure"].map(
            (type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition whitespace-nowrap border ${filterType === type ? "bg-indigo-50 border-indigo-200 text-indigo-700 border-2" : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"}`}
              >
                {type === "All" && (isAr ? "الكل" : "All")}
                {type === "Lab" && (isAr ? "معمل" : "Lab")}
                {type === "Radiology" && (isAr ? "أشعة" : "Radiology")}
                {type === "Medication" && (isAr ? "أدوية" : "Meds")}
                {type === "Procedure" && (isAr ? "إجراءات" : "Procedure")}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-full max-w-md">
            <Search
              className={`absolute ${isAr ? "right-3" : "left-3"} top-2.5 h-4 w-4 text-slate-400`}
            />
            <input
              type="text"
              placeholder={
                isAr
                  ? "بحث برقم الطلب، اسم المريض..."
                  : "Search Order ID, Patient..."
              }
              className={`w-full ${isAr ? "pr-9 pl-4" : "pl-9 pr-4"} py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 font-bold`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow flex items-center gap-2 transition whitespace-nowrap hidden sm:flex">
            <Plus className="h-4 w-4" /> {isAr ? "إنشاء طلب جديد" : "New Order"}
          </button>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table
            className="w-full text-sm text-left"
            dir={isAr ? "rtl" : "ltr"}
          >
            <thead className="bg-white text-slate-500 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-4 py-4">
                  {isAr ? "رقم الطلب (HL7)" : "Order ID"}
                </th>
                <th className="px-4 py-4">{isAr ? "المريض" : "Patient"}</th>
                <th className="px-4 py-4">{isAr ? "النوع" : "Category"}</th>
                <th className="px-4 py-4">
                  {isAr ? "تفاصيل الخدمة المطلوبة" : "Requested Item"}
                </th>
                <th className="px-4 py-4">{isAr ? "الطبيب" : "Ordering MD"}</th>
                <th className="px-4 py-4 text-center">
                  {isAr ? "الأهمية" : "Priority"}
                </th>
                <th className="px-4 py-4 text-center">
                  {isAr ? "مسار العمل" : "Workflow Status"}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((order) => (
                <tr key={order.id} className="hover:bg-indigo-50/30 transition">
                  <td className="px-4 py-3 font-mono font-bold text-slate-800">
                    <div className="flex flex-col">
                      <span>{order.id}</span>
                      <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3" />{" "}
                        {new Date(order.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-indigo-900">
                      {order.patientName}
                    </div>
                    <div className="text-xs font-mono text-slate-500">
                      {order.mrn} • Visit:{" "}
                      <span className="text-slate-400">{order.visitId}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 font-bold text-slate-700 bg-slate-50 px-2 py-1 rounded-md border border-slate-100 w-fit">
                      {getOrderIcon(order.orderType)}
                      <span className="text-xs uppercase">
                        {order.orderType}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-800">
                    {order.orderName}
                  </td>
                  <td className="px-4 py-3 font-bold text-slate-600">
                    {order.doctorId}
                  </td>
                  <td className="px-4 py-3 text-center">
                    {getPriorityBadge(order.priority)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-2 py-1 inline-flex items-center gap-1.5 rounded-full text-xs font-bold border ${
                        order.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : order.status === "In Progress"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : order.status === "Pending"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-slate-50 text-slate-700 border-slate-200"
                      }`}
                    >
                      {order.status === "Completed" && (
                        <CheckCircle className="w-3.5 h-3.5" />
                      )}
                      {order.status === "In Progress" && (
                        <Activity className="w-3.5 h-3.5" />
                      )}
                      {order.status === "Pending" && (
                        <Clock className="w-3.5 h-3.5" />
                      )}
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-4 py-8 text-center text-slate-500 font-bold"
                  >
                    {isAr ? "لم يتم العثور على طلبات" : "No orders found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

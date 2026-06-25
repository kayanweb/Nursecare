import React, { useState } from "react";
import { Receipt, Search, Plus, Save, Printer, XCircle, RefreshCw, FileText } from "lucide-react";

interface Props {
  language: "ar" | "en";
}

export default function BillingInsurance({ language }: Props) {
  const isAr = language === "ar";
  
  // Mock data for Invoice List
  const invoices = [
    { id: "INV-2024-001", patient: "Ahmed Mohamed", date: "2024-05-20", total: 1500, status: "Paid" },
    { id: "INV-2024-002", patient: "Sara Hassan", date: "2024-05-20", total: 850, status: "Unpaid" },
    { id: "INV-2024-003", patient: "Mona Tarek", date: "2024-05-19", total: 3200, status: "Partial" },
  ];

  return (
    <div className="flex flex-col h-full bg-slate-50 font-sans" dir={isAr ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="bg-white p-4 sm:p-6 border-b border-slate-200 shrink-0">
        <h1 className="text-2xl font-black text-slate-800 flex items-center gap-2">
          <Receipt className="h-7 w-7 text-amber-600" />
          {isAr ? "نظام الفواتير والمالية" : "Billing & Financials"}
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          {isAr ? "إدارة فواتير المرضى والمطالبات" : "Patient Invoices and Claims Management"}
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Invoice List */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl flex flex-col overflow-hidden shadow-sm h-[800px]">
            <div className="p-4 border-b border-slate-200 bg-slate-50 shrink-0">
              <h3 className="font-bold text-slate-800 mb-3">{isAr ? "قائمة الفواتير" : "Invoice List"}</h3>
              <div className="relative">
                <Search className={`w-4 h-4 text-slate-400 absolute ${isAr ? "right-3" : "left-3"} top-2.5`} />
                <input 
                  type="text" 
                  placeholder={isAr ? "بحث برقم الفاتورة، اسم المريض..." : "Search by Invoice #, Patient..."} 
                  className={`w-full bg-white border border-slate-300 rounded-lg py-2 ${isAr ? "pr-9 pl-4" : "pl-9 pr-4"} text-xs outline-none focus:border-amber-500`}
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar">
              {invoices.map((inv, idx) => (
                <div key={inv.id} className={`border rounded-xl p-3 cursor-pointer transition ${idx === 1 ? 'bg-amber-50 border-amber-300' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                   <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="font-bold text-slate-800 text-sm block">{inv.id}</span>
                        <span className="text-xs font-semibold text-slate-600">{inv.patient}</span>
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-black font-mono text-slate-800 block">{inv.total} EGP</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded inline-block mt-1 ${
                          inv.status === "Paid" ? "bg-emerald-100 text-emerald-700" :
                          inv.status === "Unpaid" ? "bg-rose-100 text-rose-700" :
                          "bg-orange-100 text-orange-700"
                        }`}>{inv.status}</span>
                      </div>
                   </div>
                   <div className="text-[10px] text-slate-400 font-mono">{inv.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Invoice Form */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col h-[800px]">
              
              <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center shrink-0">
                 <h3 className="font-black text-amber-800 flex items-center gap-2 text-sm">
                    <FileText className="w-5 h-5 text-amber-500" /> {isAr ? "نموذج الفاتورة" : "Invoice Form"}
                 </h3>
                 <div className="flex gap-2">
                    <button className="flex items-center gap-1.5 bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-slate-50">
                      <Printer className="w-3.5 h-3.5" /> {isAr ? "طباعة" : "Print"}
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-rose-200 text-rose-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-rose-50">
                      <XCircle className="w-3.5 h-3.5" /> {isAr ? "إلغاء الفاتورة" : "Cancel Invoice"}
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-orange-200 text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-50">
                      <RefreshCw className="w-3.5 h-3.5" /> {isAr ? "استرجاع" : "Refund"}
                    </button>
                    <button className="flex items-center gap-1.5 bg-amber-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-amber-700 shadow-sm">
                      <Save className="w-3.5 h-3.5" /> {isAr ? "حفظ" : "Save"}
                    </button>
                 </div>
              </div>

              {/* Patient Info Banner */}
              <div className="p-4 border-b border-slate-100 bg-white grid grid-cols-1 md:grid-cols-3 gap-4 shrink-0">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">{isAr ? "المريض" : "Patient"}</label>
                  <div className="font-bold text-slate-800 text-sm">Sara Hassan (MRN-00012346)</div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">{isAr ? "تاريخ الفاتورة" : "Invoice Date"}</label>
                  <input type="date" defaultValue="2024-05-20" className="w-full text-sm font-bold text-slate-800 border-none outline-none bg-transparent p-0 mt-0.5" />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase">{isAr ? "طريقة الدفع" : "Payment Method"}</label>
                  <select className="w-full text-sm font-bold text-slate-800 border border-slate-200 rounded p-1 outline-none focus:border-amber-500 mt-0.5 bg-slate-50">
                    <option>Cash</option>
                    <option>Visa</option>
                    <option>Master Card</option>
                    <option>Insurance</option>
                  </select>
                </div>
              </div>

              {/* Services Table */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 sticky top-0 z-10">
                    <tr>
                      <th className="py-2 px-4 font-bold text-start w-1/2">{isAr ? "الخدمة" : "Service"}</th>
                      <th className="py-2 px-4 font-bold text-center w-16">{isAr ? "الكمية" : "Qty"}</th>
                      <th className="py-2 px-4 font-bold text-end w-32">{isAr ? "سعر الوحدة" : "Unit Price"}</th>
                      <th className="py-2 px-4 font-bold text-end w-32">{isAr ? "الإجمالي" : "Total"}</th>
                      <th className="py-2 px-4 w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-800 text-xs">Consultation - Cardiology</td>
                      <td className="py-3 px-4"><input type="number" defaultValue="1" className="w-full text-center border border-slate-200 rounded p-1 text-xs outline-none focus:border-amber-500" /></td>
                      <td className="py-3 px-4 text-end"><input type="number" defaultValue="300" className="w-full text-end border border-slate-200 rounded p-1 text-xs outline-none focus:border-amber-500" /></td>
                      <td className="py-3 px-4 text-end font-mono font-bold text-slate-800">300.00</td>
                      <td className="py-3 px-4 text-center"><button className="text-rose-500 hover:bg-rose-50 p-1 rounded"><XCircle className="w-4 h-4" /></button></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-800 text-xs">Complete Blood Count (CBC)</td>
                      <td className="py-3 px-4"><input type="number" defaultValue="1" className="w-full text-center border border-slate-200 rounded p-1 text-xs outline-none focus:border-amber-500" /></td>
                      <td className="py-3 px-4 text-end"><input type="number" defaultValue="150" className="w-full text-end border border-slate-200 rounded p-1 text-xs outline-none focus:border-amber-500" /></td>
                      <td className="py-3 px-4 text-end font-mono font-bold text-slate-800">150.00</td>
                      <td className="py-3 px-4 text-center"><button className="text-rose-500 hover:bg-rose-50 p-1 rounded"><XCircle className="w-4 h-4" /></button></td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-bold text-slate-800 text-xs">Chest X-Ray</td>
                      <td className="py-3 px-4"><input type="number" defaultValue="1" className="w-full text-center border border-slate-200 rounded p-1 text-xs outline-none focus:border-amber-500" /></td>
                      <td className="py-3 px-4 text-end"><input type="number" defaultValue="400" className="w-full text-end border border-slate-200 rounded p-1 text-xs outline-none focus:border-amber-500" /></td>
                      <td className="py-3 px-4 text-end font-mono font-bold text-slate-800">400.00</td>
                      <td className="py-3 px-4 text-center"><button className="text-rose-500 hover:bg-rose-50 p-1 rounded"><XCircle className="w-4 h-4" /></button></td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-4">
                   <button className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors border border-dashed border-blue-200 w-full justify-center">
                     <Plus className="w-4 h-4" /> {isAr ? "إضافة خدمة جديدة" : "Add Service"}
                   </button>
                </div>
              </div>

              {/* Totals Section */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 shrink-0">
                 <div className="w-full md:w-1/2 ml-auto space-y-3" dir={isAr ? "rtl" : "ltr"}>
                    <div className="flex justify-between items-center">
                       <span className="text-xs font-bold text-slate-600">{isAr ? "المجموع الفرعي" : "Subtotal"}</span>
                       <span className="text-sm font-mono font-bold text-slate-800">850.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <div className="flex items-center gap-2">
                         <span className="text-xs font-bold text-slate-600">{isAr ? "خصم" : "Discount"}</span>
                         <select className="border border-slate-200 rounded p-1 text-xs outline-none bg-white">
                           <option>%</option>
                           <option>Value</option>
                         </select>
                         <input type="number" className="w-16 border border-slate-200 rounded p-1 text-xs outline-none bg-white" placeholder="0" />
                       </div>
                       <span className="text-sm font-mono font-bold text-slate-800">- 0.00</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <div className="flex items-center gap-2">
                         <span className="text-xs font-bold text-slate-600">{isAr ? "ضريبة القيمة المضافة" : "Tax (VAT)"}</span>
                         <input type="number" defaultValue="14" className="w-16 border border-slate-200 rounded p-1 text-xs outline-none bg-white" />
                         <span className="text-xs text-slate-500">%</span>
                       </div>
                       <span className="text-sm font-mono font-bold text-slate-800">0.00</span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                       <span className="text-sm font-black text-amber-800">{isAr ? "الإجمالي الصافي" : "Net Total"}</span>
                       <span className="text-2xl font-black font-mono text-amber-700">850.00 <span className="text-sm font-bold text-amber-600">EGP</span></span>
                    </div>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

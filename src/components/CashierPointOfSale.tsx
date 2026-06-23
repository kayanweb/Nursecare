import React, { useState, useEffect } from "react";
import { Banknote, Receipt, CreditCard } from "lucide-react";
import { syncSetting, saveSetting } from "../lib/firestoreService";

interface PaymentItem {
  id: string;
  invoice: string;
  patient: string;
  amount: number;
  method: string;
}

export default function CashierPointOfSale({
  language,
}: {
  language: "ar" | "en";
}) {
  const isAr = language === "ar";
  const [payments, setPayments] = useState<PaymentItem[]>([]);

  useEffect(() => {
    const unsub = syncSetting("his_cashier", (data) => {
      if (data?.value && Array.isArray(data.value)) {
        setPayments(data.value);
      } else {
        const seeded: PaymentItem[] = [
          {
            id: "PAY-101",
            invoice: "INV-992",
            patient: "Ahmed Yassin",
            amount: 150,
            method: "Credit Card",
          },
          {
            id: "PAY-102",
            invoice: "INV-993",
            patient: "Sara Kamal",
            amount: 50,
            method: "Cash",
          },
        ];
        setPayments(seeded);
        saveSetting("his_cashier", seeded);
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
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">
            <Banknote className="h-7 w-7 text-emerald-600" />
            {isAr ? "نقطة البيع والصندوق" : "Cashier & POS"}
          </h2>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left" dir={isAr ? "rtl" : "ltr"}>
          <thead className="bg-slate-50 text-slate-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200">
            <tr>
              <th className="px-4 py-4">{isAr ? "الدفعة" : "Payment ID"}</th>
              <th className="px-4 py-4">{isAr ? "المريض" : "Patient"}</th>
              <th className="px-4 py-4">{isAr ? "المبلغ" : "Amount"}</th>
              <th className="px-4 py-4 text-center">
                {isAr ? "الطريقة" : "Method"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {payments.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-mono font-bold text-slate-600">
                  {p.id}
                </td>
                <td className="px-4 py-3 font-bold text-slate-800">
                  {p.patient}
                </td>
                <td className="px-4 py-3 font-black text-emerald-700">
                  {p.amount.toLocaleString()} SR
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold border border-slate-200 flex items-center justify-center gap-1 w-fit mx-auto">
                    {p.method === "Credit Card" ? (
                      <CreditCard className="w-3 h-3" />
                    ) : (
                      <Banknote className="w-3 h-3" />
                    )}
                    {p.method}
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

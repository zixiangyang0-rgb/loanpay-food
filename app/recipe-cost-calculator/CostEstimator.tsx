"use client";

import { useMemo, useState } from "react";

type Row = { name: string; cost: string; qty: string };

export default function CostEstimator() {
  const [rows, setRows] = useState<Row[]>([
    { name: "Chicken thighs", cost: "3.99", qty: "2" },
    { name: "Rice", cost: "1.20", qty: "1" },
    { name: "Broccoli", cost: "2.50", qty: "2" },
  ]);
  const [servings, setServings] = useState("4");

  const total = useMemo(
    () => rows.reduce((s, r) => s + (parseFloat(r.cost) || 0) * (parseFloat(r.qty) || 0), 0),
    [rows]
  );
  const perServing = useMemo(() => {
    const n = parseFloat(servings) || 0;
    return n > 0 ? total / n : 0;
  }, [total, servings]);

  function update(i: number, k: keyof Row, v: string) {
    setRows((rs) => rs.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  }

  return (
    <div className="mag-card mt-6 p-6" style={{ background: "#fffdf8" }}>
      <h3 className="font-display text-xl font-bold">Serving &amp; cost estimator</h3>
      <p className="mt-1 text-sm" style={{ color: "#6f5f52" }}>
        Enter each ingredient&apos;s unit price and quantity — totals update instantly.
      </p>
      <div className="mt-4 space-y-3">
        {rows.map((r, i) => (
          <div key={i} className="grid gap-2 sm:grid-cols-4">
            <label className="text-sm font-semibold">
              Ingredient
              <input
                value={r.name}
                onChange={(e) => update(i, "name", e.target.value)}
                className="mt-1 w-full rounded-lg border px-2 py-1.5"
                style={{ borderColor: "#e3c98f" }}
              />
            </label>
            <label className="text-sm font-semibold">
              Price ($)
              <input
                value={r.cost}
                inputMode="decimal"
                onChange={(e) => update(i, "cost", e.target.value)}
                className="mt-1 w-full rounded-lg border px-2 py-1.5"
                style={{ borderColor: "#e3c98f" }}
              />
            </label>
            <label className="text-sm font-semibold">
              Qty
              <input
                value={r.qty}
                inputMode="decimal"
                onChange={(e) => update(i, "qty", e.target.value)}
                className="mt-1 w-full rounded-lg border px-2 py-1.5"
                style={{ borderColor: "#e3c98f" }}
              />
            </label>
            <div className="flex items-end">
              <button
                onClick={() => setRows((rs) => rs.filter((_, j) => j !== i))}
                className="rounded-full border px-3 py-1.5 text-sm font-bold"
                style={{ borderColor: "#c93a2c", color: "#a92c20" }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => setRows((rs) => [...rs, { name: "", cost: "", qty: "1" }])}
          className="btn-outline text-sm"
        >
          + Add ingredient
        </button>
        <label className="text-sm font-semibold">
          Servings
          <input
            value={servings}
            inputMode="numeric"
            onChange={(e) => setServings(e.target.value)}
            className="ml-2 w-20 rounded-lg border px-2 py-1.5"
            style={{ borderColor: "#e3c98f" }}
          />
        </label>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl p-4" style={{ background: "#f6e7cd" }}>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#7c5417" }}>Total recipe cost</p>
          <p className="font-display text-3xl font-bold">${total.toFixed(2)}</p>
        </div>
        <div className="rounded-xl p-4" style={{ background: "#c93a2c" }}>
          <p className="text-xs font-bold uppercase tracking-widest text-white/80">Cost per serving</p>
          <p className="font-display text-3xl font-bold text-white">${perServing.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

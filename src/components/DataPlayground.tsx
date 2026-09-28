"use client";

import { useState, useMemo } from "react";
import { Sparkles, Play, RotateCcw, CheckCircle, BarChart2, Database, Sliders } from "lucide-react";

export function DataPlayground() {
  const [activeTab, setActiveTab] = useState<"churn" | "kpi" | "sql">("churn");

  // State for Churn Simulator
  const [tenure, setTenure] = useState<number>(14);
  const [monthlyCharge, setMonthlyCharge] = useState<number>(75);
  const [contractType, setContractType] = useState<"month-to-month" | "one-year" | "two-year">("month-to-month");
  const [hasTechSupport, setHasTechSupport] = useState<boolean>(false);
  const [complaintTickets, setComplaintTickets] = useState<number>(2);

  // Calculate simulated churn risk score based on empirical logistic regression model coefficients
  const churnAnalysis = useMemo(() => {
    // base log-odds
    let logOdds = -0.5;
    
    // tenure effect (longer tenure -> lower churn)
    logOdds -= (tenure / 72) * 2.2;

    // monthly charges effect (higher charge -> higher churn)
    logOdds += ((monthlyCharge - 20) / 100) * 1.5;

    // contract effect
    if (contractType === "month-to-month") logOdds += 1.4;
    else if (contractType === "one-year") logOdds -= 0.6;
    else if (contractType === "two-year") logOdds -= 1.8;

    // tech support effect
    if (!hasTechSupport) logOdds += 0.8;
    else logOdds -= 0.5;

    // complaints effect
    logOdds += complaintTickets * 0.45;

    // Sigmoid probability function: 1 / (1 + e^-z)
    const prob = 1 / (1 + Math.exp(-logOdds));
    const percentage = Math.min(Math.max(Math.round(prob * 1000) / 10, 1), 99);

    let riskLevel: "Rendah" | "Sedang" | "Tinggi" = "Rendah";
    let riskColor = "text-emerald-600 dark:text-emerald-400";
    let riskBg = "bg-emerald-500/10 border-emerald-500/30";
    let recommendation = "Pelanggan berada dalam zona aman retensi. Fokus pada upselling fitur atau program loyalitas berkala.";

    if (percentage >= 60) {
      riskLevel = "Tinggi";
      riskColor = "text-rose-600 dark:text-rose-400";
      riskBg = "bg-rose-500/10 border-rose-500/30";
      recommendation = "Prioritas Intervensi: Tawarkan diskon kontrak 1-tahun dan jadwal pendampingan teknis gratis untuk menyelesaikan tiket kendala.";
    } else if (percentage >= 35) {
      riskLevel = "Sedang";
      riskColor = "text-amber-600 dark:text-amber-400";
      riskBg = "bg-amber-500/10 border-amber-500/30";
      recommendation = "Kirim survei kepuasan pelanggan otomatis dan rekomendasikan paket bundling Tech Support untuk memperpanjang lifetime value.";
    }

    // Top feature impacts (SHAP breakdown approximation)
    const impacts = [
      { feature: "Tipe Kontrak", value: contractType === "month-to-month" ? "+38% Risiko" : "-28% Risiko", positive: contractType === "month-to-month" },
      { feature: "Masa Langganan (Tenure)", value: tenure < 12 ? "+25% Risiko" : "-35% Proteksi", positive: tenure < 12 },
      { feature: "Tiket Keluhan Layanan", value: complaintTickets > 1 ? `+${complaintTickets * 12}% Sensitif` : "-10% Stabil", positive: complaintTickets > 1 },
      { feature: "Layanan Tech Support", value: hasTechSupport ? "-18% Retensi Baik" : "+22% Risiko", positive: !hasTechSupport },
    ];

    return { percentage, riskLevel, riskColor, riskBg, recommendation, impacts };
  }, [tenure, monthlyCharge, contractType, hasTechSupport, complaintTickets]);

  const handleResetChurn = () => {
    setTenure(24);
    setMonthlyCharge(60);
    setContractType("one-year");
    setHasTechSupport(true);
    setComplaintTickets(0);
  };

  // State for SQL Sandbox
  const sqlPresets = [
    {
      id: "churn-query",
      name: "Deteksi Churn & CLV Tinggi",
      description: "Menyaring 5 pelanggan berisiko tinggi dengan total nilai belanja tertinggi",
      query: `SELECT 
    c.customer_id,
    c.segment,
    c.tenure_months,
    ROUND(SUM(t.order_value), 2) AS total_clv,
    p.churn_probability,
    CASE 
        WHEN p.churn_probability > 0.65 THEN 'High Urgency'
        WHEN p.churn_probability > 0.35 THEN 'Medium Attention'
        ELSE 'Healthy'
    END AS retention_tier
FROM customers c
JOIN transactions t ON c.customer_id = t.customer_id
JOIN ml_churn_scores p ON c.customer_id = p.customer_id
WHERE c.status = 'active'
GROUP BY c.customer_id, c.segment, c.tenure_months, p.churn_probability
HAVING p.churn_probability > 0.50
ORDER BY total_clv DESC
LIMIT 5;`,
      time: "24ms",
      rowsScanned: "14,820 baris",
      results: [
        { customer_id: "CUST-8812", segment: "Enterprise B2B", tenure: "8 bln", clv: "$14,250.00", prob: "78.4%", tier: "High Urgency" },
        { customer_id: "CUST-4109", segment: "Mid-Market", tenure: "11 bln", clv: "$8,940.50", prob: "69.1%", tier: "High Urgency" },
        { customer_id: "CUST-1092", segment: "Mid-Market", tenure: "14 bln", clv: "$7,320.00", prob: "62.8%", tier: "High Urgency" },
        { customer_id: "CUST-7734", segment: "SMB Retail", tenure: "6 bln", clv: "$5,890.20", prob: "81.0%", tier: "High Urgency" },
        { customer_id: "CUST-2231", segment: "SMB Retail", tenure: "16 bln", clv: "$4,650.00", prob: "54.2%", tier: "Medium Attention" },
      ],
      insight: "Tiga dari lima pelanggan berisiko tertinggi berada di kuartil masa langganan < 12 bulan akibat kendala integrasi awal."
    },
    {
      id: "cohort-query",
      name: "Analisis Kohort Retensi (Window Function)",
      description: "Menghitung retensi MoM menggunakan DATEDIFF dan window aggregations",
      query: `WITH user_first_purchase AS (
    SELECT 
        user_id,
        DATE_TRUNC('month', MIN(order_date)) AS cohort_month
    FROM orders
    GROUP BY user_id
),
monthly_activity AS (
    SELECT 
        u.cohort_month,
        FLOOR(DATEDIFF('month', u.cohort_month, o.order_date)) AS month_index,
        COUNT(DISTINCT o.user_id) AS active_users
    FROM orders o
    JOIN user_first_purchase u ON o.user_id = u.user_id
    GROUP BY 1, 2
)
SELECT 
    cohort_month,
    MAX(CASE WHEN month_index = 0 THEN active_users END) AS cohort_size,
    ROUND(100.0 * MAX(CASE WHEN month_index = 1 THEN active_users END) / MAX(CASE WHEN month_index = 0 THEN active_users END), 1) AS m1_retention_pct,
    ROUND(100.0 * MAX(CASE WHEN month_index = 3 THEN active_users END) / MAX(CASE WHEN month_index = 0 THEN active_users END), 1) AS m3_retention_pct
FROM monthly_activity
GROUP BY cohort_month
ORDER BY cohort_month DESC
LIMIT 4;`,
      time: "48ms",
      rowsScanned: "89,450 baris",
      results: [
        { cohort: "2024-03", size: "2,450", m1: "42.8%", m3: "29.4%", note: "Kampanye Onboarding Baru" },
        { cohort: "2024-02", size: "2,120", m1: "36.2%", m3: "24.1%", note: "Standar Organik" },
        { cohort: "2024-01", size: "1,980", m1: "34.9%", m3: "23.5%", note: "Tahun Baru Seasonal" },
        { cohort: "2023-12", size: "3,100", m1: "38.5%", m3: "26.0%", note: "Harbolnas Promo" },
      ],
      insight: "Inisiatif automated onboarding email pada Maret 2024 meningkatkan Month-1 retention dari 36.2% menjadi 42.8% (+6.6% absolute gain)."
    }
  ];

  const [selectedSqlIndex, setSelectedSqlIndex] = useState(0);
  const [isSqlRunning, setIsSqlRunning] = useState(false);
  const [showSqlResults, setShowSqlResults] = useState(true);

  const handleExecuteSql = () => {
    setIsSqlRunning(true);
    setShowSqlResults(false);
    setTimeout(() => {
      setIsSqlRunning(false);
      setShowSqlResults(true);
    }, 400);
  };

  // State for KPI Explorer
  const [kpiMetric, setKpiMetric] = useState<"revenue" | "conversion" | "cac">("revenue");
  const [kpiSegment, setKpiSegment] = useState<"all" | "enterprise" | "smb">("all");

  const kpiData = {
    revenue: {
      title: "Tren Pendapatan Bulanan (Monthly GMV)",
      unit: "$",
      total: kpiSegment === "enterprise" ? "$480,000" : kpiSegment === "smb" ? "$210,000" : "$690,000",
      change: "+18.4% YoY",
      dataPoints: [
        { month: "Jan", val: 42 },
        { month: "Feb", val: 48 },
        { month: "Mar", val: 56 },
        { month: "Apr", val: 51 },
        { month: "Mei", val: 64 },
        { month: "Jun", val: 72 },
        { month: "Jul", val: 78 },
        { month: "Agu", val: 85 },
      ]
    },
    conversion: {
      title: "Conversion Rate Funnel Pengguna",
      unit: "%",
      total: kpiSegment === "enterprise" ? "4.8%" : kpiSegment === "smb" ? "2.6%" : "3.4%",
      change: "+0.8% pts MoM",
      dataPoints: [
        { month: "Jan", val: 2.4 },
        { month: "Feb", val: 2.7 },
        { month: "Mar", val: 2.9 },
        { month: "Apr", val: 3.1 },
        { month: "Mei", val: 3.0 },
        { month: "Jun", val: 3.3 },
        { month: "Jul", val: 3.5 },
        { month: "Agu", val: 3.8 },
      ]
    },
    cac: {
      title: "Customer Acquisition Cost (CAC) Efficiency",
      unit: "$",
      total: kpiSegment === "enterprise" ? "$124" : kpiSegment === "smb" ? "$38" : "$64",
      change: "-14.2% Cost Saved",
      dataPoints: [
        { month: "Jan", val: 82 },
        { month: "Feb", val: 79 },
        { month: "Mar", val: 75 },
        { month: "Apr", val: 72 },
        { month: "Mei", val: 69 },
        { month: "Jun", val: 66 },
        { month: "Jul", val: 63 },
        { month: "Agu", val: 58 },
      ]
    }
  };

  const activeKpi = kpiData[kpiMetric];

  return (
    <section id="playground" className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Data Lab</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Coba Langsung Simulasi &amp; Analitika Data
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
              Uji coba model machine learning, visualisasi performa KPI, dan kueri SQL analitik secara langsung di browser tanpa perlu instalasi tools tambahan.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-200/70 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700/60 self-start md:self-end">
            <button
              onClick={() => setActiveTab("churn")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "churn"
                  ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-xs font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>ML Churn Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab("kpi")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "kpi"
                  ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-xs font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>KPI Explorer</span>
            </button>

            <button
              onClick={() => setActiveTab("sql")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "sql"
                  ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-white shadow-xs font-semibold"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>SQL Sandbox</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Machine Learning Churn Simulator */}
        {activeTab === "churn" && (
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 md:p-8 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white flex items-center gap-2">
                  <span>Prediktor Risiko Churn Pelanggan (XGBoost / Logistic Approximator)</span>
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Geser parameter pelanggan di bawah untuk melihat bagaimana algoritma memprediksi probabilitas berhenti berlangganan secara real-time.
                </p>
              </div>
              <button
                onClick={handleResetChurn}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-xs text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Parameter Default</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              
              {/* Controls Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Control 1: Tenure */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <label htmlFor="tenure-range" className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Masa Berlangganan (Tenure): <span className="font-mono text-emerald-600 dark:text-emerald-400">{tenure} bulan</span>
                    </label>
                    <span className="text-[11px] text-zinc-400 font-mono">1 - 72 bln</span>
                  </div>
                  <input
                    id="tenure-range"
                    type="range"
                    min="1"
                    max="72"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-900 dark:accent-zinc-100"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                    <span>Pelanggan Baru (Tinggi Churn)</span>
                    <span>Pelanggan Loyal (Rendah Churn)</span>
                  </div>
                </div>

                {/* Control 2: Monthly Charges */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-2">
                    <label htmlFor="charge-range" className="font-semibold text-zinc-800 dark:text-zinc-200">
                      Biaya Bulanan (Monthly Charge): <span className="font-mono text-emerald-600 dark:text-emerald-400">${monthlyCharge}/bln</span>
                    </label>
                    <span className="text-[11px] text-zinc-400 font-mono">$20 - $120</span>
                  </div>
                  <input
                    id="charge-range"
                    type="range"
                    min="20"
                    max="120"
                    value={monthlyCharge}
                    onChange={(e) => setMonthlyCharge(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-900 dark:accent-zinc-100"
                  />
                </div>

                {/* Control 3: Contract Type */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                    Jenis Kontrak Berlangganan
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "month-to-month", label: "Bulan-ke-Bulan" },
                      { id: "one-year", label: "1 Tahun" },
                      { id: "two-year", label: "2 Tahun" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setContractType(item.id as "month-to-month" | "one-year" | "two-year")}
                        className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                          contractType === item.id
                            ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold shadow-xs"
                            : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850 text-zinc-700 dark:text-zinc-300 hover:border-zinc-300"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Control 4: Complaint Tickets & Tech Support */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <div className="flex justify-between items-center text-xs mb-2">
                      <label htmlFor="complaints-range" className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Tiket Keluhan: <span className="font-mono text-zinc-900 dark:text-zinc-100">{complaintTickets} tiket</span>
                      </label>
                    </div>
                    <input
                      id="complaints-range"
                      type="range"
                      min="0"
                      max="6"
                      value={complaintTickets}
                      onChange={(e) => setComplaintTickets(Number(e.target.value))}
                      className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-900 dark:accent-zinc-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
                      Langganan Tech Support
                    </label>
                    <button
                      type="button"
                      onClick={() => setHasTechSupport(!hasTechSupport)}
                      className={`w-full py-2 px-3 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                        hasTechSupport
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 font-semibold"
                          : "bg-zinc-50 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800"
                      }`}
                    >
                      {hasTechSupport ? <CheckCircle className="w-3.5 h-3.5" /> : null}
                      <span>{hasTechSupport ? "Aktif (+ Proteksi)" : "Tidak Aktif"}</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Prediction Output & Recommendation Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-850/50 space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Prediksi Algoritma
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${churnAnalysis.riskBg} ${churnAnalysis.riskColor}`}>
                      Tingkat Risiko: {churnAnalysis.riskLevel}
                    </span>
                  </div>

                  {/* Big Percentage Display */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className={`text-5xl font-extrabold tracking-tight font-mono ${churnAnalysis.riskColor}`}>
                      {churnAnalysis.percentage}%
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      Probabilitas Churn
                    </span>
                  </div>

                  {/* Progress bar visual */}
                  <div className="w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-3 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 rounded-full ${
                        churnAnalysis.percentage >= 60
                          ? "bg-rose-500"
                          : churnAnalysis.percentage >= 35
                          ? "bg-amber-500"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${churnAnalysis.percentage}%` }}
                    />
                  </div>

                  {/* Business Recommendation Box */}
                  <div className="mt-5 p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-zinc-900 text-xs space-y-1">
                    <div className="font-semibold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Rekomendasi Tindakan Data:</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-[11px]">
                      {churnAnalysis.recommendation}
                    </p>
                  </div>
                </div>

                {/* Feature Importance SHAP Attribution List */}
                <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    Bobot Pengaruh Fitur (SHAP Attribution):
                  </span>
                  <div className="space-y-1.5 text-xs">
                    {churnAnalysis.impacts.map((imp, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[11px]">
                        <span className="text-zinc-600 dark:text-zinc-400">{imp.feature}</span>
                        <span className={`font-mono font-medium ${imp.positive ? "text-rose-600 dark:text-rose-400" : "text-emerald-600 dark:text-emerald-400"}`}>
                          {imp.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Tab 2: KPI Explorer */}
        {activeTab === "kpi" && (
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                  Executive KPI &amp; Cohort Visualizer
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Simulasi dashboard performa metrik bisnis dengan kemampuan filter multidimensi dan analisis per segmen.
                </p>
              </div>

              {/* Segment filter buttons */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400 font-mono">Segmen:</span>
                {[
                  { id: "all", label: "Semua Segmen" },
                  { id: "enterprise", label: "Enterprise B2B" },
                  { id: "smb", label: "Retail / SMB" },
                ].map((seg) => (
                  <button
                    key={seg.id}
                    onClick={() => setKpiSegment(seg.id as "all" | "enterprise" | "smb")}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      kpiSegment === seg.id
                        ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold"
                        : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {seg.label}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Metric Toggle Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: "revenue", label: "Monthly Gross Revenue", val: kpiData.revenue.total, delta: kpiData.revenue.change },
                { id: "conversion", label: "Checkout Conversion Rate", val: kpiData.conversion.total, delta: kpiData.conversion.change },
                { id: "cac", label: "Customer Acquisition Cost", val: kpiData.cac.total, delta: kpiData.cac.change },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setKpiMetric(m.id as "revenue" | "conversion" | "cac")}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    kpiMetric === m.id
                      ? "border-zinc-900 dark:border-zinc-200 bg-zinc-50 dark:bg-zinc-850/80 shadow-xs"
                      : "border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-50/50 dark:hover:bg-zinc-850/40"
                  }`}
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 block">{m.label}</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100">{m.val}</span>
                    <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">{m.delta}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* SVG Visualizer Chart */}
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{activeKpi.title}</h4>
                  <span className="text-xs text-zinc-500 font-mono">Periode 8 Bulan Terakhir (YTD)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Aktual Terverifikasi</span>
                </div>
              </div>

              {/* Bar & Trend Chart */}
              <div className="h-44 w-full flex items-end gap-3 sm:gap-6 pt-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
                {activeKpi.dataPoints.map((dp, i) => {
                  const maxVal = Math.max(...activeKpi.dataPoints.map(d => d.val));
                  const heightPct = Math.round((dp.val / maxVal) * 100);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                      <span className="text-[10px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        {activeKpi.unit}{dp.val}
                      </span>
                      <div
                        className="w-full max-w-[42px] bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-emerald-400 rounded-t-md transition-all duration-200"
                        style={{ height: `${heightPct}%` }}
                      />
                      <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400">
                        {dp.month}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-zinc-500">
                <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Automated Pipeline Refresh: Daily at 00:00 UTC via dbt + BigQuery</span>
                </span>
                <span className="font-mono text-zinc-400 text-[11px]">Query Cost: $0.00 (Cached Tier)</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: SQL Sandbox */}
        {activeTab === "sql" && (
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 md:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
              <div>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                  Interactive SQL Analytical Sandbox
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Pilih kueri analitik di bawah untuk mengecek syntax SQL tingkat lanjut, CTE, dan eksekusi hasil agregasi.
                </p>
              </div>

              {/* Preset Selector */}
              <div className="flex flex-wrap gap-2">
                {sqlPresets.map((preset, idx) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setSelectedSqlIndex(idx);
                      setShowSqlResults(true);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                      selectedSqlIndex === idx
                        ? "border-zinc-900 dark:border-zinc-100 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold"
                        : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {preset.name}
                  </button>
                ))}
              </div>
            </div>

            {/* SQL Editor Frame */}
            <div className="rounded-xl border border-zinc-300 dark:border-zinc-800 bg-zinc-950 text-zinc-100 overflow-hidden font-mono text-xs">
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
                <span className="text-[11px] text-zinc-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  analytical_query_{selectedSqlIndex + 1}.sql (PostgreSQL 16)
                </span>
                
                <button
                  onClick={handleExecuteSql}
                  disabled={isSqlRunning}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Play className="w-3 h-3 fill-white" />
                  <span>{isSqlRunning ? "Menjalankan..." : "Eksekusi Kueri"}</span>
                </button>
              </div>

              <div className="p-4 overflow-x-auto text-[11px] leading-relaxed text-zinc-300 bg-zinc-950 max-h-56">
                <pre>{sqlPresets[selectedSqlIndex].query}</pre>
              </div>

              {/* Execution Info bar */}
              <div className="px-4 py-2 bg-zinc-900/90 border-t border-zinc-800/80 flex flex-wrap justify-between text-[11px] text-zinc-400">
                <span>Status: <span className="text-emerald-400 font-semibold">200 OK</span></span>
                <span>Waktu Eksekusi: <span className="text-zinc-200">{sqlPresets[selectedSqlIndex].time}</span></span>
                <span>Data Dipindai: <span className="text-zinc-200">{sqlPresets[selectedSqlIndex].rowsScanned}</span></span>
              </div>
            </div>

            {/* Results Output Table */}
            {showSqlResults && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                    <span>Hasil Eksekusi Data:</span>
                  </span>
                  <span className="text-[11px] text-zinc-500 font-mono">Menampilkan sampel baris teratas</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-zinc-700">
                      <tr>
                        {selectedSqlIndex === 0 ? (
                          <>
                            <th className="py-2.5 px-4 font-semibold">Customer ID</th>
                            <th className="py-2.5 px-4 font-semibold">Segment</th>
                            <th className="py-2.5 px-4 font-semibold">Tenure</th>
                            <th className="py-2.5 px-4 font-semibold">Total CLV</th>
                            <th className="py-2.5 px-4 font-semibold">Churn Prob</th>
                            <th className="py-2.5 px-4 font-semibold">Retention Tier</th>
                          </>
                        ) : (
                          <>
                            <th className="py-2.5 px-4 font-semibold">Cohort Month</th>
                            <th className="py-2.5 px-4 font-semibold">Cohort Size</th>
                            <th className="py-2.5 px-4 font-semibold">Month 1 Ret.</th>
                            <th className="py-2.5 px-4 font-semibold">Month 3 Ret.</th>
                            <th className="py-2.5 px-4 font-semibold">Catatan Kampanye</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 bg-white dark:bg-zinc-900/50">
                      {selectedSqlIndex === 0
                        ? (sqlPresets[0].results as Array<{ customer_id: string; segment: string; tenure: string; clv: string; prob: string; tier: string }>).map((r, i) => (
                            <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                              <td className="py-2 px-4 text-zinc-900 dark:text-zinc-100 font-semibold">{r.customer_id}</td>
                              <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">{r.segment}</td>
                              <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">{r.tenure}</td>
                              <td className="py-2 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">{r.clv}</td>
                              <td className="py-2 px-4 text-rose-500 font-semibold">{r.prob}</td>
                              <td className="py-2 px-4">
                                <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-medium">
                                  {r.tier}
                                </span>
                              </td>
                            </tr>
                          ))
                        : (sqlPresets[1].results as Array<{ cohort: string; size: string; m1: string; m3: string; note: string }>).map((r, i) => (
                            <tr key={i} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                              <td className="py-2 px-4 text-zinc-900 dark:text-zinc-100 font-semibold">{r.cohort}</td>
                              <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">{r.size} users</td>
                              <td className="py-2 px-4 text-emerald-600 dark:text-emerald-400 font-semibold">{r.m1}</td>
                              <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">{r.m3}</td>
                              <td className="py-2 px-4 text-zinc-500 text-[11px]">{r.note}</td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                </div>

                {/* Analytical Insight Takeaway */}
                <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-850/50 text-xs">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100 mr-1">
                    💡 Kesimpulan Analis:
                  </span>
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {sqlPresets[selectedSqlIndex].insight}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

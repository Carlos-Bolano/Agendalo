"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, Calendar, Users, DollarSign, Clock } from "lucide-react";

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

  const metrics = [
    {
      title: "Ingresos totales",
      value: "$12,450",
      change: "+15%",
      changeType: "increase",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Total de citas",
      value: "248",
      change: "+8%",
      changeType: "increase",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Nuevos clientes",
      value: "42",
      change: "+23%",
      changeType: "increase",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tiempo promedio",
      value: "45 min",
      change: "-5%",
      changeType: "decrease",
      icon: Clock,
      color: "from-orange-500 to-red-500",
    },
  ];

  const chartData = [
    { name: "Ene", citas: 65, ingresos: 2400 },
    { name: "Feb", citas: 78, ingresos: 2800 },
    { name: "Mar", citas: 82, ingresos: 3200 },
    { name: "Abr", citas: 95, ingresos: 3800 },
    { name: "May", citas: 88, ingresos: 3400 },
    { name: "Jun", citas: 102, ingresos: 4200 },
  ];

  const topServices = [
    { name: "Corte y peinado", appointments: 85, revenue: "$4,250" },
    { name: "Manicure", appointments: 62, revenue: "$2,480" },
    { name: "Tinte", appointments: 38, revenue: "$3,040" },
    { name: "Barba y bigote", appointments: 45, revenue: "$1,350" },
    { name: "Pedicure", appointments: 28, revenue: "$1,120" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Reportes</h1>
          <p className="text-muted-foreground">Analiza el rendimiento de tu negocio</p>
        </div>
        {/* <div className="flex gap-2">
          {["week", "month", "quarter", "year"].map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedPeriod === period
                  ? "bg-purple-100 text-purple-700"
                  : "text-muted-foreground hover:bg-gray-100"
              }`}
            >
              {period === "week" && "Semana"}
              {period === "month" && "Mes"}
              {period === "quarter" && "Trimestre"}
              {period === "year" && "Año"}
            </button>
          ))}
        </div> */}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center`}
              >
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-sm font-medium ${
                  metric.changeType === "increase" ? "text-green-600" : "text-red-600"
                }`}
              >
                {metric.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-foreground  mb-1">{metric.value}</h3>
            <p className="text-sm text-muted-foreground">{metric.title}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Ingresos mensuales</h2>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className="w-full bg-gray-100 rounded-t-lg relative overflow-hidden">
                  <div
                    className="bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ height: `${(data.ingresos / 4200) * 200}px` }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground mt-2">{data.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Services */}
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Servicios más populares</h2>
            <BarChart3 className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-4">
            {topServices.map((service, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{service.name}</span>
                    <span className="text-sm text-muted-foreground">{service.appointments} citas</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${(service.appointments / 85) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <span className="ml-4 text-sm font-semibold text-foreground">{service.revenue}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6">Análisis detallado</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-background rounded-xl border-border border">
            <div className="text-2xl font-bold text-blue-600 mb-2">92%</div>
            <div className="text-sm text-muted-foreground">Tasa de ocupación</div>
          </div>
          <div className="text-center p-4 bg-background rounded-xl border-border border">
            <div className="text-2xl font-bold text-green-600 mb-2">4.8</div>
            <div className="text-sm text-muted-foreground">Calificación promedio</div>
          </div>
          <div className="text-center p-4 bg-background rounded-xl border-border border">
            <div className="text-2xl font-bold text-purple-600 mb-2">15%</div>
            <div className="text-sm text-muted-foreground">Crecimiento mensual</div>
          </div>
        </div>
      </div>
    </div>
  );
}

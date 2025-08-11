"use client";

import { Calendar, Users, Clock, TrendingUp, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const stats = [
    {
      name: "Citas de hoy",
      value: "12",
      change: "+2",
      changeType: "increase",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Citas pendientes",
      value: "8",
      change: "-1",
      changeType: "decrease",
      icon: Clock,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Clientes este mes",
      value: "156",
      change: "+23",
      changeType: "increase",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Ingresos del mes",
      value: "$4,250",
      change: "+12%",
      changeType: "increase",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const todayAppointments = [
    { time: "09:00", client: "María González", service: "Corte y peinado", status: "confirmed" },
    { time: "10:30", client: "Ana Rodríguez", service: "Manicure", status: "confirmed" },
    { time: "12:00", client: "Carlos López", service: "Corte de cabello", status: "pending" },
    { time: "14:00", client: "Laura Martín", service: "Tinte y corte", status: "confirmed" },
    { time: "16:30", client: "Pedro Sánchez", service: "Barba y bigote", status: "pending" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Bienvenido de vuelta, aquí tienes un resumen de tu negocio</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.changeType === "increase" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.changeType === "increase" ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowDown className="w-4 h-4" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Today's Appointments */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Citas de hoy</CardTitle>
          <CardDescription>Gestiona las citas programadas para hoy</CardDescription>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-4">
            {todayAppointments.map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-background rounded-xl hover:bg-accent transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-xl flex items-center justify-center text-white font-semibold">
                    {appointment.time}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{appointment.client}</p>
                    <p className="text-sm text-muted-foreground">{appointment.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={appointment.status === "confirmed" ? "default" : "secondary"}
                    className={
                      appointment.status === "confirmed"
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                    }
                  >
                    {appointment.status === "confirmed" ? "Confirmada" : "Pendiente"}
                  </Badge>
                  <Button
                    variant="link"
                    className="text-purple-600 hover:text-purple-700 p-0 h-auto font-medium text-sm"
                  >
                    Ver detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

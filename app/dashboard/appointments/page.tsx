"use client";

import { useState } from "react";
import { Calendar, Search, Filter, Plus, Clock, User, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function AppointmentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const appointments = [
    {
      id: 1,
      time: "09:00",
      date: "2024-01-15",
      client: "María González",
      phone: "+52 555 123 4567",
      service: "Corte y peinado",
      duration: "60 min",
      price: "$350",
      status: "confirmed",
    },
    {
      id: 2,
      time: "10:30",
      date: "2024-01-15",
      client: "Ana Rodríguez",
      phone: "+52 555 234 5678",
      service: "Manicure",
      duration: "45 min",
      price: "$200",
      status: "confirmed",
    },
    {
      id: 3,
      time: "12:00",
      date: "2024-01-15",
      client: "Carlos López",
      phone: "+52 555 345 6789",
      service: "Corte de cabello",
      duration: "30 min",
      price: "$150",
      status: "pending",
    },
    {
      id: 4,
      time: "14:00",
      date: "2024-01-15",
      client: "Laura Martín",
      phone: "+52 555 456 7890",
      service: "Tinte y corte",
      duration: "120 min",
      price: "$650",
      status: "confirmed",
    },
    {
      id: 5,
      time: "16:30",
      date: "2024-01-15",
      client: "Pedro Sánchez",
      phone: "+52 555 567 8901",
      service: "Barba y bigote",
      duration: "30 min",
      price: "$100",
      status: "cancelled",
    },
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "confirmed":
        return "default";
      case "pending":
        return "secondary";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmada";
      case "pending":
        return "Pendiente";
      case "cancelled":
        return "Cancelada";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Citas</h1>
          <p className="text-muted-foreground">Gestiona todas las citas de tu negocio</p>
        </div>
        <Button className="flex items-center gap-2 w-fit text-foreground">
          <Plus className="w-5 h-5" />
          Nueva cita
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por cliente o servicio..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filtros
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appointments List */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Lista de citas</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="p-6 hover:bg-accent transition-colors duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-xl flex flex-col items-center justify-center text-white">
                      <span className="text-xs font-medium">{appointment.time}</span>
                      <span className="text-xs opacity-80">{appointment.duration}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <h3 className="font-semibold text-foreground">{appointment.client}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{appointment.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{appointment.service}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{appointment.price}</p>
                      <Badge variant={getStatusVariant(appointment.status)} className="mt-1">
                        {getStatusText(appointment.status)}
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-purple-600 hover:bg-purple-50">
                        Editar
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50">
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

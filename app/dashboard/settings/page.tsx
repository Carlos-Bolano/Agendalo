"use client";

import { useState } from "react";
import { Building, Clock, User, Phone, Mail, MapPin, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function SettingsPage() {
  const [businessInfo, setBusinessInfo] = useState({
    name: "Mi Salón de Belleza",
    description: "El mejor salón de belleza de la ciudad",
    phone: "+52 555 123 4567",
    email: "contacto@misalon.com",
    address: "Av. Principal 123, Ciudad de México",
    website: "www.misalon.com",
  });

  const [workingHours, setWorkingHours] = useState({
    monday: { open: "09:00", close: "18:00", closed: false },
    tuesday: { open: "09:00", close: "18:00", closed: false },
    wednesday: { open: "09:00", close: "18:00", closed: false },
    thursday: { open: "09:00", close: "18:00", closed: false },
    friday: { open: "09:00", close: "18:00", closed: false },
    saturday: { open: "10:00", close: "16:00", closed: false },
    sunday: { open: "10:00", close: "14:00", closed: true },
  });

  const [services, setServices] = useState([
    { id: 1, name: "Corte de cabello", duration: 30, price: 150 },
    { id: 2, name: "Corte y peinado", duration: 60, price: 350 },
    { id: 3, name: "Tinte", duration: 120, price: 800 },
    { id: 4, name: "Manicure", duration: 45, price: 200 },
    { id: 5, name: "Pedicure", duration: 60, price: 250 },
  ]);

  const [newService, setNewService] = useState({ name: "", duration: "", price: "" });

  const dayNames = {
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
  };

  const handleBusinessInfoChange = (field: string, value: string) => {
    setBusinessInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleWorkingHoursChange = (day: string, field: string, value: string | boolean) => {
    setWorkingHours((prev) => ({
      ...prev,
      [day]: { ...prev[day as keyof typeof prev], [field]: value },
    }));
  };

  const addService = () => {
    if (newService.name && newService.duration && newService.price) {
      setServices((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: newService.name,
          duration: Number.parseInt(newService.duration),
          price: Number.parseInt(newService.price),
        },
      ]);
      setNewService({ name: "", duration: "", price: "" });
    }
  };

  const removeService = (id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Configuración</h1>
        <p className="text-muted-foreground">Personaliza la información de tu negocio</p>
      </div>

      {/* Business Information */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Building className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Información del negocio</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="business-name">Nombre del negocio</Label>
              <Input
                id="business-name"
                type="text"
                value={businessInfo.name}
                onChange={(e) => handleBusinessInfoChange("name", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="business-phone">Teléfono</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="business-phone"
                  type="tel"
                  value={businessInfo.phone}
                  onChange={(e) => handleBusinessInfoChange("phone", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="business-email"
                  type="email"
                  value={businessInfo.email}
                  onChange={(e) => handleBusinessInfoChange("email", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="business-website">Sitio web</Label>
              <Input
                id="business-website"
                type="url"
                value={businessInfo.website}
                onChange={(e) => handleBusinessInfoChange("website", e.target.value)}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="business-address">Dirección</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  id="business-address"
                  type="text"
                  value={businessInfo.address}
                  onChange={(e) => handleBusinessInfoChange("address", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="business-description">Descripción</Label>
              <Textarea
                id="business-description"
                value={businessInfo.description}
                onChange={(e) => handleBusinessInfoChange("description", e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Working Hours */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Horarios de atención</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(workingHours).map(([day, hours]) => (
              <div key={day} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-24 text-sm font-medium text-gray-700">
                  {dayNames[day as keyof typeof dayNames]}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${day}-open`}
                    checked={!hours.closed}
                    onCheckedChange={(checked) => handleWorkingHoursChange(day, "closed", !checked)}
                  />
                  <Label htmlFor={`${day}-open`} className="text-sm text-muted-foreground">
                    Abierto
                  </Label>
                </div>

                {!hours.closed && (
                  <div className="flex items-center gap-2">
                    <Input
                      type="time"
                      value={hours.open}
                      onChange={(e) => handleWorkingHoursChange(day, "open", e.target.value)}
                      className="w-auto"
                    />
                    <span className="text-gray-500">a</span>
                    <Input
                      type="time"
                      value={hours.close}
                      onChange={(e) => handleWorkingHoursChange(day, "close", e.target.value)}
                      className="w-auto"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-primary" />
            <CardTitle className="text-xl">Servicios</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add new service */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-xl">
            <Input
              type="text"
              placeholder="Nombre del servicio"
              value={newService.name}
              onChange={(e) => setNewService((prev) => ({ ...prev, name: e.target.value }))}
            />
            <Input
              type="number"
              placeholder="Duración (min)"
              value={newService.duration}
              onChange={(e) => setNewService((prev) => ({ ...prev, duration: e.target.value }))}
            />
            <Input
              type="number"
              placeholder="Precio ($)"
              value={newService.price}
              onChange={(e) => setNewService((prev) => ({ ...prev, price: e.target.value }))}
            />
            <Button onClick={addService} className="w-full">
              Agregar
            </Button>
          </div>

          {/* Services list */}
          <div className="space-y-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.duration} min • ${service.price}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeService(service.id)}
                  className="text-red-600 hover:bg-red-50"
                >
                  Eliminar
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 shadow-lg text-accent rounded-lg">
          <Save className="w-5 h-5" />
          Guardar cambios
        </Button>
      </div>
    </div>
  );
}

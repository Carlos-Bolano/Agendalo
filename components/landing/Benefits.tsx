import { Calendar, QrCode, Bell, BarChart3, Clock, Users, Smartphone, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Benefits() {
  const benefits = [
    {
      icon: Calendar,
      title: "Gestión de Citas",
      description:
        "Administra todas tus citas desde un panel intuitivo. Programa, modifica y cancela citas fácilmente.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: QrCode,
      title: "Código QR Personalizado",
      description:
        "Genera códigos QR únicos para que tus clientes reserven citas directamente desde sus móviles.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Bell,
      title: "Notificaciones Automáticas",
      description: "Envía recordatorios automáticos por WhatsApp, SMS o email para reducir las ausencias.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Reportes y Analytics",
      description: "Obtén insights detallados sobre tu negocio con reportes de citas, ingresos y tendencias.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description:
        "Configura horarios de trabajo personalizados, días festivos y disponibilidad por servicio.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Users,
      title: "Gestión de Clientes",
      description: "Mantén un registro completo de tus clientes con historial de citas y preferencias.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Smartphone,
      title: "Optimizado para Móvil",
      description:
        "Accede desde cualquier dispositivo. Interfaz responsive que se adapta a móviles y tablets.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Shield,
      title: "Seguro y Confiable",
      description: "Tus datos están protegidos con encriptación de nivel empresarial y backups automáticos.",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foregroundmb-6">Transforma tu negocio hoy</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Miles de negocios ya confían en Agéndalo para gestionar sus citas. Únete a ellos y descubre por
            qué es la mejor decisión que puedes tomar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 border border-border animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4 flex flex-col items-center">
                <div
                  className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}
                >
                  <benefit.icon className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

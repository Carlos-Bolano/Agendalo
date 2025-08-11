import { UserPlus, Settings, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Regístrate gratis",
      description: "Crea tu cuenta en menos de 2 minutos. Sin tarjeta de crédito, sin compromisos.",
    },
    {
      icon: Settings,
      title: "2. Configura tu negocio",
      description: "Define tus servicios, horarios y precios. Personaliza tu página de reservas.",
    },
    {
      icon: Calendar,
      title: "3. Recibe reservas",
      description: "Comparte tu enlace y código QR. Tus clientes agendan automáticamente.",
    },
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">¿Cómo funciona?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En solo 3 pasos simples, tu negocio estará recibiendo reservas automáticamente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center animate-slide-up hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground mb-4">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

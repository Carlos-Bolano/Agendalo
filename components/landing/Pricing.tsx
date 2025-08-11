import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "Gratis",
      period: "14 días",
      description: "Perfecto para empezar",
      features: ["Hasta 50 citas por mes", "1 servicio", "Página de reservas básica", "Soporte por email"],
      cta: "Empezar gratis",
      popular: false,
    },
    {
      name: "Profesional",
      price: "$29",
      period: "por mes",
      description: "Para negocios en crecimiento",
      features: [
        "Citas ilimitadas",
        "Servicios ilimitados",
        "Página personalizada",
        "Recordatorios automáticos",
        "Reportes avanzados",
        "Soporte prioritario",
      ],
      cta: "Probar 14 días gratis",
      popular: true,
    },
    {
      name: "Empresarial",
      price: "$79",
      period: "por mes",
      description: "Para múltiples ubicaciones",
      features: [
        "Todo lo del plan Profesional",
        "Múltiples ubicaciones",
        "API personalizada",
        "Integraciones avanzadas",
        "Soporte telefónico 24/7",
        "Gerente de cuenta dedicado",
      ],
      cta: "Contactar ventas",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Planes que se adaptan a ti</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comienza gratis y escala según crece tu negocio. Sin compromisos, cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "ring-2 ring-yellow-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1 border-0">
                    <Star className="w-4 h-4" />
                    Más popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-foreground mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">{plan.description}</CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  <Link href="/auth/register">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Calendar, Smartphone, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Hero() {
  return (
    <section className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* <div className="absolute -right-40 w-80 h-80 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute  -left-40 w-80 h-80 bg-purple-400/70 rounded-full blur-3xl"></div> */}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center text-foreground">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1]">
            <span className="block">Gestiona las citas</span>
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              de tu negocio
            </span>
            <span className="block">sin complicaciones</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-accent-foreground max-w-3xl mx-auto leading-relaxed">
            Aumenta tus ventas hasta un 40% con nuestra plataforma intuitiva. Tus clientes reservan online
            24/7 mientras tú te enfocas en hacer crecer tu negocio.
          </p>
        </div>

        <div className="animate-slide-up flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold px-8 py-6 text-lg"
          >
            <Link href="/auth/register">🚀 Probar gratis 14 días</Link>
          </Button>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
          <Card className="glass-effect border-border bg-card backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Calendar className="w-12 h-12 mx-auto text-yellow-300 mb-2" />
              <CardTitle className="text-lg text-foreground">Agenda Inteligente</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Organiza automáticamente tus citas y evita conflictos de horarios
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border bg-card backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <Smartphone className="w-12 h-12 mx-auto text-green-300 mb-2" />
              <CardTitle className="text-lg text-foreground">Reservas 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Tus clientes pueden agendar desde cualquier dispositivo, a cualquier hora
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border bg-card backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <TrendingUp className="w-12 h-12 mx-auto text-purple-300 mb-2" />
              <CardTitle className="text-lg text-foreground">Más Ingresos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                Reduce cancelaciones y aumenta la ocupación de tu agenda
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { QrCode, Download, Share, Copy, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function QRPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [bookingUrl] = useState("https://agendalo.com/book/mi-salon-belleza");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Simulate QR code generation
    // In a real app, you would use a QR code library like 'qrcode'
    setQrCodeUrl("/placeholder.svg?height=300&width=300&text=QR+Code");
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(bookingUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const downloadQR = () => {
    // In a real app, this would download the actual QR code
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "mi-salon-qr-code.png";
    link.click();
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Código QR</h1>
        <p className="text-muted-foreground">
          Comparte tu código QR para que los clientes puedan reservar fácilmente
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* QR Code Display */}
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Tu código QR</h2>
            <p className="text-muted-foreground">Escanea para reservar una cita</p>
          </div>

          <div className="bg-card rounded-2xl p-8 mb-6">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
              }
              alt="QR Code para reservas"
              className="w-64 h-64 mx-auto bg-white rounded-xl shadow-sm"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={downloadQR}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-foreground rounded-xl transition-all duration-300 font-semibold"
            >
              <Download className="w-5 h-5" />
              Descargar QR
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-foreground rounded-xl hover:bg-gray-50 transition-colors font-semibold">
              <Share className="w-5 h-5" />
              Compartir
            </button>
          </div>
        </div>

        {/* Instructions and URL */}
        <div className="space-y-6">
          <div className="bg-card  rounded-2xl p-6 shadow-sm border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Enlace de reservas</h3>
            <div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-xl">
              <Input
                type="text"
                value={bookingUrl}
                readOnly
                className="border-none w-full bg-transparent text-sm focus-visible:outline-none focus-visible:border-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 text-gray-800 "
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-100 text-primary rounded-lg hover:bg-yellow-200 transition-colors text-sm font-medium duration-300 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copiado" : "Copiar"}
              </button>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">¿Cómo usar tu código QR?</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Descarga e imprime</h4>
                  <p className="text-muted-foreground text-sm">
                    Descarga tu código QR y colócalo en tu negocio donde los clientes puedan verlo fácilmente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Los clientes escanean</h4>
                  <p className="text-muted-foreground text-sm">
                    Tus clientes pueden escanear el código con la cámara de su teléfono para acceder a tu
                    página de reservas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Reservan automáticamente</h4>
                  <p className="text-muted-foreground text-sm">
                    Los clientes pueden elegir el servicio, fecha y hora que prefieran sin necesidad de
                    llamar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 dark:from-yellow-500 to-orange-50 dark:to-orange-500 rounded-2xl p-6 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-2 text-shadow-accent">
              💡 Consejo profesional
            </h3>
            <p className="text-foreground text-sm text-shadow-accent">
              Coloca tu código QR en lugares estratégicos como la recepción, espejos, o junto a tu tarjeta de
              presentación. ¡Mientras más visible sea, más reservas recibirás!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

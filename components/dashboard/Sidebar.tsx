"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, BarChart3, Settings, QrCode, Home, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Citas", href: "/dashboard/appointments", icon: Calendar },
    { name: "Reportes", href: "/dashboard/reports", icon: BarChart3 },
    { name: "Código QR", href: "/dashboard/qr", icon: QrCode },
    { name: "Configuración", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-sidebar shadow-xl transform transition-transform duration-300 ease-in-out">
      <div className="h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex-1 flex flex-col p-4">
            <div className="flex items-center justify-center h-16">
              <h1 className="text-2xl font-bold">Agéndalo</h1>
            </div>
            <nav className="flex-1 mt-6">
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
}

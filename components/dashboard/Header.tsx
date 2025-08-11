"use client";

import { Menu, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "../toggle-theme";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-sidebar shadow-sm border-b border-border sticky top-0 z-30">
      <div className="flex items-center justify-end h-16 px-4 lg:px-8">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden p-2 h-auto w-auto"
          aria-label="Abrir menú"
        >
          <Menu className="w-6 h-6" />
        </Button>

        <div className="flex items-center gap-4">
          <ModeToggle />

          <Button variant="ghost" size="sm" className="p-2 h-auto w-auto relative">
            <Bell className="w-6 h-6" />
            <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500 border-0" />
          </Button>

          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Usuario" />
              <AvatarFallback className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <p className="text-sm font-medium">Juan Pérez</p>
              <p className="text-xs">Mi Salón de Belleza</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

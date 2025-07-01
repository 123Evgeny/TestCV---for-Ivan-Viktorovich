import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  LogIn,
  Settings,
  User,
  Import,
  Upload,
  ShoppingCart,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Navbar: React.FC = () => {
  const { toast } = useToast();

  const handleMenuClick = (label: string) => {
    toast({
      title: label,
      description: "Пока в разработке",
    });
  };

  return (
    <nav className="w-full bg-gradient-to-r from-sky-200 to-blue-700 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="Логотип"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold text-white tracking-wide select-none drop-shadow">
            Визуальный редактор резюме
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 shadow"
            onClick={() =>
              toast({ title: "Скоро будет доступно - по просьбе Заказчика!" })
            }
          >
            Заказать резюме
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                <Avatar>
                  <AvatarImage src="/default-avatar.png" alt="Аватар" />
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem
                onClick={() => handleMenuClick("Войти")}
                className="gap-2"
              >
                <LogIn size={18} /> Войти
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleMenuClick("Настройки")}
                className="gap-2"
              >
                <Settings size={18} /> Настройки
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleMenuClick("Профиль")}
                className="gap-2"
              >
                <User size={18} /> Профиль
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleMenuClick("Импорт")}
                className="gap-2"
              >
                <Import size={18} /> Импорт
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleMenuClick("Экспорт")}
                className="gap-2"
              >
                <Upload size={18} /> Экспорт
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  toast({
                    title: "Скоро будет доступно - по просьбе Заказчика!",
                  })
                }
                className="gap-2 md:hidden"
              >
                <ShoppingCart size={18} className="text-green-600" /> Заказать
                резюме
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

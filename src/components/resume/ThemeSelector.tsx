import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResumeTheme } from "@/types/resume";
import { Palette } from "lucide-react";

interface ThemeSelectorProps {
  theme: ResumeTheme;
  onThemeChange: (theme: ResumeTheme) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  theme,
  onThemeChange,
}) => {
  const colorOptions = [
    { name: "Синий", color: "#3B82F6" },
    { name: "Зеленый", color: "#10B981" },
    { name: "Фиолетовый", color: "#8B5CF6" },
    { name: "Красный", color: "#EF4444" },
    { name: "Оранжевый", color: "#F59E0B" },
    { name: "Серый", color: "#6B7280" },
  ];

  const fontOptions = [
    { name: "Inter", value: "Inter" },
    { name: "Roboto Mono", value: "Roboto Mono" },
    { name: "Pacifico", value: "Pacifico" },
    { name: "Oswald", value: "Oswald" },
    { name: "Comic Sans MS", value: "Comic Sans MS" },
    { name: "Lobster", value: "Lobster" },
  ];

  // Палитра популярных цветов
  const palette = [
    "#3B82F6",
    "#10B981",
    "#8B5CF6",
    "#EF4444",
    "#F59E0B",
    "#6B7280",
    "#000000",
    "#FFFFFF",
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Тема оформления</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 mb-4 sm:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <Palette className="w-5 h-5 text-gray-500" />
              <label
                htmlFor="theme-color"
                className="text-sm font-medium cursor-pointer hover:underline focus:underline"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    const input = document.getElementById("theme-color");
                    if (input) (input as HTMLInputElement).focus();
                  }
                }}
                onClick={() => {
                  const input = document.getElementById("theme-color");
                  if (input) (input as HTMLInputElement).focus();
                }}
              >
                Основной цвет
              </label>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="relative group">
                <input
                  id="theme-color"
                  type="color"
                  value={theme.primaryColor}
                  onChange={(e) =>
                    onThemeChange({ ...theme, primaryColor: e.target.value })
                  }
                  className="w-10 h-10 p-0 border-none bg-transparent cursor-pointer rounded-lg shadow transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-blue-400"
                  aria-label="Выбрать цвет"
                  title="Выбрать цвет"
                />
                <span className="absolute left-1/2 -bottom-7 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap">
                  Выбрать свой цвет
                </span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {palette.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      theme.primaryColor === color
                        ? "ring-2 ring-blue-500 border-blue-500"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() =>
                      onThemeChange({ ...theme, primaryColor: color })
                    }
                    aria-label={`Выбрать цвет ${color}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">Шрифт</label>
            <div className="flex gap-2 flex-wrap">
              {fontOptions.map((font) => (
                <Button
                  key={font.value}
                  size="sm"
                  variant={
                    theme.fontFamily === font.value ? "default" : "outline"
                  }
                  onClick={() =>
                    onThemeChange({ ...theme, fontFamily: font.value })
                  }
                >
                  {font.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeSelector;

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResumeTheme } from "@/types/resume";
import { Palette } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={() => {
                      const input = document.getElementById("theme-color");
                      if (input) (input as HTMLInputElement).click();
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: theme.primaryColor,
                      border: "none",
                      borderRadius: "0.75rem",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                    }}
                    aria-label="Выбрать цвет"
                  >
                    <Palette color="#fff" size={24} />
                  </button>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center">
                  Выбрать свой цвет
                </TooltipContent>
              </Tooltip>
              <input
                id="theme-color"
                type="color"
                value={theme.primaryColor}
                onChange={(e) =>
                  onThemeChange({ ...theme, primaryColor: e.target.value })
                }
                style={{ display: "none" }}
              />
              <div className="flex gap-2 flex-wrap">
                {palette.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className={`w-6 h-6 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
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
            <div className="grid grid-cols-2 gap-1">
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
                  className="h-5 px-1 text-xs w-full min-w-0"
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

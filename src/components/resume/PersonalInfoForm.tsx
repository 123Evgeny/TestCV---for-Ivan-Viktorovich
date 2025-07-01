import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResumeData } from "@/types/resume";

interface PersonalInfoFormProps {
  personalInfo: ResumeData["personalInfo"];
  onUpdate: (info: Partial<ResumeData["personalInfo"]>) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  onUpdate,
}) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg">Личная информация</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              value={personalInfo.name}
              onChange={(e) => onUpdate({ name: e.target.value })}
              placeholder="Ваше имя"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="surname">Фамилия</Label>
            <Input
              id="surname"
              value={personalInfo.surname}
              onChange={(e) => onUpdate({ surname: e.target.value })}
              placeholder="Ваша фамилия"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={personalInfo.email}
              onChange={(e) => onUpdate({ email: e.target.value })}
              placeholder="your.email@example.com"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              value={personalInfo.phone}
              onChange={(e) => onUpdate({ phone: e.target.value })}
              placeholder="+7 (999) 123-45-67"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex-1">
            <Label htmlFor="location">Местоположение</Label>
            <Input
              id="location"
              value={personalInfo.location}
              onChange={(e) => onUpdate({ location: e.target.value })}
              placeholder="Город, Страна"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;

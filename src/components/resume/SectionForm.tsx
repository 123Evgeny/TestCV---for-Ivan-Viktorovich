import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ResumeSection } from "@/types/resume";
import { Trash, Plus, Sparkles } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SectionFormProps {
  section: ResumeSection;
  onUpdate: (id: string, updates: Partial<ResumeSection>) => void;
  onDelete: (id: string) => void;
  onAiSuggest: (sectionType: string) => void;
}

const SectionForm: React.FC<SectionFormProps> = ({
  section,
  onUpdate,
  onDelete,
  onAiSuggest,
}) => {
  const [skillInput, setSkillInput] = useState("");

  const handleSkillAdd = () => {
    if (skillInput.trim() && section.type === "skills") {
      const currentSkills = (section as any).skills || [];
      onUpdate(section.id, { skills: [...currentSkills, skillInput.trim()] });
      setSkillInput("");
    }
  };

  const handleSkillRemove = (index: number) => {
    if (section.type === "skills") {
      const currentSkills = (section as any).skills || [];
      onUpdate(section.id, {
        skills: currentSkills.filter((_: string, i: number) => i !== index),
      });
    }
  };

  const renderFormFields = () => {
    switch (section.type) {
      case "experience":
        const expSection = section as any;
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor={`position-${section.id}`}>Должность</Label>
              <Input
                id={`position-${section.id}`}
                value={expSection.position || ""}
                onChange={(e) =>
                  onUpdate(section.id, { position: e.target.value })
                }
                placeholder="Frontend Developer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`company-${section.id}`}>Компания</Label>
              <Input
                id={`company-${section.id}`}
                value={expSection.company || ""}
                onChange={(e) =>
                  onUpdate(section.id, { company: e.target.value })
                }
                placeholder="ООО 'Технологии'"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`period-${section.id}`}>Период</Label>
              <Input
                id={`period-${section.id}`}
                value={expSection.period || ""}
                onChange={(e) =>
                  onUpdate(section.id, { period: e.target.value })
                }
                placeholder="2020 - настоящее время"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${section.id}`}>Описание</Label>
              <Textarea
                id={`description-${section.id}`}
                value={expSection.description || ""}
                onChange={(e) =>
                  onUpdate(section.id, { description: e.target.value })
                }
                placeholder="Описание ваших достижений и обязанностей..."
                rows={3}
              />
            </div>
          </>
        );

      case "education":
        const eduSection = section as any;
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor={`institution-${section.id}`}>
                Учебное заведение
              </Label>
              <Input
                id={`institution-${section.id}`}
                value={eduSection.institution || ""}
                onChange={(e) =>
                  onUpdate(section.id, { institution: e.target.value })
                }
                placeholder="МГУ им. М.В. Ломоносова"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`degree-${section.id}`}>Специальность</Label>
              <Input
                id={`degree-${section.id}`}
                value={eduSection.degree || ""}
                onChange={(e) =>
                  onUpdate(section.id, { degree: e.target.value })
                }
                placeholder="Информатика и вычислительная техника"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`period-${section.id}`}>Период</Label>
              <Input
                id={`period-${section.id}`}
                value={eduSection.period || ""}
                onChange={(e) =>
                  onUpdate(section.id, { period: e.target.value })
                }
                placeholder="2016 - 2020"
              />
            </div>
          </>
        );

      case "skills":
        const skillsSection = section as any;
        return (
          <>
            <div className="space-y-2">
              <Label>Навыки</Label>
              <div className="flex gap-2">
                <Input
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="Добавить навык"
                  onKeyPress={(e) => e.key === "Enter" && handleSkillAdd()}
                />
                <Button onClick={handleSkillAdd} size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {(skillsSection.skills || []).map(
                  (skill: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer"
                    >
                      {skill}
                      <button
                        onClick={() => handleSkillRemove(index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        ×
                      </button>
                    </Badge>
                  )
                )}
              </div>
            </div>
          </>
        );

      case "certificates":
        const certSection = section as any;
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor={`name-${section.id}`}>Название сертификата</Label>
              <Input
                id={`name-${section.id}`}
                value={certSection.name || ""}
                onChange={(e) => onUpdate(section.id, { name: e.target.value })}
                placeholder="AWS Certified Developer"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`issuer-${section.id}`}>Организация</Label>
              <Input
                id={`issuer-${section.id}`}
                value={certSection.issuer || ""}
                onChange={(e) =>
                  onUpdate(section.id, { issuer: e.target.value })
                }
                placeholder="Amazon Web Services"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`date-${section.id}`}>Дата получения</Label>
              <Input
                id={`date-${section.id}`}
                value={certSection.date || ""}
                onChange={(e) => onUpdate(section.id, { date: e.target.value })}
                placeholder="2023"
              />
            </div>
          </>
        );

      case "about":
        const aboutSection = section as any;
        return (
          <div className="space-y-2">
            <Label htmlFor={`content-${section.id}`}>О себе</Label>
            <Textarea
              id={`content-${section.id}`}
              value={aboutSection.content || ""}
              onChange={(e) =>
                onUpdate(section.id, { content: e.target.value })
              }
              placeholder="Расскажите о себе, ваших целях и мотивации..."
              rows={4}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const getSectionTitle = () => {
    switch (section.type) {
      case "experience":
        return "Опыт работы";
      case "education":
        return "Образование";
      case "skills":
        return "Навыки";
      case "certificates":
        return "Сертификаты";
      case "about":
        return "О себе";
      default:
        return "Секция";
    }
  };

  return (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{getSectionTitle()}</CardTitle>
          <div className="flex gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAiSuggest(section.type)}
                  className="flex items-center gap-1"
                >
                  <Sparkles className="h-4 w-4" />
                  AI
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="center">
                помощь ИИ
              </TooltipContent>
            </Tooltip>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(section.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">{renderFormFields()}</CardContent>
    </Card>
  );
};

export default SectionForm;

import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useResumeData } from "@/hooks/useResumeData";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import PersonalInfoForm from "@/components/resume/PersonalInfoForm";
import AddSectionButton from "@/components/resume/AddSectionButton";
import DraggableSectionItem from "@/components/resume/DraggableSectionItem";
import ResumePreview from "@/components/resume/ResumePreview";
import ThemeSelector from "@/components/resume/ThemeSelector";
import { getAiSuggestion } from "@/utils/aiSuggestions";
import { useToast } from "@/hooks/use-toast";
import { Download, Sparkles } from "lucide-react";
import html2pdf from "html2pdf.js";

const Index = () => {
  const {
    resumeData,
    theme,
    updatePersonalInfo,
    addSection,
    updateSection,
    deleteSection,
    reorderSections,
    setTheme,
  } = useResumeData();

  const { toast } = useToast();

  const {
    draggedItem,
    dragOverItem,
    handleDragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  } = useDragAndDrop(resumeData.sections, reorderSections);

  const handleAiSuggest = (sectionType: string) => {
    const suggestion = getAiSuggestion(sectionType);
    const section = resumeData.sections.find((s) => s.type === sectionType);

    if (section) {
      updateSection(section.id, suggestion as Partial<typeof section>);
      toast({
        title: "AI-подсказка применена",
        description: "Секция заполнена примерными данными",
      });
    }
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById("resume-preview");
    if (element) {
      html2pdf().from(element).save("resume.pdf");
    } else {
      toast({
        title: "Ошибка",
        description: "Не удалось найти превью резюме для сохранения",
      });
    }
  };

  const sortedSections = [...resumeData.sections].sort(
    (a, b) => a.order - b.order
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto p-4">
        <div className="mb-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Визуальный редактор резюме
          </h1>
          <p className="text-gray-600">
            Создайте профессиональное резюме с живым превью
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b bg-gray-50 rounded-t-lg">
              <h2 className="text-xl font-semibold text-gray-900">Редактор</h2>
            </div>
            <ScrollArea className="h-[calc(100%-60px)]">
              <div className="p-4 space-y-4">
                <PersonalInfoForm
                  personalInfo={resumeData.personalInfo}
                  onUpdate={updatePersonalInfo}
                />

                <ThemeSelector theme={theme} onThemeChange={setTheme} />

                <AddSectionButton onAddSection={addSection} />

                <div className="space-y-4">
                  {sortedSections.map((section) => (
                    <DraggableSectionItem
                      key={section.id}
                      section={section}
                      onUpdate={updateSection}
                      onDelete={deleteSection}
                      onAiSuggest={handleAiSuggest}
                      isDragging={draggedItem === section.id}
                      isDragOver={dragOverItem === section.id}
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onDragEnd={handleDragEnd}
                    />
                  ))}
                </div>

                <Button
                  onClick={handleDownloadPDF}
                  className="w-full mt-6"
                  size="lg"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Скачать как PDF
                </Button>
              </div>
            </ScrollArea>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4 border-b bg-gray-50 rounded-t-lg flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Превью</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Sparkles className="h-4 w-4" />
                Живое обновление
              </div>
            </div>
            <div className="h-[calc(100%-60px)] p-4">
              <div id="resume-preview">
                <ResumePreview data={resumeData} theme={theme} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

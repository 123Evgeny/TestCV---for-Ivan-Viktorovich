
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus } from 'lucide-react';
import { ResumeSection } from '@/types/resume';

interface AddSectionButtonProps {
  onAddSection: (section: ResumeSection) => void;
}

const AddSectionButton: React.FC<AddSectionButtonProps> = ({ onAddSection }) => {
  const sectionTypes = [
    { type: 'experience', label: 'Опыт работы' },
    { type: 'education', label: 'Образование' },
    { type: 'skills', label: 'Навыки' },
    { type: 'certificates', label: 'Сертификаты' },
    { type: 'about', label: 'О себе' },
  ];

  const handleAddSection = (type: string) => {
    const id = `${type}-${Date.now()}`;
    const baseSection = {
      id,
      type: type as any,
      order: Date.now(),
    };

    let newSection: ResumeSection;

    switch (type) {
      case 'experience':
        newSection = {
          ...baseSection,
          type: 'experience',
          position: '',
          company: '',
          period: '',
          description: '',
        };
        break;
      case 'education':
        newSection = {
          ...baseSection,
          type: 'education',
          institution: '',
          degree: '',
          period: '',
        };
        break;
      case 'skills':
        newSection = {
          ...baseSection,
          type: 'skills',
          skills: [],
        };
        break;
      case 'certificates':
        newSection = {
          ...baseSection,
          type: 'certificates',
          name: '',
          issuer: '',
          date: '',
        };
        break;
      case 'about':
        newSection = {
          ...baseSection,
          type: 'about',
          content: '',
        };
        break;
      default:
        return;
    }

    onAddSection(newSection);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full mb-4" variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Добавить секцию
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white">
        {sectionTypes.map((section) => (
          <DropdownMenuItem
            key={section.type}
            onClick={() => handleAddSection(section.type)}
            className="cursor-pointer"
          >
            {section.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddSectionButton;

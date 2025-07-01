
import React from 'react';
import { ResumeSection } from '@/types/resume';
import SectionForm from './SectionForm';

interface DraggableSectionItemProps {
  section: ResumeSection;
  onUpdate: (id: string, updates: Partial<ResumeSection>) => void;
  onDelete: (id: string) => void;
  onAiSuggest: (sectionType: string) => void;
  isDragging: boolean;
  isDragOver: boolean;
  onDragStart: (e: React.DragEvent, sectionId: string) => void;
  onDragOver: (e: React.DragEvent, sectionId: string) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent, sectionId: string) => void;
  onDragEnd: () => void;
}

const DraggableSectionItem: React.FC<DraggableSectionItemProps> = ({
  section,
  onUpdate,
  onDelete,
  onAiSuggest,
  isDragging,
  isDragOver,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd
}) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, section.id)}
      onDragOver={(e) => onDragOver(e, section.id)}
      onDragLeave={onDragLeave}
      onDrop={(e) => onDrop(e, section.id)}
      onDragEnd={onDragEnd}
      className={`transition-all duration-200 cursor-move ${
        isDragging ? 'opacity-50 scale-95' : ''
      } ${
        isDragOver ? 'transform scale-105 ring-2 ring-blue-400' : ''
      }`}
    >
      <SectionForm
        section={section}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onAiSuggest={onAiSuggest}
      />
    </div>
  );
};

export default DraggableSectionItem;

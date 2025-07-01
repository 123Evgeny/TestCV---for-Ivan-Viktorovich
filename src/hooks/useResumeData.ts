import { useState, useEffect } from "react";
import { ResumeData, ResumeSection, ResumeTheme } from "@/types/resume";

const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "",
    surname: "",
    email: "",
    phone: "",
    location: "",
  },
  sections: [],
};

const defaultTheme: ResumeTheme = {
  primaryColor: "#3B82F6",
  fontFamily: "Inter",
};

export const useResumeData = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [theme, setTheme] = useState<ResumeTheme>(defaultTheme);

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData");
    const savedTheme = localStorage.getItem("resumeTheme");

    if (savedData) {
      try {
        setResumeData(JSON.parse(savedData));
      } catch (error) {
        console.error("Error loading resume data:", error);
      }
    }

    if (savedTheme) {
      try {
        setTheme(JSON.parse(savedTheme));
      } catch (error) {
        console.error("Error loading theme:", error);
      }
    }
  }, []);

  // Автосохранение в localStorage
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
  }, [resumeData]);

  useEffect(() => {
    localStorage.setItem("resumeTheme", JSON.stringify(theme));
  }, [theme]);

  const updatePersonalInfo = (info: Partial<ResumeData["personalInfo"]>) => {
    setResumeData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const addSection = (section: ResumeSection) => {
    setResumeData((prev) => ({
      ...prev,
      sections: [...prev.sections, section],
    }));
  };

  const updateSection = (id: string, updates: Partial<ResumeSection>) => {
    setResumeData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, ...updates } : section
      ),
    }));
  };

  const deleteSection = (id: string) => {
    setResumeData((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== id),
    }));
  };

  const reorderSections = (sections: ResumeSection[]) => {
    setResumeData((prev) => ({
      ...prev,
      sections: sections.map((section, index) => ({
        ...section,
        order: index,
      })),
    }));
  };

  const resetResume = () => {
    setResumeData(defaultResumeData);
    setTheme(defaultTheme);
    localStorage.removeItem("resumeData");
    localStorage.removeItem("resumeTheme");
  };

  return {
    resumeData,
    theme,
    updatePersonalInfo,
    addSection,
    updateSection,
    deleteSection,
    reorderSections,
    setTheme,
    resetResume,
  };
};

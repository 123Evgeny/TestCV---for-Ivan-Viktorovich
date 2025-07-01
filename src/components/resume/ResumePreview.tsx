import React from "react";
import { ResumeData, ResumeTheme, ResumeSection } from "@/types/resume";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Settings, Award, User } from "lucide-react";

interface ResumePreviewProps {
  data: ResumeData;
  theme: ResumeTheme;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, theme }) => {
  const sortedSections = [...data.sections].sort((a, b) => a.order - b.order);

  const renderSection = (section: ResumeSection) => {
    switch (section.type) {
      case "experience":
        return (
          <div key={section.id} className="mb-6">
            <h3
              className="text-lg font-semibold mb-3 border-b-2 pb-1 flex items-center gap-2"
              style={{
                borderColor: theme.primaryColor,
                color: theme.primaryColor,
              }}
            >
              <Briefcase size={20} style={{ marginRight: 4 }} />
              ОПЫТ РАБОТЫ
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-gray-900">
                    {section.position}
                  </h4>
                  <span className="text-sm text-gray-600">
                    {section.period}
                  </span>
                </div>
                <p className="text-gray-700 font-medium mb-2">
                  {section.company}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div key={section.id} className="mb-6">
            <h3
              className="text-lg font-semibold mb-3 border-b-2 pb-1 flex items-center gap-2"
              style={{
                borderColor: theme.primaryColor,
                color: theme.primaryColor,
              }}
            >
              <GraduationCap size={20} style={{ marginRight: 4 }} />
              ОБРАЗОВАНИЕ
            </h3>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-semibold text-gray-900">
                  {section.degree}
                </h4>
                <span className="text-sm text-gray-600">{section.period}</span>
              </div>
              <p className="text-gray-700">{section.institution}</p>
            </div>
          </div>
        );

      case "skills":
        return (
          <div key={section.id} className="mb-6">
            <h3
              className="text-lg font-semibold mb-3 border-b-2 pb-1 flex items-center gap-2"
              style={{
                borderColor: theme.primaryColor,
                color: theme.primaryColor,
              }}
            >
              <Settings size={20} style={{ marginRight: 4 }} />
              НАВЫКИ
            </h3>
            <div
              style={{
                backgroundColor: theme.primaryColor,
                color: "white",
                borderRadius: 16,
                padding: "12px 20px",
                textAlign: "center",
                fontSize: "1rem",
                fontWeight: 500,
                margin: "0 auto",
                maxWidth: 600,
                opacity: 0.5,
              }}
            >
              {section.skills?.join(", ")}
            </div>
          </div>
        );

      case "certificates":
        return (
          <div key={section.id} className="mb-6">
            <h3
              className="text-lg font-semibold mb-3 border-b-2 pb-1 flex items-center gap-2"
              style={{
                borderColor: theme.primaryColor,
                color: theme.primaryColor,
              }}
            >
              <Award size={20} style={{ marginRight: 4 }} />
              СЕРТИФИКАТЫ
            </h3>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-semibold text-gray-900">{section.name}</h4>
                <span className="text-sm text-gray-600">{section.date}</span>
              </div>
              <p className="text-gray-700">{section.issuer}</p>
            </div>
          </div>
        );

      case "about":
        return (
          <div key={section.id} className="mb-6">
            <h3
              className="text-lg font-semibold mb-3 border-b-2 pb-1 flex items-center gap-2"
              style={{
                borderColor: theme.primaryColor,
                color: theme.primaryColor,
              }}
            >
              <User size={20} style={{ marginRight: 4 }} />О СЕБЕ
            </h3>
            <p className="text-gray-600 leading-relaxed">{section.content}</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full h-full bg-white shadow-2xl">
      {/* Google Fonts dynamic link */}
      {theme.fontFamily &&
        [
          "Inter",
          "Roboto Mono",
          "Pacifico",
          "Oswald",
          "Comic Sans MS",
          "Lobster",
        ].includes(theme.fontFamily) && (
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css?family=${encodeURIComponent(
              theme.fontFamily
            )}:400,700&display=swap`}
          />
        )}
      <div
        className="p-8 h-full overflow-auto relative"
        style={{ fontFamily: theme.fontFamily }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: 24,
            left: 24,
            zIndex: 10,
          }}
        >
          <img
            src="/Logo.png"
            alt="Логотип"
            style={{
              height: 48,
              width: 48,
              objectFit: "contain",
              marginRight: 12,
            }}
          />
          <span
            style={{
              color: "rgba(0, 0, 0, 0.8)",
              fontWeight: 600,
              fontSize: 18,
              letterSpacing: 1,
            }}
          >
            Резюме
          </span>
        </div>
        <div
          className="text-center mb-8 pb-6 border-b-4"
          style={{ borderColor: theme.primaryColor, marginTop: 48 }}
        >
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: theme.primaryColor }}
          >
            {data.personalInfo.name} {data.personalInfo.surname}
          </h1>
          <div className="flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
            <span>{data.personalInfo.email}</span>
            <span>•</span>
            <span>{data.personalInfo.phone}</span>
            <span>•</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>
        <div className="space-y-6">{sortedSections.map(renderSection)}</div>
        {sortedSections.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-lg">
              Добавьте секции, чтобы увидеть превью резюме
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ResumePreview;

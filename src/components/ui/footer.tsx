import React from "react";
import { Linkedin, Send } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full fixed bottom-0 left-0 bg-white border-t border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="/Logo.png"
            alt="Логотип"
            className="h-8 w-8 object-contain"
          />
          <span className="text-lg font-semibold text-gray-700 select-none">
            CV Editor
          </span>
        </div>
        <div className="flex items-center gap-6">
          {/* HH.ru (svg) */}
          <a
            href="https://hh.ru/"
            target="_blank"
            rel="noopener noreferrer"
            title="Отправить в HH.ru"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#D6001C" />
              <text x="8" y="22" fontSize="14" fill="white" fontWeight="bold">
                hh
              </text>
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Отправить в LinkedIn"
          >
            <Linkedin size={28} className="text-blue-700" />
          </a>
          {/* Telegram */}
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            title="Отправить в Telegram"
          >
            <Send size={28} className="text-sky-500" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

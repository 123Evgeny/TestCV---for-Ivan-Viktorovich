
const aiSuggestions = {
  experience: {
    position: 'Senior Frontend Developer',
    company: 'ООО "Инновационные технологии"',
    period: '2021 - настоящее время',
    description: 'Разработка и поддержка веб-приложений на React.js и TypeScript. Оптимизация производительности, повышение скорости загрузки на 40%. Менторинг junior-разработчиков и проведение code review. Участие в архитектурных решениях и выборе технологического стека.'
  },
  education: {
    institution: 'Московский государственный технический университет им. Н.Э. Баумана',
    degree: 'Бакалавр информатики и вычислительной техники',
    period: '2017 - 2021'
  },
  skills: {
    skills: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML/CSS', 'Git', 'SQL', 'MongoDB']
  },
  certificates: {
    name: 'React Developer Certification',
    issuer: 'Meta (Facebook)',
    date: '2023'
  },
  about: {
    content: 'Опытный frontend-разработчик с 3+ годами опыта создания современных веб-приложений. Специализируюсь на React экосистеме и имею опыт работы с крупными проектами. Стремлюсь к написанию чистого, масштабируемого кода и постоянно изучаю новые технологии. Коммуникабелен, люблю работать в команде и делиться знаниями с коллегами.'
  }
};

export const getAiSuggestion = (sectionType: string) => {
  return aiSuggestions[sectionType as keyof typeof aiSuggestions] || {};
};

export interface SkillCategory {
  name: string;
  primary: string[];
  secondary: string[];
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  highlights: string[];
  link?: string;
  github?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export const portfolioData = {
  name: 'Lucas Salvini Bertol',
  title: 'Desenvolvedor Fullstack',
  location: 'Santa Maria - RS',
  email: 'lucassalvinibertol@gmail.com',
  website: 'https://lucasbertol.dev.br',
  linkedin: 'https://www.linkedin.com/in/lucas-bertol-85410934a',
  github: 'https://github.com/lucassbertol',
  bio: `Busco atuar nas áreas de desenvolvimento de software, testes de software ou análise de dados. Possuo experiência prática em desenvolvimento com Python, PHP e Javascript, com raciocínio lógico e atenção a detalhes aplicados na especificação e validação das funcionalidades que construí, além de vivência em ambiente de pesquisa e extensão universitária. Busco uma oportunidade para aplicar e expandir meus conhecimentos técnicos, integrar times ágeis e evoluir profissionalmente.`,

  skills: [
    {
      name: 'Linguagens',
      primary: ['Python', 'JavaScript'],
      secondary: ['TypeScript', 'PHP'],
    },
    {
      name: 'Front-end',
      primary: ['React', 'HTML', 'CSS'],
      secondary: ['Tailwind CSS'],
    },
    {
      name: 'Back-end',
      primary: ['Django', 'Node.js'],
      secondary: [],
    },
    {
      name: 'Banco de Dados',
      primary: ['SQL', 'MySQL'],
      secondary: ['PostgreSQL', 'SQLite'],
    },
    {
      name: 'Testes & Qualidade',
      primary: ['Pytest', 'Testes Unitários'],
      secondary: ['Testes de Integração', 'TDD'],
    },
    {
      name: 'DevOps & Ferramentas',
      primary: ['Git', 'Docker', 'Linux'],
      secondary: ['GitHub Actions'],
    },
    {
      name: 'Cloud & IA',
      primary: ['Agentic AI', 'LLMs'],
      secondary: ['Cloud Fundamentals', 'Arquitetura Cloud'],
    },
    {
      name: 'Dados & Análise',
      primary: ['Pandas'],
      secondary: ['Power BI', 'Excel', 'Análise de Dados'],
    },
  ] as SkillCategory[],

  education: {
    degree: 'Sistemas de Informação',
    institution: 'UFSM - Universidade Federal de Santa Maria',
    period: 'Previsão de término: jul/2028',
    details: 'Graduação em andamento com foco em desenvolvimento de software, engenharia de software e ciência de dados.',
  },

  experience: [
    {
      role: 'Bolsista',
      company: 'NCC - Núcleo de Ciência da Computação',
      location: 'UFSM - Santa Maria, RS',
      period: '08/2025 - Atual',
      description: [
        'Desenvolvimento e manutenção de sistema para gerenciamento remoto e simultâneo de aproximadamente 80 computadores distribuídos em 3 laboratórios e 1 sala de estudos do CT-UFSM.',
        'Projeto apresentado na JAI 2026 (Jornada Acadêmica de Inovação).',
        'Implementação de arquitetura cliente-servidor para comandos remotos, monitoramento de status e deploy de atualizações.',
      ],
      technologies: ['Python', 'Socket Programming', 'Threading', 'SQLite', 'Tkinter/CustomTkinter'],
    },
  ] as Experience[],

  projects: [
    {
      name: 'NetCommander',
      period: '08/2025',
      description: 'Sistema de gerenciamento remoto de laboratórios de informática para o NCC-UFSM.',
      longDescription: 'Aplicação desktop em Python para controle simultâneo de ~80 computadores em 3 laboratórios e 1 sala de estudos. Permite execução de comandos remotos, monitoramento de status em tempo real, distribuição de arquivos e atualizações de software.',
      technologies: ['Python', 'Django', 'Pytest', 'SQL', 'HTML', 'CSS', 'React'],
      highlights: [
        'Arquitetura cliente-servidor com comunicação via sockets TCP',
        'Gerenciamento concorrente de 80+ conexões simultâneas',
        'Interface gráfica intuitiva para administradores',
        'Testes automatizados cobrindo funcionalidades críticas',
        'Projeto apresentado na JAI 2026',
      ],
      github: 'https://github.com/lucassbertol/netcommander',
    },
    {
      name: 'uniMarket',
      period: '06/2026',
      description: 'Marketplace universitário completo construído do zero.',
      longDescription: 'Plataforma web fullstack para compra e venda de itens entre estudantes. Inclui sistema de autenticação, modelagem relacional de banco de dados, publicação e gestão de anúncios, busca e filtros, e suíte de testes automatizados.',
      technologies: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Autenticação segura com hash de senhas e sessões',
        'Modelagem relacional normalizada (3FN)',
        'CRUD completo de anúncios com upload de imagens',
        'Testes automatizados cobrindo 100% das funcionalidades',
        'Containerização com Docker para deploy',
      ],
      github: 'https://github.com/lucassbertol/unimarket',
    },
  ] as Project[],

  certifications: [
    {
      name: 'Agentes Autônomos (Agentic AI)',
      issuer: 'FIAP',
      date: '09/2026',
    },
    {
      name: 'Cloud Fundamentals, Administration and Solution Architect',
      issuer: 'FIAP',
      date: '08/2026',
    },
  ],

  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/lucassbertol',
      icon: 'github',
      ariaLabel: 'Perfil no GitHub',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucas-bertol-85410934a',
      icon: 'linkedin',
      ariaLabel: 'Perfil no LinkedIn',
    },
    {
      name: 'Email',
      url: 'mailto:lucassalvinibertol@gmail.com',
      icon: 'email',
      ariaLabel: 'Enviar email',
    },
    {
      name: 'Currículo',
      url: '/Lucas_Bertol_Curriculo.pdf',
      icon: 'resume',
      ariaLabel: 'Baixar currículo em PDF',
    },
  ] as SocialLink[],
};

export type { SkillCategory, Experience, Project, SocialLink };
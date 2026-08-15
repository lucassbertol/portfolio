export const site = {
  name: 'Lucas Bertol',
  tagline: 'Construindo software para resolver problemas reais.',
  degree: 'Sistemas de Informação',
  universityFull: 'Sistemas de Informação — UFSM',
  location: 'Santa Maria, RS',
  semester: '5º semestre',
  graduation: '2028/1',
  email: 'pro.lucas.bertol@gmail.com',
  github: 'https://github.com/lucassbertol',
  linkedin: 'https://www.linkedin.com/in/lucas-bertol-85410934a/',
  unimkt: 'https://unimkt.shop',
  netcommander: 'https://github.com/ehodiogo/NetCommander',
};

export const nav = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
];

export const techGroups = [
  { label: 'Linguagens', items: ['Python', 'PHP', 'JavaScript', 'C', 'Java', 'Haskell'] },
  { label: 'Web', items: ['HTML', 'CSS', 'Django', 'Node.js'] },
  { label: 'Banco', items: ['MySQL', 'SQL'] },
  { label: 'Infraestrutura', items: ['Linux', 'Ubuntu Server', 'Proxmox'] },
  { label: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Metodologias', items: ['Scrum', 'Kanban'] },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  badge?: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'netcommander',
    index: '01',
    title: 'NetCommander',
    tagline: 'Controle remoto de laboratórios a partir de uma única máquina.',
    description:
      'Sistema desenvolvido para o NCC que controla de forma remota e simultânea os computadores dos laboratórios do CT-UFSM. Apresentado na JAI 2026.',
    tech: ['Python', 'Automação', 'Redes', 'Controle remoto', 'Linux'],
    badge: 'Apresentado na JAI 2026',
    links: [{ label: 'Ver código', href: 'https://github.com/ehodiogo/NetCommander' }],
  },
  {
    id: 'unimkt',
    index: '02',
    title: 'UniMKT',
    tagline: 'Um marketplace pensado para o ambiente universitário.',
    description:
      'Marketplace universitário autoral desenvolvido em PHP e MySQL, com autenticação de usuários e anúncios.',
    tech: ['PHP', 'MySQL', 'Desenvolvimento web', 'Autenticação', 'Anúncios'],
    links: [{ label: 'Visitar projeto', href: 'https://unimkt.shop' }],
  },
  {
    id: 'interscore',
    index: '03',
    title: 'interScore',
    tagline: 'Dados de partidas e elenco do Sport Club Internacional.',
    description:
      'Aplicação web para consultar informações do Internacional: resultados, próximos jogos e elenco. Backend em Haskell com o framework Scotty, consumindo dados da API Football-Data.org.',
    tech: ['Haskell', 'Scotty', 'JavaScript', 'HTML', 'API', 'Dados de futebol'],
    links: [{ label: 'Ver código', href: 'https://github.com/lucassbertol/interScore' }],
  },
  {
    id: 'watchlog',
    index: '04',
    title: 'watchLOG',
    tagline: 'Backlog pessoal para acompanhar e avaliar séries.',
    description:
      'Aplicação web para gerenciar séries: backlog do que assistir, avaliação das concluídas e recomendações personalizadas. Backend em Python com Django e frontend em React.',
    tech: ['Python', 'Django', 'React', 'JavaScript', 'Vite', 'HTML', 'CSS'],
    links: [{ label: 'Ver código', href: 'https://github.com/lucassbertol/watchLOG' }],
  },
];

export const site = {
  name: 'Lucas Bertol',
  degree: 'Sistemas de Informação',
  universityFull: 'Sistemas de Informação — UFSM',
  location: 'Santa Maria, RS',
  semester: '5º semestre',
  graduation: '2028/1',
  email: 'pro.lucas.bertol@gmail.com',
  whatsapp: 'https://wa.me/5555999077935',
  github: 'https://github.com/lucassbertol',
  linkedin: 'https://www.linkedin.com/in/lucas-bertol-85410934a/',
};

export type TechGroupId =
  | 'base'
  | 'languages'
  | 'web'
  | 'db'
  | 'infra'
  | 'tools'
  | 'methods';

export type TechGroup = {
  id: TechGroupId;
  featured?: boolean;
  items: string[];
};

export const techGroups: TechGroup[] = [
  {
    id: 'base',
    featured: true,
    items: ['Python', 'PHP', 'Django', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Docker'],
  },
  { id: 'languages', items: ['Python', 'PHP', 'JavaScript', 'C', 'Java', 'Haskell'] },
  { id: 'web', items: ['HTML', 'CSS', 'Django', 'Node.js'] },
  { id: 'db', items: ['MySQL', 'SQL'] },
  { id: 'infra', items: ['Linux', 'Ubuntu Server', 'Proxmox'] },
  { id: 'tools', items: ['Git', 'GitHub', 'VS Code'] },
  { id: 'methods', items: ['Scrum', 'Kanban'] },
];

export type ProjectId = 'netcommander' | 'unimkt';

export type Project = {
  id: ProjectId;
  index: string;
  title: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    id: 'netcommander',
    index: '01',
    title: 'NetCommander',
    tech: ['Python', 'Automação', 'Redes', 'Controle remoto', 'Linux'],
    link: 'https://github.com/ehodiogo/NetCommander',
  },
  {
    id: 'unimkt',
    index: '02',
    title: 'UniMKT',
    tech: ['PHP', 'MySQL', 'Desenvolvimento web', 'Autenticação'],
    link: 'https://unimkt.shop',
  },
];

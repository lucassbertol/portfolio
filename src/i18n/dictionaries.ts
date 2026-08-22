import type { ProjectId, TechGroupId } from '../config/site';

export type Lang = 'pt' | 'en';

const pt = {
  nav: {
    logoAria: 'Lucas Bertol — início',
    ariaLabel: 'Navegação principal',
    langGroupAria: 'Idioma',
    items: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Habilidades', href: '#habilidades' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  hero: {
    kicker: 'desenvolvedor fullstack',
    eyebrow: 'Sistemas de Informação · UFSM',
    tagline: 'Construindo software para resolver problemas reais.',
    text: 'Desenvolvo soluções para gerar retorno: automações de processos e build sob medida para empresas que querem progredir.',
    sectionAria: 'Sobre',
  },
  skills: {
    kicker: '/atuacao',
    title: 'Áreas de atuação.',
    groups: {
      base: 'Stack Base',
      languages: 'Linguagens',
      web: 'Web',
      db: 'Banco',
      infra: 'Infraestrutura',
      tools: 'Ferramentas',
      methods: 'Metodologias',
    } as Record<TechGroupId, string>,
  },
  projects: {
    kicker: '/projetos',
    title: 'Alguns projetos.',
    items: {
      netcommander: {
        tagline: '80 computadores sob controle a partir de uma única máquina.',
        description:
          'Sistema do NCC que liga e gerencia remotamente os ~80 computadores de 3 laboratórios e 1 sala de estudos do CT-UFSM. Tarefa que tomava ~15 minutos por laboratório no manual agora sai com 1 clique.',
        badge: 'Apresentado na JAI 2026',
        cta: 'Ver código',
      },
      unimkt: {
        tagline: 'Um marketplace pensado para o ambiente universitário.',
        description:
          'Marketplace universitário construído do zero em PHP e MySQL: modelagem do banco, sistema de autenticação de usuários, publicação e gestão de anúncios. No ar em unimkt.shop.',
        cta: 'Visitar projeto',
      },
    } as Record<ProjectId, { tagline: string; description: string; badge?: string; cta: string }>,
  },
  contact: {
    kicker: '/contato',
    titleA: 'Vamos construir',
    titleB: 'algo juntos',
    text: 'Tem um projeto em mente, uma vaga ou só quer trocar ideia? Meu inbox está sempre aberto.',
  },
  footer: {
    copy: 'copiar',
    copied: 'copiado!',
  },
};

const en: typeof pt = {
  nav: {
    logoAria: 'Lucas Bertol — home',
    ariaLabel: 'Main navigation',
    langGroupAria: 'Language',
    items: [
      { label: 'About', href: '#sobre' },
      { label: 'Skills', href: '#habilidades' },
      { label: 'Projects', href: '#projetos' },
      { label: 'Contact', href: '#contato' },
    ],
  },
  hero: {
    kicker: 'fullstack developer',
    eyebrow: 'Information Systems · UFSM',
    tagline: 'Building software to solve real problems.',
    text: "I build solutions that generate results: process automation and custom-built systems for companies that want to move forward.",
    sectionAria: 'About',
  },
  skills: {
    kicker: '/expertise',
    title: 'Areas of expertise.',
    groups: {
      base: 'Core Stack',
      languages: 'Languages',
      web: 'Web',
      db: 'Databases',
      infra: 'Infrastructure',
      tools: 'Tools',
      methods: 'Methodologies',
    } as Record<TechGroupId, string>,
  },
  projects: {
    kicker: '/projects',
    title: 'Selected work.',
    items: {
      netcommander: {
        tagline: '80 computers under control from a single machine.',
        description:
          'NCC system that remotely powers on and manages ~80 computers across 3 labs and 1 study room at CT-UFSM. A task that took ~15 minutes per lab by hand is now done with a single click.',
        badge: 'Presented at JAI 2026',
        cta: 'View code',
      },
      unimkt: {
        tagline: 'A marketplace designed for university life.',
        description:
          'University marketplace built from scratch with PHP and MySQL: database modeling, user authentication, and ad publishing and management. Live at unimkt.shop.',
        cta: 'Visit project',
      },
    } as Record<ProjectId, { tagline: string; description: string; badge?: string; cta: string }>,
  },
  contact: {
    kicker: '/contact',
    titleA: "Let's build",
    titleB: 'something together',
    text: 'Have a project in mind, a job opening, or just want to chat? My inbox is always open.',
  },
  footer: {
    copy: 'copy',
    copied: 'copied!',
  },
};

export const dictionaries: Record<Lang, typeof pt> = { pt, en };

export type Dictionary = typeof pt;

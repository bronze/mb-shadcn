"use client";

import * as React from "react";
import {BookOpen, Infinity, LifeBuoy, Send, Settings2, Calendar, HardDrive, Mail, Book, Notebook, Users, School, NotebookPen} from "lucide-react";

import {NavMain} from "@/components/nav-main";
import {NavProjects} from "@/components/nav-projects";
import {NavSecondary} from "@/components/nav-secondary";
import {NavUser} from "@/components/nav-user";
// import {ModeToggle} from "@/components/ModeToggle";
import {TeamSwitcher} from "@/components/team-switcher";
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Lucas Hanusch",
    email: "chefao@bernoulli.com.br",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Colégio F.Rossi",
      logo: Infinity,
      plan: "Sistema Bernoulli",
    },
    {
      name: "Colégio C.Bronze",
      logo: Infinity,
      plan: "Startup",
    },
    {
      name: "Colégio A.Fornazari",
      logo: Infinity,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Estudo",
      url: "#",
      icon: Book,
      isActive: true,
      items: [
        {
          title: "Componentes Curriculares",
          url: "#",
        },
        {
          title: "Aulas Online",
          url: "#",
        },
        {
          title: "E-Books",
          url: "#",
        },
        {
          title: "Redação",
          url: "#",
        },
        {
          title: "Listegning & Speaking",
          url: "#",
        },
      ],
    },
    {
      title: "Tarefas",
      url: "#",
      icon: Notebook,
      items: [
        {
          title: "Resoluções",
          url: "#",
        },
        {
          title: "Tarefas",
          url: "#",
        },
        {
          title: "Arividades Avaliativas",
          url: "#",
        },
      ],
    },
    {
      title: "Avaliações",
      url: "#",
      icon: NotebookPen,
      items: [
        {
          title: "Simulados ENEM",
          url: "#",
        },
        {
          title: "Avaliação Processual",
          url: "#",
        },
        {
          title: "Avaliação Periódica",
          url: "#",
        },
      ],
    },
    {
      title: "Notas",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Etapas",
          url: "#",
        },
        {
          title: "Notas",
          url: "#",
        },
        {
          title: "Registros",
          url: "#",
        },
      ],
    },
    {
      title: "Família",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Go Home",
          url: "#",
        },
        {
          title: "Área Financeira",
          url: "#",
        },
      ],
    },
    {
      title: "Professor",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Banco de Questões",
          url: "#",
        },
        {
          title: "Presença",
          url: "#",
        },
        {
          title: "Turmas",
          url: "#",
        },
      ],
    },
    {
      title: "Gestor",
      url: "#",
      icon: School,
      items: [
        {
          title: "Feed",
          url: "#",
        },
        {
          title: "Loja Bernoulli",
          url: "#",
        },
        {
          title: "Data Analytics",
          url: "#",
        },
        {
          title: "Conteúdo Lecionado",
          url: "#",
        },
        {
          title: "Configurações",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Agenda",
      url: "#",
      icon: Calendar,
    },
    {
      name: "B.Drive",
      url: "#",
      icon: HardDrive,
    },
    {
      name: "Comunicação",
      url: "#",
      icon: Mail,
    },
  ],
  navSecondary: [
    {
      title: "Suporte",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Atendimento",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
        {/* <ModeToggle /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

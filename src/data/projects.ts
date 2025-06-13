import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "pricecatcher",
    tag: "WIP",
    title: "Grocery Prices Tracker",
    description:
      "An app to browse and track latest grocery prices.",
    longDescription:
      "An app to browse and track latest grocery prices, built on data from OpenDOSM.",
    technologies: ["React", "Vite", "Typescript", "Cloudflare Pages", "DuckDB"],
    imageUrl: "/pricecatcher.png",
    liveUrl: "https://price-catch-fe.pages.dev/",
    githubUrl: "https://github.com/dataryder/price_catch_FE",
  },
  {
    slug: "pdf",
    title: "PDF Text and Markdown Extractor",
    description:
      "Developed an API interface to extract plain text and markdown text from pdf URLs.",
    longDescription:
      "Developed an API interface to extract plain text and markdown text from pdf URLs using the PyMuPDF library. Made for SiaranGovMy.",
    technologies: ["Python", "PyMuPDF", "FastAPI", "Next.js"],
    imageUrl: "/pdf.png",
    liveUrl: "https://pdf.iwa.my/",
    githubUrl: "https://github.com/JustinTzeJi/pdf-text-extractor",
  },
  {
    slug: "hurai",
    title: "Hurai",
    description: "A minimal image alt-text generator",
    longDescription:
      "A minimal image alt-text generator, utilizing the BLIP model by Salesforce and translated using Mesolitica public API.",
    technologies: [
      "Python",
      "HuggingFace",
      "Mesolitica Translation",
      "FastAPI",
      "Next.js",
    ],
    imageUrl: "/hurai.png",
    liveUrl: "https://hurai.iwa.my",
    githubUrl: "https://github.com/JustinTzeJi/hurai",
  },
  {
    slug: "jen",
    tag: "Dev build",
    title: "MYDS Gen",
    description:
      "Generative UI component generator using the Malaysian Design System component library",
    technologies: ["Python", "Gemini AI SDK", "React", "Typescript", "FastAPI", "LangChain", "LangGraph"],
    imageUrl: "/jen.png",
    liveUrl: "https://myds-gen.vercel.app/",
    githubUrl: "https://github.com/govtechmy/myds-gen",
  },
  {
    slug: "pakw",
    title: "PAKW",
    description:
      "A clearer and more transparent version of MyPAKW (https://mypakw.dosm.gov.my/)",
    technologies: ["Python", "Marimo", "Pandas"],
    imageUrl: "/pakw.png",
    liveUrl: "https://marimo.io/p/@justin/mypakw?mode=read&show-code=false",
    githubUrl: "https://github.com/JustinTzeJi/PAKW",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

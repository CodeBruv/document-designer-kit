export type Entry = { title: string; subtitle?: string; meta?: string; detail?: string };
export type Section = { id: string; name: string; entries: Entry[] };

export const dossier = {
  name: "Abdulmajid A. Hussain",
  headline: "Product & Technology · Jos, Nigeria",
  email: "majid.hussain@example.com",
  phone: "+234 802 114 9930",
  location: "Jos, Plateau State",
};

export const sections: Section[] = [
  {
    id: "personal",
    name: "Personal Information",
    entries: [
      {
        title: "Abdulmajid A. Hussain",
        subtitle: "Product & Technology",
        meta: "Jos, Nigeria",
        detail: "majid.hussain@example.com · +234 802 114 9930",
      },
    ],
  },
  {
    id: "education",
    name: "Education",
    entries: [
      {
        title: "B.Sc. Computer Science",
        subtitle: "University of Jos",
        meta: "2020–2024",
        detail: "Second Class Upper · Final project on document automation",
      },
      {
        title: "Senior Secondary Certificate",
        subtitle: "Government College Jos",
        meta: "2013–2019",
      },
    ],
  },
  {
    id: "experience",
    name: "Work Experience",
    entries: [
      {
        title: "Product / Technology Experience",
        subtitle: "DossierBox",
        meta: "2022–Present",
        detail: "Led product discovery and shipped the document builder used by 3,000+ users.",
      },
      {
        title: "Software Engineering Intern",
        subtitle: "Zenith Digital Labs",
        meta: "2021–2022",
        detail: "Built internal reporting tools and improved onboarding flows.",
      },
    ],
  },
  {
    id: "certifications",
    name: "Certifications",
    entries: [
      { title: "IBM", subtitle: "Professional Certificate", meta: "2023", detail: "Data Analysis & Cloud Fundamentals" },
      { title: "UNICEF", subtitle: "Professional Development Certificate", meta: "2022", detail: "Youth Programme Design" },
      { title: "Google", subtitle: "UX Design Certificate", meta: "2021" },
    ],
  },
  {
    id: "skills",
    name: "Skills",
    entries: [
      { title: "Product Discovery", meta: "Advanced" },
      { title: "React & TypeScript", meta: "Advanced" },
      { title: "UX Research", meta: "Intermediate" },
      { title: "Data Analysis", meta: "Intermediate" },
    ],
  },
  {
    id: "projects",
    name: "Projects",
    entries: [
      { title: "DossierBox Document Builder", subtitle: "Product lead", meta: "2023", detail: "Reusable career data turned into tailored documents." },
      { title: "Campus Result Portal", subtitle: "Engineer", meta: "2022" },
    ],
  },
  {
    id: "languages",
    name: "Languages",
    entries: [
      { title: "English", meta: "Fluent" },
      { title: "Hausa", meta: "Native" },
      { title: "French", meta: "Basic" },
    ],
  },
  {
    id: "achievements",
    name: "Achievements",
    entries: [
      { title: "Best Final Year Project", subtitle: "University of Jos", meta: "2024" },
      { title: "Hackathon Winner", subtitle: "Plateau Tech Week", meta: "2023" },
    ],
  },
];

export const documentTypes = [
  { id: "cv", name: "CV / Resume", desc: "A full career summary" },
  { id: "cover", name: "Cover Letter", desc: "A tailored letter for one role" },
  { id: "profile", name: "Professional Profile", desc: "A short bio-style profile" },
  { id: "academic", name: "Academic CV", desc: "Research, teaching, publications" },
  { id: "portfolio", name: "Portfolio / Career Document", desc: "Project-led presentation" },
];

export const purposes = [
  { id: "job", name: "Job application" },
  { id: "general", name: "General professional use" },
  { id: "role", name: "Specific role" },
  { id: "academic", name: "Academic application" },
  { id: "internship", name: "Internship" },
];

export type Template = {
  id: string;
  name: string;
  vibe: string;
  accent: string;
  font: string;
  layout: "classic" | "sidebar" | "banner" | "centered";
  rule: boolean;
  caps: boolean;
};

export const templates: Template[] = [
  { id: "modern", name: "Modern", vibe: "Clean lines, colour accent", accent: "oklch(0.55 0.16 250)", font: "ui-sans-serif, system-ui", layout: "banner", rule: false, caps: false },
  { id: "executive", name: "Executive", vibe: "Serif, senior roles", accent: "oklch(0.35 0.05 250)", font: "Georgia, serif", layout: "centered", rule: true, caps: true },
  { id: "minimal", name: "Minimal", vibe: "Type only, no colour", accent: "oklch(0.45 0.01 260)", font: "ui-sans-serif, system-ui", layout: "classic", rule: false, caps: false },
  { id: "professional", name: "Professional", vibe: "Balanced default", accent: "oklch(0.5 0.11 230)", font: "ui-sans-serif, system-ui", layout: "classic", rule: true, caps: true },
  { id: "elegant", name: "Elegant", vibe: "Light serif, airy", accent: "oklch(0.5 0.07 30)", font: "Georgia, serif", layout: "centered", rule: false, caps: false },
  { id: "creative", name: "Creative", vibe: "Sidebar, bold colour", accent: "oklch(0.6 0.18 20)", font: "ui-sans-serif, system-ui", layout: "sidebar", rule: false, caps: false },
  { id: "academic", name: "Academic", vibe: "Dense, publication ready", accent: "oklch(0.4 0.06 150)", font: "Georgia, serif", layout: "classic", rule: true, caps: false },
  { id: "corporate", name: "Corporate", vibe: "Structured, formal", accent: "oklch(0.42 0.09 260)", font: "ui-sans-serif, system-ui", layout: "sidebar", rule: true, caps: true },
  { id: "clean", name: "Clean", vibe: "Generous whitespace", accent: "oklch(0.55 0.09 190)", font: "ui-sans-serif, system-ui", layout: "banner", rule: false, caps: false },
  { id: "bold", name: "Bold", vibe: "Strong header block", accent: "oklch(0.45 0.17 300)", font: "ui-sans-serif, system-ui", layout: "banner", rule: true, caps: true },
];

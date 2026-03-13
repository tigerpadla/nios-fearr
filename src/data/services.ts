export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Technology Consultancy & Advisory",
    subtitle: "Strategic Insights",
    description:
      "We provide strategic technology insights for organisations navigating digital change, ensuring your IT investments deliver measurable business value.",
    services: [
      {
        title: "Digital Transformation",
        description:
          "Guide your organisation through digital change with a clear roadmap, from legacy modernisation to new digital capabilities.",
        icon: "transform",
      },
      {
        title: "System Integration",
        description:
          "Seamlessly connect disparate systems and platforms, ensuring data flows efficiently across your technology estate.",
        icon: "integration",
      },
      {
        title: "Data & Analytics",
        description:
          "Turn raw data into actionable insights with robust analytics strategies, governance frameworks, and reporting solutions.",
        icon: "analytics",
      },
      {
        title: "Cloud Strategy",
        description:
          "Develop and execute cloud adoption strategies that balance performance, security, and cost optimisation.",
        icon: "cloud",
      },
      {
        title: "Cybersecurity Governance",
        description:
          "Establish comprehensive security governance frameworks to protect your organisation from evolving threats.",
        icon: "security",
      },
      {
        title: "Intelligent Automation",
        description:
          "Identify and implement automation opportunities that reduce manual effort and increase operational efficiency.",
        icon: "automation",
      },
    ],
  },
  {
    title: "Developmental Mentoring",
    subtitle: "Career Growth",
    description:
      "Our mentoring programmes empower IT professionals to navigate the evolving technology landscape and accelerate their career development.",
    services: [
      {
        title: "Career Guidance",
        description:
          "Personalised guidance for IT professionals seeking to advance their careers, navigate transitions, and achieve their professional goals.",
        icon: "guidance",
      },
      {
        title: "Skills Development",
        description:
          "Tailored development programmes that build the technical and leadership capabilities your team needs to thrive.",
        icon: "skills",
      },
      {
        title: "Hybrid Work Enablement",
        description:
          "Support your teams in adapting to the hybrid work era with strategies for productivity, collaboration, and work-life balance.",
        icon: "hybrid",
      },
    ],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with an in-depth consultation to understand your business objectives, current technology landscape, and the challenges you face. This foundational step ensures every recommendation is aligned with your goals.",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "Our team conducts a thorough assessment of your existing systems, processes, and capabilities. We identify gaps, risks, and opportunities that will inform a tailored strategy.",
  },
  {
    number: "03",
    title: "Strategy",
    description:
      "Based on our findings, we develop a clear, actionable strategy with defined milestones and deliverables. We ensure the approach is pragmatic, achievable, and delivers measurable business value.",
  },
  {
    number: "04",
    title: "Implementation",
    description:
      "We work alongside your teams to execute the strategy, providing hands-on support and expertise throughout the implementation phase. Our consultants integrate seamlessly with your organisation.",
  },
  {
    number: "05",
    title: "Review & Optimise",
    description:
      "Post-implementation, we review outcomes against the original objectives, identify areas for further optimisation, and ensure the solution continues to deliver value as your business evolves.",
  },
];

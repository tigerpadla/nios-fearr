export interface Testimonial {
  quote: string;
  role: string;
  company: string;
  location: string;
  services: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The quality of the work was superb — these self-driven consultants are very easy to work with and are up to speed on a project within hours.",
    role: "Project Manager",
    company: "Global Business Consulting Firm",
    location: "Dublin, Ireland",
    services: "Test Management and Test Lead Consulting",
  },
  {
    quote:
      "Their top quality work means they are 100% our go-to consultants for all things IT related.",
    role: "CEO",
    company: "Landscaping Architecture & Design Company",
    location: "New York, USA",
    services: "Project Management, Web Development, and Business Analysis",
  },
  {
    quote:
      "Proven Project and Test Management consultants who we now would hire without hesitation.",
    role: "Programme Manager",
    company: "Global Biotechnology Company",
    location: "Basel, Switzerland",
    services: "Project and Test Management Consulting",
  },
  {
    quote:
      "Enthusiasm, friendliness, professionalism and quality of work — they always focus on what the customer wants.",
    role: "Manager",
    company: "Automotive Diagnostics Company",
    location: "Mayo, Ireland",
    services: "Web Development and Digital Marketing",
  },
  {
    quote:
      "We were more than delighted with the end result — we couldn't recommend this team of consultants highly enough.",
    role: "CEO",
    company: "Construction Company",
    location: "Clare, Ireland",
    services: "Web Development",
  },
];

export const coreTeam = [
  { name: "Rudraksh Goyal", role: "Lead, MSA BITJ", image: "/images/people/rudraksh-goyal-new.jpeg", linkedin: "https://www.linkedin.com/in/rudraksh-goyal-10b52b282?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Shreya Mishra", role: "Co-Lead, MSA BITJ", image: "/images/people/shreya-mishra.jpeg", linkedin: "https://www.linkedin.com/in/shreya-mishra-ba6bb8366?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Deep Kabra", role: "General Secretary", image: "/images/people/deep-kabra-new.jpeg", linkedin: "" },
];

export const pocTeam = [
  { name: "Aditya Agarwal", role: "POC - Media & Photography", image: "/images/people/aditya-agarwal.jpg", linkedin: "https://www.linkedin.com/in/aditya-agarwal-738463285" },
  { name: "Trisha Bansiwala", role: "POC - Operations & Management", image: "/images/people/trisha-bansiwala.jpeg", linkedin: "https://www.linkedin.com/in/trisha-bansiwala-4059973a1/" },
  { name: "Shrita Kumari", role: "POC - Graphics & Creative", image: "/images/people/shrita-kumari.jpg", linkedin: "https://www.linkedin.com/in/shrita-kumari-55b032385" },
  { name: "Samarth Khandelwal", role: "POC - Operations & Management", image: "/images/people/samarth-khandelwal.jpg", linkedin: "https://www.linkedin.com/in/samarth-khandelwal-618838351" },
  { name: "Harshit Sharma", role: "POC - Technical & Development", image: "/images/people/harshit-sharma.jpg", linkedin: "https://www.linkedin.com/in/harshit-sharma-44a8b0381/" },
  { name: "Divyansha Mukhija", role: "POC - Event & Logistics", image: "/images/people/divyansha-mukhija.jpg", linkedin: "https://www.linkedin.com/in/divyansha-mukhija-4381b1311" },
  { name: "Tanya Saxena", role: "POC - Sponsorship", image: "/images/people/tanya-saxena.jpg", linkedin: "https://in.linkedin.com/in/tanya-saxena-250998271" },
  { name: "Epshita Nankani", role: "POC - Social & Engagement", image: "/images/people/epshita-nankani.jpg", linkedin: "https://www.linkedin.com/in/epshita-nankani-68222635a" },
  { name: "Rajat Mittal", role: "POC - Technicals", image: "/images/people/rajat-mittal.jpg", linkedin: "" },
];

export const ogTeam = [
  { name: "Priyanshu Raj", role: "The OGs", image: "/images/people/priyanshu-raj.jpg", linkedin: "" },
  { name: "Yatharth", role: "The OGs", image: "/images/people/yk.jpeg", linkedin: "" },
];

export const headsTeam = [
  { name: "Aditya Raj Singh", role: "Operation & Management", image: "/images/people/aditya-raj-singh.jpeg", linkedin: "https://www.linkedin.com/in/aditya-raj-singh-b12788387?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Aditi Sharma", role: "Marketing", image: "/images/people/aditi.jpg", linkedin: "https://www.linkedin.com/in/aditi-s-3a7956324?utm_source=share_via&utm_content=profile&utm_medium=member_ios" },
  { name: "Mitul", role: "Sponsorship", image: "/images/people/mitul.jpeg", linkedin: "" },
  { name: "Naman", role: "Joint Secretary", image: "/images/people/naman.jpeg", linkedin: "" },
  { name: "Abhinav", role: "Technicals", image: "/images/people/abhinav.jpeg", linkedin: "" },
  { name: "Adamya", role: "Community Outreach", image: "/images/people/adamya.jpg", linkedin: "" },
  { name: "Vrashali", role: "Event & Logistics", image: "/images/people/vrashali.jpeg", linkedin: "", objectPosition: "center 30%" },
  { name: "Divya", role: "Socials", image: "/images/people/divya.jpg", linkedin: "" },
];
export const publicEvent = { name: "SparkFactory Ideathon 2025", type: "Innovation & pitching event", description: "A one-day space for students to identify real-world problems, shape bold solutions, and pitch them.", venue: "BIT Jaipur" };
export const projects = [
  { 
    name: "MSA BITJ Website", 
    category: "Web Development", 
    description: "A highly-dynamic and immersive platform built for the MSA BIT Jaipur community. I absolutely love how we've blended sleek, dark-mode aesthetics with smooth, interactive animations (like the infinite scrolling marquees). It makes the digital experience feel as energetic, premium, and cutting-edge as the community it represents!", 
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/msa-website.jpg"
  }
];
export const partners = [
  { name: "SI-UK Global", image: "/images/partners/si-uk-global.jpg", description: "Guiding students and institutions worldwide toward opportunity." },
  { name: "Global AI", image: "/images/partners/global-ai.png", description: "AI-powered solutions for businesses and organizations." },
  { name: "Urban Pizza", image: "/images/partners/urban-pizza.jpg", description: "Bringing every flavor and every craving in Jaipur together." },
];
export const moments = Array.from({ length: 9 }, (_, index) => ({
  alt: `MSA community moment ${String(index + 1).padStart(2, "0")}`,
  src: `/images/moments/${String(index + 1).padStart(2, "0")}.jpg`,
}));

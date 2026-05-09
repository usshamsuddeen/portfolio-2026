import dynamicPublications from './dynamic-publications.json';
import dynamicBehance from './dynamic-behance.json';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  statusColor: string;
  description: string;
  tags: string[];
  thumbnail: string;
  links: { label: string; url: string }[];
  repoName?: string;
}

export interface Publication {
  id: string;
  code: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  doiUrl: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  status?: string;
  highlights?: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string;
}

export interface Award {
  title: string;
  date: string;
  issuer: string;
  description?: string;
}

export interface DesignProject {
  title: string;
  type: string;
  tools: string[];
  thumbnail: string;
  behanceUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/usshamsuddeen/",
  orcid: "https://orcid.org/0009-0006-2883-7947",
  github: "https://github.com/usshamsuddeen",
  behance: "https://www.behance.net/Shamsss",
  medium: "https://mushams.medium.com",
};

export const projects: Project[] = [
  {
    id: "behavioral-agentic-ai",
    title: "behavioral-agentic-ai",
    subtitle: "AI Support & Sentiment System",
    status: "VPS DEPLOYED",
    statusColor: "#7C3AED",
    repoName: "behavioral-agentic-ai",
    description: "Production-grade system supporting 12+ languages. Automatically escalates frustrated customers by scoring sentiment and retrieving relevant knowledge. Built with a live dashboard, churn prediction, and satisfaction tracking.",
    tags: ["Agentic AI", "FastAPI", "RAG", "Sentiment analysis", "Churn Prediction"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "Deep-Sensing-AI-FBG-Battery-Monitoring",
    title: "Deep-Sensing-AI-FBG-Battery-Monitoring",
    subtitle: "FBG Battery Health Monitoring",
    status: "93% ACCURACY",
    statusColor: "#2563EB",
    repoName: "Deep-Sensing-AI-FBG-Battery-Monitoring",
    description: "Real-time health monitoring using fiber-optic sensors. Trained on 731,000+ data points to detect failure types (thermal runaway, swelling) with high precision and SHAP-based explainable AI visualization.",
    tags: ["Deep Learning", "FBG Sensors", "Explainable AI", "IoT"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "Autonomous-Systems-Digital-Twin-Multitask-KAN",
    title: "Autonomous-Systems-Digital-Twin-Multitask-KAN",
    subtitle: "Multitask KAN — Digital Twin",
    status: "ADVANCED AI",
    statusColor: "#059669",
    repoName: "Autonomous-Systems-Digital-Twin-Multitask-KAN",
    description: "Novel AI architecture using Kolmogorov-Arnold Networks for autonomous vehicle fault detection. Utilizes a virtual digital twin to process camera, radar, and LiDAR data for safe multi-modal testing environments.",
    tags: ["KAN", "Digital Twin", "Autonomous Systems", "Sensor Fusion"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "Website_Redesigning-Deployment-Testing",
    title: "Website Redesign & Deployment",
    subtitle: "Enterprise Website Architecture",
    status: "DEPLOYED",
    statusColor: "#3B82F6",
    repoName: "Website_Redesigning-Deployment-Testing",
    description: "Multi-stage project involving the redesign, modernization, and deployment of an enterprise website across heterogeneous server environments using GitHub automation and CI/CD pipelines.",
    tags: ["Redesign", "Deployment", "DevOps", "Testing", "UI/UX"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "Smart-Pharma-Inventory-AI",
    title: "Smart Pharma Inventory AI",
    subtitle: "AI-Driven Logistics Dashboard",
    status: "PROTOTYPE",
    statusColor: "#F59E0B",
    repoName: "Smart-Pharma-Inventory-AI",
    description: "Comprehensive analytical dashboard for pharmaceutical supply chains. Featuring real-time stock level monitoring, medical-grade quality assurance metrics, and supply chain visualization profiles.",
    tags: ["Inventory AI", "Medical Logs", "Django", "Retail AI"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "Advanced-CV-Research-Cancer-Multi-Model-Classification",
    title: "Advanced-CV-Research-Cancer-Multi-Model-Classification",
    subtitle: "Medical CV Benchmark",
    status: "94.5% ACCURACY",
    statusColor: "#B91C1C",
    repoName: "Advanced-CV-Research-Cancer-Multi-Model-Classification",
    description: "Systematic comparison of 9 deep learning models for tumor classification. Custom HybridNet architecture achieved 94.57% accuracy and ROC AUC of 0.9502, outperforming larger SOTA architectures.",
    tags: ["Computer Vision", "Healthcare AI", "HybridNet", "Benchmarks"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "ML-Solution-Architecture-1-SSL-Noisy-PseudoLabel-Refinement",
    title: "ML-Solution-Architecture-1-SSL-Noisy-PseudoLabel-Refinement",
    subtitle: "SSL Noise & Imbalance Framework",
    status: "ML ARCHITECTURE",
    statusColor: "#7C3AED",
    repoName: "ML-Solution-Architecture-1-SSL-Noisy-PseudoLabel-Refinement",
    description: "Research framework (HybridBalance) for training AI on limited data. Solves incorrect label pollution and skewed distributions, improving minority class accuracy by 45%.",
    tags: ["SSL", "Label Refinement", "Class Imbalance", "HybridBalance"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "ML-Solution-Architecture-2-SSL-Class-Imbalance-BalanceMatch",
    title: "ML-Solution-Architecture-2-SSL-Class-Imbalance-BalanceMatch",
    subtitle: "BalanceMatch — SSL Architecture",
    status: "SOTA RESEARCH",
    statusColor: "#2563EB",
    repoName: "ML-Solution-Architecture-2-SSL-Class-Imbalance-BalanceMatch",
    description: "A novel semi-supervised learning framework addressing class imbalance. Integrates BalanceMatch with Prototypical Networks to improve minority class recognition and representation learning.",
    tags: ["SSL", "Class Imbalance", "Prototypical Networks", "BalanceMatch"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
  {
    id: "AI-ML-Hierarchical-Perception-for-Home-Use-Robots",
    title: "AI-ML-Hierarchical-Perception-for-Home-Use-Robots",
    subtitle: "Hierarchical Robot Perception",
    status: "ROBOTICS AI",
    statusColor: "#059669",
    repoName: "AI-ML-Hierarchical-Perception-for-Home-Use-Robots",
    description: "Hierarchical knowledge distillation for home-use service robots. Enables efficient object recognition and spatial understanding on edge devices with limited compute resources.",
    tags: ["Robotics", "Knowledge Distillation", "Perception", "Edge AI"],
    thumbnail: "/github-alt.webp",
    links: [],
  },
];

const staticPublications: Publication[] = [
  {
    id: "p1",
    code: "P1",
    title: "Rolling Bearing Fault Detection using Deep Learning Model: Intelligent Manufacturing Industry 4.0/5.0",
    authors: "Sarwar A., Sarwar D., Shams M.U., Islam M., Afzal M.J., & Yasir A.B.",
    journal: "Scientia: Technology, Science and Society, 1(3), 104–113, 2024",
    year: "2024",
    doi: "10.59324/stss.2024.1(3).06",
    doiUrl: "https://doi.org/10.59324/stss.2024.1(3).06",
  },
  {
    id: "p2",
    code: "P2",
    title: "Design and Implementation of a Smart Footsteps Power Generation System",
    authors: "Khan M.R.A., Fareed B., Khan M.F.A., Nisar M., Shams M.U., & Rahmani A.N.",
    journal: "European Journal of Applied Science, Engineering and Technology, 3(5), 171–181, 2025",
    year: "2025",
    doi: "10.59324/ejaset.2025.3(5).14",
    doiUrl: "https://doi.org/10.59324/ejaset.2025.3(5).14",
  },
  {
    id: "p3",
    code: "P3",
    title: "Incremental Development of a Framework for Mitigating Adversarial Attacks on CNN Models",
    authors: "Nisar M., Fayyaz N., Ahmed M.A., Shams M.U., & Fareed B.",
    journal: "Scientific Journal of Engineering Research (SJER), 1(4), 2025",
    year: "2025",
    doi: "10.64539/sjer.v1i4.2025.349",
    doiUrl: "https://doi.org/10.64539/sjer.v1i4.2025.349",
  },
  {
    id: "p4",
    code: "P4",
    title: "Comparative Analysis on AI-Driven Human Digital Twin for Personalized and Predictive Medicine",
    authors: "Din G.M., Shams M.U., Rahmani A.N., Rehman A., Ahmed M.A., & Shoukat M.A.",
    journal: "Journal of Clinical Practice and Medical Research, 1(1), 30–38, 2025",
    year: "2025",
    doi: "10.59324/jcpmr.2025.1(1).06",
    doiUrl: "https://doi.org/10.59324/jcpmr.2025.1(1).06",
  }
];

export const publications: Publication[] = [
  ...staticPublications,
  ...((dynamicPublications as Publication[]) || []).filter(dp =>
    !staticPublications.some(sp => sp.doi === dp.doi || sp.title.toLowerCase() === dp.title.toLowerCase())
  )
];

export const experiences: Experience[] = [
  {
    period: "2024 – Present",
    role: "Software Engineer — AI Researcher",
    company: "Beijing Institute of Technology",
    location: "Beijing, China (Project Base)",
    status: "Project Based",
    highlights: [
      "Completed 9+ ML research projects in under 16 months",
      "Wrote 4 published papers in top journals like IEEE, SJER, and STSS",
      "Built new deep learning models to predict battery health and lifespan",
      "Created KAN-based vehicle communication models using Digital Twin tech",
      "Presented research as an invited speaker at IEEE EIC Conference 2025",
      "Handled full data pipelines for research projects across global teams",
    ],
  },
  {
    period: "2025 – 2026",
    role: "Senior UI/UX Designer",
    company: "GTech Solutions",
    location: "Sydney, Australia (Remote)",
    status: "Remote",
    highlights: [
      "Led full design of next-gen HRM platforms from branding to final UI",
      "Shaped product vision and roadmaps by working with devs and HR teams",
      "Designed Assets, prototypes, and ready-to-use designs for web and mobile",
      "Ran user testing rounds and refined designs based on real user feedback",
      "Designed complete brand identities with logos, style guides, and decks",
      "Redesigned company websites to boost lead generation and engagement",
    ],
  },
  {
    period: "2022 – 2023",
    role: "Design Lead — UI/UX Designer",
    company: "Shingle",
    location: "Lehi, Utah, USA (Remote)",
    status: "Remote",
    highlights: [
      "Owned the full design process for multiple high-profile law firm sites",
      "Did deep user research and built clear personas to guide product direction",
      "Mapped user journeys and ran usability tests to keep navigation smooth",
      "Turned complex client needs into clean, easy-to-use digital experiences",
      "Handled developer handoffs in Figma to ensure accurate final builds",
      "Delivered all projects on time while staying within budget and standards",
    ],
  },
];

export const educations: Education[] = [
  {
    degree: "BS Software Engineering",
    school: "Khwaja Fareed University of Engineering & Information Technology (KFUEIT)",
    period: "2022 – 2026 (Expected)",
    details: "CGPA: 3.70 / 4.00 · Class Rank: 4th / Batch · Dean's Honor Certificate",
  },
  {
    degree: "Intermediate — Bio Sciences",
    school: "Forman Christian College, Lahore",
    period: "2019 – 2021",
    details: "Grade: 86% - Grade A",
  },
];

export const awards: Award[] = [
  {
    title: "Dean's Honor Certificate",
    date: "August 2025",
    issuer: "KFUEIT, Rahim Yar Khan",
    description: "Outstanding Semester Academic Achievement — BS Software Engineering",
  },
  {
    title: "Rank 4th — BS Software Engineering",
    date: "2022 – 2026",
    issuer: "KFUEIT",
    description: "Class Rank 4th in entire batch of 2022–2026, CGPA 3.70/4.00",
  },
  {
    title: "HEC PMYP Laptop Award",
    date: "March 2023",
    issuer: "Higher Education Commission of Pakistan",
    description: "Academic Excellence Recognition",
  },
];

const staticDesignProjects: DesignProject[] = [
  {
    title: "TechSolutions — Complete Branding",
    type: "Branding · Visual Identity",
    tools: ["Adobe AI/PS", "Brand Strategy"],
    thumbnail: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a3d4f2230339135.Y3JvcCwxMDA3LDc4OCwxOTIsMA.png",
    behanceUrl: "https://www.behance.net/gallery/230339135/TechSolutions-Complete-Branding",
  }
];

export const designProjects: DesignProject[] = [
  ...staticDesignProjects,
  ...((dynamicBehance as DesignProject[]) || []).filter(db => !staticDesignProjects.some(sb => sb.behanceUrl === db.behanceUrl))
];

export const certifications: Certification[] = [
  { title: "Google UX Design Professional Certificate", issuer: "Google", date: "Feb 2023" },
  { title: "Principles for UX Design (2021)", issuer: "LinkedIn", date: "Aug 2023" },
  { title: "Designing for Developers", issuer: "LinkedIn", date: "Aug 2023" },
  { title: "Design Thinking: Understanding the Process", issuer: "LinkedIn", date: "Aug 2023" },
  { title: "Design Thinking — Testing and Refining", issuer: "LinkedIn", date: "Aug 2023" },
];

export const volunteering = [
  {
    role: "Volunteer Design Writer",
    company: "Muzli — Design Inspiration (Medium)",
    period: "2023 – Present",
    highlights: [
      "Share design knowledge with the global community",
      "Author articles on UI/UX principles and creative processes",
      "Published on mushams.medium.com",
    ],
  }
];

export const references = [
  {
    name: "Muhammad Usman Shoukat",
    role: "Post-doc Researcher",
    org: "Beijing Institute of Technology, China",
    contact: "7520250263@bit.edu.cn | +86 183 8316 3129",
  },
  {
    name: "Mashhud Usman",
    role: "Head of Department — Biological Sciences",
    org: "Forman Christian College, Lahore",
    contact: "mashhudusman@fccollege.edu.pk | +92 321 494 7001",
  }
];

export const skillMatrix = [
  { category: "LANGUAGES", items: "Python · HTML/CSS" },
  { category: "AI / ML", items: "Machine Learning · Deep Learning · TensorFlow · PyTorch · Keras · LLMs · RAG · KAN · SHAP · Computer Vision" },
  { category: "DESIGN", items: "UI/UX Design · Figma · Adobe XD/AI/PS · Design Systems · UX Research · Interaction Design" },
  { category: "SOFT SKILLS", items: "Scientific Writing · Research Leadership · Interdisciplinary Communication · Global Collaboration · Analytical Reasoning" },
  { category: "SPOKEN", items: "English (C1 Proficient) · Urdu / Punjabi (Native)" },
];

export const navTabs = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "AI/ML PROJECTS" },
  { id: "research", label: "RESEARCH PROFILE" },
  { id: "academics", label: "ACADEMICS" },
  { id: "design", label: "DESIGN WORK" },
  { id: "certifications", label: "CERTIFICATIONS" },
  { id: "references", label: "REFERENCES" },
];

export const researchAreas = [
  "Agentic AI",
  "RAG (Retrieval) Systems",
  "Knowledge Based Systems",
  "Conversational AI",
  "Sentiment-Aware NLP",
  "Deep Learning",
  "Digital Twin",
  "Healthcare AI",
  "Adversarial ML",
  "Machine Learning",
  "Autonomous Systems",
  "Industry 4.0/5.0",
];

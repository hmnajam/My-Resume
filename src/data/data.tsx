import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Najam Saeed',
  description: 'Official website, resume and blog of Najam Saeed.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Najam.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Karachi based
        <strong className="text-stone-100"> Agentic AI Engineer </strong> &
        <strong className="text-stone-100"> Microsoft Certified AI Engineer Associate,</strong> currently working at
        <strong className="text-stone-100"> Rapid Content</strong> helping build an AI agent workforce that can generate
        SEO optimized, quality content rapidly.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training for <strong className="text-stone-100">Distance Running</strong>,
        <strong className="text-stone-100"> Reading</strong>, or riding my
        <strong className="text-stone-100"> Motorcycle</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a software developer with a focus on creating AI-driven applications that solve real-world problems. 
  Skilled in web tech like Next.js, FastAPI, LangChain and LangGraph. I strive to blend innovation with functionality. 
  My goal is to build impactful tools that enhance user experiences and drive positive change.`,
  aboutItems: [
    {label: 'Location', text: 'Karachi, PK', Icon: MapIcon},
    {label: 'Specialization', text: 'Multi-Agent AI Systems', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Pakistani', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Distance Running, Motorcycles', Icon: SparklesIcon},
    {label: 'Study', text: 'PIAIC', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Rapid Content', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2024',
    location: 'PIAIC',
    title: 'Certified Cloud Applied Generative AI Engineer',
    content: <p>Learned LangChain, LangGraph, Docker, FastAPI, Python and more.</p>,
  },
  {
    date: 'March 2023',
    location: 'Coursera',
    title: 'Meta Certified Front-End Developer',
    content: <p>Learned HTML, CSS, React, Git and Github, and more.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 - Present',
    location: 'Rapid Content',
    title: 'AI Engineer',
    content: (
      <p>
        Working as AI Engineer at Rapid Content. Using Python and FastAPI for backend and API routes development.
        Developoing AI agents for content generation, optimization and SEO. Using LangChain for LLM integration and
        LangGraph for agent creation and execution. Also experiended working with Llama Index and CrewAI. Experienced
        working with Openai GPT3.5, GPT4, GPT4o and GPT4o mini models. Experienced working with Gemini Pro 1.5 Pro and
        Flash models.
      </p>
    ),
  },
  {
    date: 'January 2024 - July 2024',
    location: 'Chatify',
    title: 'Full-stack Engineer',
    content: (
      <p>
        Worked as sole Full-stack developer on Chatify whatsapp api. Developed backend using technologies like, NextJS
        API routes and frontend using NextJS. Setup databases with Neon Postgres and Vercel Postgres and also with
        Mongodb. Also Developed a few microservices using Typescript and Javascript with Express. Documented APIs with
        Swagger and Swagger UI. Used Postman for API testing. Deployed microservices at Render.
      </p>
    ),
  },
  {
    date: 'April 2023 - December 2023',
    location: 'LabCloud',
    title: 'Front-End Developer',
    content: (
      <p>
        Developed websites for LabCloud's clients using NextJS, React Typescript, TSX and Tailwind CSS. Deployed
        websites at Vercel. Experienced consuming APIs of different platforms and microservices. Also setup
        authentication using clerk and used Sanity as headless datastore.
      </p>
    ),
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML',
        level: 8,
      },
      {
        name: 'Tailwind CSS',
        level: 7,
      },
      {
        name: 'JavaScript',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'NextJS',
        level: 8,
      },
      {
        name: 'Sanity',
        level: 7,
      },
      {
        name: 'Vercel',
        level: 10,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'FastAPI',
        level: 7,
      },
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'Postgresql',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 6,
      },
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express',
        level: 8,
      },
      {
        name: 'Swagger',
        level: 9,
      },
      {
        name: 'Postman',
        level: 9,
      },
      {
        name: 'Render',
        level: 10,
      },
    ],
  },
  {
    name: 'AI Agents',
    skills: [
      {
        name: 'LangChain',
        level: 8,
      },
      {
        name: 'LangGraph',
        level: 8,
      },
      {
        name: 'CrewAI',
        level: 6,
      },
      {
        name: 'LlamaIndex',
        level: 3,
      },
      {
        name: 'Pinecone',
        level: 5,
      },
      {
        name: 'Neo4j',
        level: 4,
      },
    ],
  },
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Urdu',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'CV Maker',
    description: 'Get your AI generated CV by answering a few questions.',
    url: 'https://github.com/hmnajam/crewAI-projects',
    image: porfolioImage1,
  },
  {
    title: 'Najam.pk(Resume and blog)',
    description: 'My resume and blog.',
    url: 'https://najam.pk',
    image: porfolioImage2,
  },
  {
    title: 'GenAI Boilerplate',
    description: 'The best NextJS-FastAPI-LangChain-LangGraph Boilerplate on the internet.',
    url: 'https://github.com/hmnajam/GenAI-SaaS-Boilerplate',
    image: porfolioImage3,
  },
  {
    title: 'Chatify',
    description: 'Looking for a reliable and affordable WhatsApp API solution?',
    url: 'https://chatify.najam.pk/',
    image: porfolioImage4,
  },
  {
    title: 'Rapid Content',
    description: 'Create SEO optimized, quality content rapidly with citations.',
    url: 'https://colab.research.google.com/drive/16B4O97P6AB_b9mOMvE0BfmyMvCL3u6hJ',
    image: porfolioImage5,
  },

  {
    title: 'LaWisor',
    description: 'Legal advisor for free using GenAI and RAG.',
    url: 'https://lawisor.najam.pk/',
    image: porfolioImage7,
  },
  {
    title: 'VisaWise',
    description: 'Visa consultant Service as a Software.',
    url: 'https://visawise.najam.pk/',
    image: porfolioImage8,
  },
  {
    title: 'Finalcial Analyst',
    description: 'Analyse financial performance of any company using text prompts.',
    url: 'https://github.com/hmnajam/Financial-Analyst',
    image: porfolioImage9,
  },
  {
    title: 'Stylist AI',
    description: 'Your personal AI Stylist.',
    url: 'https://colab.research.google.com/drive/1kJV6rtPiTNXZG2J-RQoh2OAVaiPBKqGv',
    image: porfolioImage6,
  },
  {
    title: 'Camel-Llama',
    description: 'Finetuned Llama 1B on Urdu text dataset.',
    url: 'https://huggingface.co/Hmnajam/camel-llama',
    image: porfolioImage10,
  },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Minhaj Mukhtar',
      text: 'Najam’s ability to think strategically and deliver innovative solutions is truly remarkable. He consistently exceeds expectations and inspires those he works with to push their boundaries.',
      image: 'minhaj-mukhtar.jpg',
    },
    {
      name: 'Zia Khan',
      text: 'Najam’s a word class developer with an ability to think from the perspective of his customers. It’s a privilege to witness his journey in tech.',
      image: 'zia-khan.jpg',
    },
    {
      name: 'Syed Azfar Hussain',
      text: 'Najam stands out as a forward-thinking founder who combines creativity with technical expertise. His passion for building AI-driven innovations is both inspiring and transformative.',
      image: 'syed-azfar-hussain.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are a few ways that you can use to reach out to me.',
  items: [
    {
      type: ContactType.Email,
      text: 'hmnajam@gmail.com',
      href: 'mailto:hmnajam@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Karachi, Pakistan',
      href: 'https://maps.app.goo.gl/qQA8ZFoip3TBFhRB6',
    },
    {
      type: ContactType.Instagram,
      text: '@najamsaeed_',
      href: 'https://www.instagram.com/najamsaeed_',
    },
    {
      type: ContactType.Github,
      text: 'hmnajam',
      href: 'https://github.com/hmnajam',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hmnajam'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/1967730/najam-saeed'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hmnajam/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/najamsaeed_'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/hmnajam'},
];

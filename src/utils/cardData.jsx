import { CgWebsite } from "react-icons/cg";
import { FaCcAmazonPay } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoLogoWordpress } from "react-icons/io";
import { LuBrainCircuit } from "react-icons/lu";
import { SiFigma } from "react-icons/si";
import { TbDeviceImacSearch } from "react-icons/tb";
import { TiSocialInstagram } from "react-icons/ti";
import { VscTools } from "react-icons/vsc";
import { mediaData } from "./mediaData";

export const cardData = [
  {
    id: 1,
    title: "Audit & Analysis",
    description:
      "We analyse your online presence thoroughly to find opportunities & areas to unlock your business growth.",
    icon: <LuBrainCircuit size={60} className="  text-white" />,
  },
  {
    id: 2,
    title: "Strategy Building",
    description:
      "Based on our auditing insights, We create a marketing plan that fits your goals and generates measurable results.",
    icon: <HiOutlineLightBulb size={60} className="  text-white" />,
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "We put our marketing plan into action, optimizing website SEO, managing ads, and engaging on social media for top results.",
    icon: <VscTools size={60} className="  text-white" />,
  },
  {
    id: 4,
    title: "Monitor, Optimize & Scaling",
    description:
      "We closely track every marketing changes, tailor our campaign and scaling to convert every click into a customer.",
    icon: <GrGroup size={60} className="  text-white" />,
  },
];

export const serviceCardData = [
  {
    id: 1,
    title: "Website Figma Designing",
    desc: "Our Figma designers craft websites that are appealing and engaging, setting you apart with a unique look to boost your brand's growth.",
    icon: <SiFigma size={60} className=" text-white" />,
  },
  {
    id: 2,
    title: "Website Development",
    desc: "Website development is essential for success. Trust in our expert services to deliver a functional, secure, fast, and responsive website that perfectly represents your brand on all devices.",
    icon: <CgWebsite size={60} className=" text-white" />,
  },
  {
    id: 3,
    title: "Custom Application Solution",
    desc: "Whether you need a custom WordPress site, ERP software, or business automation. We offer tailored solutions that align perfectly with your business needs.",
    icon: <IoLogoWordpress size={60} className=" text-white" />,
  },
  {
    id: 4,
    title: "Search Engine Optimization - SEO",
    desc: "Our SEO practices make us superior. Through organised keyword research, monitoring, and white hat techniques, we ensure maintaining high ranks in search engines for long term.",
    icon: <TbDeviceImacSearch size={60} className=" text-white" />,
  },
  {
    id: 5,
    title: "Social Media Marketing",
    desc: "We work closely with you to deliver quality content for your audience. However they can engage with your brand for a long time.",
    icon: <TiSocialInstagram size={60} className=" text-white" />,
  },
  {
    id: 6,
    title: "Pay Per Click - PPC & LLC creation",
    desc: "When you need to boost sales quickly or target specific events, we create effective campaigns that ensure every dollar you spend brings back profit.",
    icon: <FaCcAmazonPay size={60} className=" text-white" />,
  },
];

export const clientsLogos = [
  {
    id: 1,
    logo: mediaData.c1,
  },
  {
    id: 2,
    logo: mediaData.c2,
  },
  {
    id: 3,
    logo: mediaData.c3,
  },
  {
    id: 4,
    logo: mediaData.c4,
  },
  {
    id: 5,
    logo: mediaData.c5,
  },
  {
    id: 6,
    logo: mediaData.c6,
  },
  {
    id: 7,
    logo: mediaData.c7,
  },
  {
    id: 8,
    logo: mediaData.c8,
  },
  {
    id: 9,
    logo: mediaData.c9,
  },
  {
    id: 10,
    logo: mediaData.c10,
  },
];

export const awards = [
  {
    id: 1,
    title: "Satisfied Clients",
    no: "250+",
  },
  {
    id: 2,
    title: "Award Winning",
    no: "10+",
  },
  {
    id: 3,
    title: "Team Members",
    no: "40+",
  },
  {
    id: 4,
    title: "Successful Projects",
    no: "350+",
  },
];

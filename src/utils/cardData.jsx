import { GrGroup } from "react-icons/gr";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";

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

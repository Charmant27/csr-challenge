import { FaHospitalUser, FaDesktop, FaChartArea } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsServer } from "react-icons/bs";
import { SlArrowRight, SlLayers } from "react-icons/sl";
import { TbNotebook, TbWorld } from "react-icons/tb";
import { CgNotes } from "react-icons/cg";
import { GrSettingsOption } from "react-icons/gr";
import { IoNewspaperOutline } from "react-icons/io5";

export const links = [
  {
    id: 1,
    icon1: <TbNotebook />,
    text: "dashboard",
    icon2: <SlArrowRight />,
  },

  {
    id: 2,
    icon1: <CgNotes />,
    text: "appointement",
  },

  {
    id: 3,
    icon1: <FaHospitalUser />,
    text: "staff",
    icon2: <SlArrowRight />,
  },

  {
    id: 4,
    icon1: <FaDesktop />,
    text: "apps",
    icon2: <SlArrowRight />,
  },

  {
    id: 5,
    icon1: <FaChartArea />,
    text: "charts",
    icon2: <SlArrowRight />,
  },

  {
    id: 6,
    icon1: <TbWorld />,
    text: "boostrap",
    icon2: <SlArrowRight />,
  },

  {
    id: 7,
    icon1: <FiHeart />,
    text: "plugins",
    icon2: <SlArrowRight />,
  },

  {
    id: 8,
    icon1: <GrSettingsOption />,
    text: "widgets",
  },

  {
    id: 9,
    icon1: <IoNewspaperOutline />,
    text: "forms",
    icon2: <SlArrowRight />,
  },

  {
    id: 10,
    icon1: <BsServer />,
    text: "table",
    icon2: <SlArrowRight />,
  },

  {
    id: 11,
    icon1: <SlLayers />,
    text: "pages",
    icon2: <SlArrowRight />,
  },
];

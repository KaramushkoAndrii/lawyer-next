import { PiTelegramLogoLight } from "react-icons/pi";
import { FaViber } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const SocialList = [
  {
    name: "telegram",
    url: "/",
    icon: <PiTelegramLogoLight size={22} />,
    iconColor: "bg-sky-500",
    id: 1,
  },
  {
    name: "viber",
    url: "/",
    icon: <FaViber size={22} />,
    iconColor: "bg-violet-600",
    id: 2,
  },
  {
    name: "whatsApp",
    url: "/",
    icon: <FaWhatsapp size={22} />,
    iconColor: "bg-green-500",
    id: 3,
  },
];

export default SocialList;

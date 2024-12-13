import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export const footerIcon: { icons: IconType; path: string }[] = [
  { icons: FiGithub, path: "#" },
  { icons: FaTelegramPlane, path: "#" },
  { icons: FaXTwitter, path: "#" },
];

export const footerDocumentation: { name: string; path: string }[] = [
    {name: 'Team', path: '#'},
    {name: 'Documentation', path: '#'},
];

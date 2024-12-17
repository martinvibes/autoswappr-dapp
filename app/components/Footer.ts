import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export const footerIcon: { icons: IconType; path: string }[] = [
  { icons: FiGithub, path: "https://github.com/BlockheaderWeb3-Community/autoswappr-dapp" },
  { icons: FaTelegramPlane, path: "https://t.co/yFNm0juRkX" },
  { icons: FaXTwitter, path: "https://twitter.com/auto_swappr" },
];

export const footerDocumentation: { name: string; path: string }[] = [
    {name: 'Team', path: '#'},
    {name: 'Documentation', path: '/documentation'},
];

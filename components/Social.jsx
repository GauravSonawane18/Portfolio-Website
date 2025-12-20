import Link from "next/link";
// import { FaGithub, FaLinkedinIn, FaTwitter } from "@components/ui/fa";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/GauravSonawane18" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/gaurav-sonawane-a9a8352b1/",
  },
  { icon: <FaTwitter />, path: "https://x.com/CoderGaurav" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;

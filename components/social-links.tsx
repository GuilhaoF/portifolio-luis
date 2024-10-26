import Link from 'next/link';
import { FaDiscord, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, link: "https://github.com/GuilhaoF" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/luis-felipe-silv/" },
    { icon: <FaDiscord />, link: "#sh4kah" },
]

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

export function Social({ containerStyles, iconStyles }: SocialProps) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.link} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    )
}
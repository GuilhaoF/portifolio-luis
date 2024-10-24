import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
    {icon: <FaGithub />, link: ""},
    {icon: <FaLinkedinIn />, link: ""},
]

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

export function Social({containerStyles, iconStyles}: SocialProps) {
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
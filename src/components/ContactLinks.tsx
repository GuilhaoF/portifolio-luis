import Link from "next/link";

interface LinksProps {
  pathName: string;
  children: React.ReactNode
}


export function ContactLinks({ pathName, children }: LinksProps) {
  return (
    <Link href={pathName}>
      <div>
        {children}
      </div>
    </Link>
  )
}
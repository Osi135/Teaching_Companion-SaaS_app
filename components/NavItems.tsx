'use client';

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Learning', href: '/my-learning' },
]

const NavItems = () => {
    const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4">
        { navItems.map(({label, href}) => (
            <Link href={href} key={label} className={cn(pathname === href && 'text-pimary font-semibold')}>
                {label}
            </Link>
        ))}
    </nav>
  )
}

export default NavItems
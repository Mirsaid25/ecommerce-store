"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
    data: Category[];
}

const MainNav: React.FunctionComponent<MainNavProps> = ({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <div>
            <nav className="mx-6 flex items-center spax-4 lg:space-x-6">
                {routes.map((route)=>(
                    <Link href={route.href} key={route.href}
                     className={cn("text-sm font-medium transition-colors hover:text-black", route.active ? "text-black" : "text-neutral-500")}
                     >
                        {route.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default MainNav;

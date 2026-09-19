"use client"

import { usePathname } from "next/navigation"
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import { LanguageToggle } from "./LanguageToggle"
import {
    DesktopLanguageSlot,
    NavIcon,
    Navigation,
    NavigationLink,
    NavigationList
} from "./Navbar.styles"

const items = [
    { key: "about", path: "about", icon: "about" },
    { key: "resume", path: "resume", icon: "resume" },
    { key: "projects", path: "projects", icon: "projects" }
] as const

export function Navbar({ locale }: { locale: Locale }) {
    const pathname = usePathname() ?? `/${locale}/about`
    const dictionary = getDictionary(locale)

    return (
        <Navigation aria-label="Primary navigation">
            <NavigationList>
                {items.map((item) => {
                    const href = `/${locale}/${item.path}`
                    const active = pathname === href || pathname.startsWith(`${href}/`)

                    return (
                        <li key={item.path}>
                            <NavigationLink href={href} $active={active} aria-current={active ? "page" : undefined}>
                                <NavIcon aria-hidden="true"><AppIcon name={item.icon} /></NavIcon>
                                {dictionary.navigation[item.key]}
                            </NavigationLink>
                        </li>
                    )
                })}
            </NavigationList>
            <DesktopLanguageSlot><LanguageToggle locale={locale} /></DesktopLanguageSlot>
        </Navigation>
    )
}

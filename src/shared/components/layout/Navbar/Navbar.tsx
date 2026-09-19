"use client"

import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/shared/i18n/config"
import { getDictionary } from "@/shared/i18n/dictionaries"
import {
    LanguageInput,
    LanguageOption,
    LanguageSelector,
    LanguageSwitch,
    LanguageTrack,
    Navigation,
    NavigationLink,
    NavigationList
} from "./Navbar.styles"

const items = [
    { key: "about", path: "about" },
    { key: "resume", path: "resume" },
    { key: "projects", path: "projects" }
] as const

export function Navbar({ locale }: { locale: Locale }) {
    const router = useRouter()
    const pathname = usePathname() ?? `/${locale}/about`
    const dictionary = getDictionary(locale)
    const isPortuguese = locale === "pt"
    const nextLocale: Locale = locale === "pt" ? "en" : "pt"
    const localizedPath = pathname.replace(/^\/(pt|en)/, `/${nextLocale}`)

    return (
        <Navigation aria-label="Primary navigation">
            <NavigationList>
                {items.map((item) => {
                    const href = `/${locale}/${item.path}`
                    const active = pathname === href || pathname.startsWith(`${href}/`)

                    return (
                        <li key={item.path}>
                            <NavigationLink href={href} $active={active} aria-current={active ? "page" : undefined}>
                                {dictionary.navigation[item.key]}
                            </NavigationLink>
                        </li>
                    )
                })}
            </NavigationList>
            <LanguageSelector>
                <LanguageOption $active={isPortuguese}>PT</LanguageOption>
                <LanguageSwitch>
                    <LanguageInput
                        type="checkbox"
                        checked={isPortuguese}
                        onChange={() => router.push(localizedPath)}
                        aria-label={isPortuguese ? "Mudar idioma para inglês" : "Change language to Portuguese"}
                    />
                    <LanguageTrack />
                </LanguageSwitch>
                <LanguageOption $active={!isPortuguese}>EN</LanguageOption>
            </LanguageSelector>
        </Navigation>
    )
}

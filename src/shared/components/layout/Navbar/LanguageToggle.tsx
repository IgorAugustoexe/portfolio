"use client"

import { usePathname, useRouter } from "next/navigation"
import type { Locale } from "@/shared/i18n/config"
import {
    LanguageInput,
    LanguageOption,
    LanguageSelector,
    LanguageSwitch,
    LanguageTrack
} from "./Navbar.styles"

export function LanguageToggle({ locale }: { locale: Locale }) {
    const router = useRouter()
    const pathname = usePathname() ?? `/${locale}/about`
    const isPortuguese = locale === "pt"
    const nextLocale: Locale = isPortuguese ? "en" : "pt"
    const localizedPath = pathname.replace(/^\/(pt|en)/, `/${nextLocale}`)

    return (
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
    )
}

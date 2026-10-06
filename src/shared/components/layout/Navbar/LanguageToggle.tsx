"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, useState, useTransition } from "react"
import type { Locale } from "@/shared/i18n/config"
import { theme } from "@/shared/styles/theme"
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
    const [selection, setSelection] = useState<{ pathname: string; locale: Locale } | null>(null)
    const [isPending, startTransition] = useTransition()
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const selectedLocale = selection?.pathname === pathname ? selection.locale : locale
    const isPortuguese = selectedLocale === "pt"
    const isSwitching = selectedLocale !== locale || isPending
    const nextLocale: Locale = isPortuguese ? "en" : "pt"
    const localizedPath = pathname.replace(/^\/(pt|en)/, `/${nextLocale}`)

    useEffect(() => {
        const destination = pathname.replace(/^\/(pt|en)/, `/${locale === "pt" ? "en" : "pt"}`)
        router.prefetch(destination)
    }, [locale, pathname, router])

    useEffect(() => () => {
        if (timerRef.current !== null) clearTimeout(timerRef.current)
    }, [])

    const changeLanguage = () => {
        if (isSwitching || timerRef.current !== null) return
        setSelection({ pathname, locale: nextLocale })
        timerRef.current = setTimeout(() => {
            timerRef.current = null
            startTransition(() => router.push(localizedPath, { scroll: false }))
        }, theme.motion.languageSwitch.duration)
    }

    return (
        <LanguageSelector aria-busy={isSwitching}>
            <LanguageOption $active={isPortuguese}>PT</LanguageOption>
            <LanguageSwitch>
                <LanguageInput
                    type="checkbox"
                    checked={isPortuguese}
                    disabled={isSwitching}
                    onChange={changeLanguage}
                    aria-label={locale === "pt" ? "Mudar idioma para inglês" : "Change language to Portuguese"}
                />
                <LanguageTrack />
            </LanguageSwitch>
            <LanguageOption $active={!isPortuguese}>EN</LanguageOption>
        </LanguageSelector>
    )
}

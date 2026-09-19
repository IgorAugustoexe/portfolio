import type { Locale } from "./config"

export type LocalizedText = Record<Locale, string>

export function getLocalizedText(text: LocalizedText, locale: Locale) {
    return text[locale]
}

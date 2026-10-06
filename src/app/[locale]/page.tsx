import { redirect } from "next/navigation"
import { defaultLocale, isLocale } from "@/shared/i18n/config"

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    redirect(`/${isLocale(locale) ? locale : defaultLocale}/about`)
}

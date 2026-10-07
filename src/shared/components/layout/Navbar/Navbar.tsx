"use client";

import { usePathname } from "next/navigation";
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon";
import type { Locale } from "@/shared/i18n/config";
import { getDictionary } from "@/shared/i18n/dictionaries";
import { LanguageToggle } from "./LanguageToggle";
import { CurrentNavigationItem, DesktopLanguageSlot, NavIcon, Navigation, NavigationLink, NavigationList } from "./Navbar.styles";

const items = [
  { key: "about", path: "about", icon: "about" },
  { key: "resume", path: "resume", icon: "resume" },
  { key: "portfolio", path: "projects", icon: "projects" },
] as const;

export function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? `/${locale}/about`;
  const dictionary = getDictionary(locale);

  return (
    <Navigation aria-label="Primary navigation">
      <NavigationList>
        {items.map((item) => {
          const href = `/${locale}/${item.path}`;
          const active = pathname === href || pathname.startsWith(`${href}/`);
          const content = (
            <>
              <NavIcon aria-hidden="true">
                <AppIcon name={item.icon} />
              </NavIcon>
              {dictionary.navigation[item.key]}
            </>
          );

          return (
            <li key={item.path}>
              {active ? (
                <CurrentNavigationItem $active aria-current="page">
                  {content}
                </CurrentNavigationItem>
              ) : (
                <NavigationLink href={href} $active={false}>
                  {content}
                </NavigationLink>
              )}
            </li>
          );
        })}
      </NavigationList>
      <DesktopLanguageSlot>
        <LanguageToggle locale={locale} />
      </DesktopLanguageSlot>
    </Navigation>
  );
}

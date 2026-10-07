"use client";

import { profile } from "@/shared/data/profile.mock";
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon";
import { LanguageToggle } from "@/shared/components/layout/Navbar/LanguageToggle";
import { getDictionary } from "@/shared/i18n/dictionaries";
import type { Locale } from "@/shared/i18n/config";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import {
  Avatar,
  ContactItem,
  ContactList,
  ContactValue,
  Container,
  Details,
  IconBox,
  MobileLanguageSlot,
  Name,
  ProfileHeader,
  Role,
  SidebarCopyright,
  SidebarFooter,
  SidebarFooterMessage,
} from "./Sidebar.styles";

export function Sidebar({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <ProfileHeader>
        <Avatar src={profile.avatar} alt={profile.name} width={160} height={160} priority unoptimized />
        <div>
          <Name>{profile.name}</Name>
          <Role>{getLocalizedText(profile.role, locale)}</Role>
        </div>
      </ProfileHeader>

      <Details>
        <MobileLanguageSlot>
          <LanguageToggle locale={locale} />
        </MobileLanguageSlot>
        <ContactList>
          {profile.contacts.map((contact) => (
            <ContactItem key={contact.value}>
              <IconBox aria-hidden="true">
                <AppIcon name={contact.icon} />
              </IconBox>
              <div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <ContactValue>{contact.value}</ContactValue>
                  </a>
                ) : (
                  <ContactValue>{contact.value}</ContactValue>
                )}
              </div>
            </ContactItem>
          ))}
        </ContactList>
      </Details>

      <SidebarFooter>
        <SidebarFooterMessage>{dictionary.footer.message}</SidebarFooterMessage>
        <SidebarCopyright>{dictionary.footer.signature}</SidebarCopyright>
      </SidebarFooter>
    </Container>
  );
}

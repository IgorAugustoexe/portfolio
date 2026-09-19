"use client";

import { useState } from "react";
import { profile } from "@/shared/data/profile.mock";
import { AppIcon } from "@/shared/components/ui/AppIcon/AppIcon";
import { getDictionary } from "@/shared/i18n/dictionaries";
import type { Locale } from "@/shared/i18n/config";
import { getLocalizedText } from "@/shared/i18n/getLocalizedText";
import {
  Avatar,
  ContactItem,
  ContactLabel,
  ContactList,
  ContactValue,
  Container,
  Details,
  DetailsContent,
  DetailsToggle,
  IconBox,
  Name,
  ProfileHeader,
  Role,
  SidebarCopyright,
  SidebarFooter,
  SidebarFooterMessage,
} from "./Sidebar.styles";

export function Sidebar({ locale }: { locale: Locale }) {
  const [contactsOpen, setContactsOpen] = useState(false);
  const dictionary = getDictionary(locale);

  return (
    <Container>
      <ProfileHeader>
        <Avatar src={profile.avatar} alt={profile.name} width={132} height={132} priority unoptimized />
        <div>
          <Name>{profile.name}</Name>
          <Role>{getLocalizedText(profile.role, locale)}</Role>
        </div>
      </ProfileHeader>

      <Details>
        <DetailsToggle
          type="button"
          aria-expanded={contactsOpen}
          aria-controls="sidebar-contacts"
          onClick={() => setContactsOpen((current) => !current)}
        >
          {contactsOpen ? dictionary.hideContacts : dictionary.showContacts}
        </DetailsToggle>
        <DetailsContent id="sidebar-contacts" $open={contactsOpen}>
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
        </DetailsContent>
      </Details>

      <SidebarFooter>
        <SidebarFooterMessage>{dictionary.footer.message}</SidebarFooterMessage>
        <SidebarCopyright>© 2026 Igor Augusto</SidebarCopyright>
      </SidebarFooter>
    </Container>
  );
}

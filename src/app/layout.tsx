import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { StarfieldBackground } from "@/shared/components/background/StarfieldBackground/StarfieldBackground";
import { StyledComponentsRegistry } from "@/shared/styles/StyledComponentsRegistry";
import { UmamiAnalytics } from "@/shared/components/analytics/UmamiAnalytics";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Igor Augusto | Portfolio",
    template: "Igor Augusto | Full-Stack-Developer",
  },
  description: "Personal portfolio with experience, skills and selected software projects.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <UmamiAnalytics />
        <StyledComponentsRegistry>
          <StarfieldBackground />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

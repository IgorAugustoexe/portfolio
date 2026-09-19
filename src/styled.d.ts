import "styled-components"
import type { PortfolioTheme } from "@/shared/styles/theme"

declare module "styled-components" {
    export interface DefaultTheme extends PortfolioTheme {}
}

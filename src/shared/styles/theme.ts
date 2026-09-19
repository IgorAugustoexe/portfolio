export const theme = {
    colors: {
        background: {
            page: "#0b0e12",
            panel: "#171a1f",
            elevated: "#1d2025",
            soft: "#24272c"
        },
        starfield: {
            base: "#07090c",
            dim: "rgba(255, 255, 255, 0.34)",
            soft: "rgba(235, 241, 248, 0.52)",
            cool: "rgba(174, 205, 235, 0.48)"
        },
        text: {
            primary: "#fafafa",
            secondary: "#d6d6d6",
            muted: "#a8a8a8",
            inverse: "#151515"
        },
        accent: {
            primary: "#ffdb86",
            secondary: "#f3ba61"
        },
        border: {
            default: "#34383e",
            subtle: "#292d33",
            highlighted: "#ffdb86"
        },
        icon: {
            primary: "#ffdb86",
            secondary: "#d6d6d6"
        },
        scrollbar: {
            track: "#080a0e",
            thumb: "#343436",
            thumbHover: "#4a4a4d"
        },
        status: {
            success: "#55c875",
            error: "#ff6b6b"
        }
    },
    gradients: {
        accent: "linear-gradient(135deg, #ffe4a2 0%, #f5bd69 100%)",
        surface: "linear-gradient(145deg, rgba(37, 40, 45, 0.92) 0%, rgba(24, 27, 32, 0.94) 100%)",
        planet: "radial-gradient(circle at 70% 32%, #2b2d30 0%, #171b21 32%, #0c1015 72%)",
        starfield: "radial-gradient(circle at 50% 35%, #10151b 0%, #0b0e12 54%, #080a0d 100%)"
    },
    fonts: {
        family: {
            primary: "var(--font-poppins), 'Segoe UI', sans-serif"
        },
        size: {
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.25rem",
            xl: "1.75rem",
            title: "2rem"
        },
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600
        }
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3rem"
    },
    radius: {
        sm: "8px",
        md: "14px",
        lg: "20px",
        round: "999px"
    },
    shadows: {
        card: "0 16px 30px rgba(0, 0, 0, 0.25)",
        button: "0 8px 20px rgba(0, 0, 0, 0.2)"
    },
    transitions: {
        fast: "150ms ease",
        normal: "250ms ease",
        slow: "400ms ease"
    },
    layout: {
        maxWidth: "1520px",
        desktopCardMinHeight: "640px",
        viewportSpacingVertical: "clamp(1rem, 4dvh, 3rem)",
        viewportSpacingHorizontal: "clamp(1rem, 3vw, 2rem)"
    },
    breakpoints: {
        mobile: "480px",
        tablet: "768px",
        desktop: "1024px",
        wide: "1280px"
    }
} as const

export type PortfolioTheme = typeof theme

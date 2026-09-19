export const theme = {
    colors: {
        background: {
            page: "#121212",
            panel: "#1e1e1f",
            elevated: "#262627",
            soft: "#2b2b2c"
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
            primary: "#ffdb70",
            secondary: "#ffbb5c"
        },
        border: {
            default: "#383838",
            subtle: "#2d2d2e",
            highlighted: "#ffdb70"
        },
        icon: {
            primary: "#ffdb70",
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
        accent: "linear-gradient(135deg, #ffdb70 0%, #ffbb5c 100%)",
        surface: "linear-gradient(145deg, #2b2b2c 0%, #222223 100%)",
        starfield: "radial-gradient(circle at 50% 35%, #0c1016 0%, #080a0e 48%, #050608 100%)"
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
        maxWidth: "1440px",
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

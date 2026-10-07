const skillFillDuration = 400;

export const theme = {
  colors: {
    background: {
      panel: "#171a1f",
      elevated: "#1d2025",
      soft: "#24272c",
    },
    starfield: {
      base: "#07090c",
      dim: "rgba(255, 255, 255, 0.34)",
      soft: "rgba(235, 241, 248, 0.52)",
      cool: "rgba(174, 205, 235, 0.48)",
    },
    text: {
      primary: "#fafafa",
      secondary: "#d6d6d6",
      muted: "#a8a8a8",
      inverse: "#151515",
    },
    accent: {
      primary: "#ffdb86",
    },
    border: {
      default: "#34383e",
      subtle: "#292d33",
      projectHover: "#4a4f56",
      iconTile: "rgba(255, 219, 134, 0.2)",
    },
    scrollbar: {
      track: "#080a0e",
      thumb: "#343436",
      thumbHover: "#4a4a4d",
    },
  },
  gradients: {
    accent: "linear-gradient(135deg, #ffe4a2 0%, #f5bd69 100%)",
    surface: "linear-gradient(145deg, rgba(37, 40, 45, 0.92) 0%, rgba(24, 27, 32, 0.94) 100%)",
    iconTile: "linear-gradient(rgba(255, 219, 134, 0.04), rgba(255, 219, 134, 0.04)), #24272c",
    starfield: "radial-gradient(circle at 50% 35%, #10151b 0%, #0b0e12 54%, #080a0d 100%)",
  },
  fonts: {
    family: {
      primary: "var(--font-poppins), 'Segoe UI', sans-serif",
    },
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.25rem",
    },
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  radius: {
    sm: "8px",
    md: "10px",
    lg: "10px",
    projectImage: "16px",
    projectFilter: "14px",
    round: "10px",
    circle: "50%",
  },
  iconTile: {
    standard: { size: "48px", mobileSize: "40px", iconSize: "20px" },
    large: { size: "60px", mobileSize: "56px", iconSize: "24px" },
  },
  projectLogoStamp: {
    size: "152px",
    mobileSize: "80px",
    imageSize: "85%",
  },
  skillScale: {
    labelFontSize: "clamp(0.75rem, 4cqi, 0.875rem)",
    stackedMaxWidth: "22.5rem",
  },
  profileContacts: {
    fontSize: "clamp(0.75rem, 6cqi, 0.875rem)",
  },
  projectCarousel: {
    previewScale: 0.85,
    previewOpacity: 0.6,
    controlsWidth: "42rem",
    portraitHeight: "clamp(36rem, 62vh, 56rem)",
    landscapeWidth: "36rem",
    deckPreviewVisible: 1 / 3,
    indicatorsPerRow: 20,
    indicatorSize: "12px",
    indicatorHaloScale: 2,
    indicatorTarget: "20px",
    indicatorMobileTarget: "24px",
    imageSlideDistance: "12%",
  },
  resumeTimeline: {
    markerSize: "12px",
    markerHalo: "7px",
    markerTitleOffset: 14,
    lineWidth: "1px",
  },
  shadows: {
    button: "0 8px 20px rgba(0, 0, 0, 0.2)",
  },
  transitions: {
    fast: "150ms ease",
    normal: "250ms ease",
    projectImageZoom: "250ms ease",
    skillFill: `${skillFillDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
  },
  motion: {
    languageSwitch: {
      duration: 240,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    cardReveal: {
      startDelay: 10,
      contentDuration: 80,
    },
    resumeTimeline: {
      startDelay: 10,
      travelDuration: 180,
      cardDuration: 240,
      contentDuration: 120,
      stepPause: 0,
      travelEasing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    pageFade: {
      duration: 500,
      easing: "ease",
    },
    projectCardEnter: {
      duration: 250,
      initialScale: 0.7,
      easing: "ease-out",
    },
    projectCarousel: {
      imageDuration: 700,
      imageEasing: "cubic-bezier(0.22, 1, 0.36, 1)",
      previewFadeDuration: 240,
      previewFadeDelay: 280,
      indicatorFillDuration: 140,
      indicatorHaloDuration: 180,
      indicatorHaloDelay: 140,
    },
    skills: {
      delay: 30,
      duration: skillFillDuration,
      markerDuration: 50,
    },
  },
  layout: {
    maxWidth: "1760px",
    desktopCardMinHeight: "640px",
    viewportSpacingVertical: "clamp(1rem, 4dvh, 3rem)",
    viewportSpacingHorizontal: "clamp(1rem, 1.5vw, 1.5rem)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "1024px",
    desktop: "1024px",
    wide: "1280px",
  },
} as const;

export type PortfolioTheme = typeof theme;

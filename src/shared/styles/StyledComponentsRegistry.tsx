"use client"

import { useServerInsertedHTML } from "next/navigation"
import { PropsWithChildren, useState } from "react"
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components"
import { GlobalStyles } from "./GlobalStyles"
import { theme } from "./theme"

export function StyledComponentsRegistry({ children }: PropsWithChildren) {
    const [sheet] = useState(() => new ServerStyleSheet())

    useServerInsertedHTML(() => {
        const styles = sheet.getStyleElement()
        sheet.instance.clearTag()
        return <>{styles}</>
    })

    if (typeof window !== "undefined") {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        )
    }

    return (
        <StyleSheetManager sheet={sheet.instance}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </StyleSheetManager>
    )
}

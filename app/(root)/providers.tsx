'use client'
import * as React from "react";
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
export interface ProvidersProps {
    children: React.ReactNode;
    themeProps?: ThemeProviderProps;
}
//attribute="class" defaultTheme="dark"
export function Providers({ children, themeProps }: ProvidersProps) {
    return (
        <NextUIProvider>
            <NextThemesProvider {...themeProps} >{children}</NextThemesProvider>
        </NextUIProvider>
    )
}
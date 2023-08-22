'use client'

import SSRProvider from "react-bootstrap/SSRProvider";

export function Providers ({children}: {children: React.ReactNode} ){
    return(
        <SSRProvider>
            {children}
        </SSRProvider>
    )
}
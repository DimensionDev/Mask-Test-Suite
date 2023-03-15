import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Logo from './components/Logo'

const config: DocsThemeConfig = {
    logo: (
        <>
            <Logo />
            <span style={{ marginLeft: 8 }}>Mask Network Test Suite</span>
        </>
    ),
    project: {
        link: 'https://github.com/DimensionDev/Maskbook',
    },
    docsRepositoryBase: 'https://github.com/DimensionDev/Maskbook',
    footer: {
        text: 'Your Portal To The New, Open Internet.',
    },
}

export default config

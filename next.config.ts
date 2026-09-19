import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    agentRules: false,
    compiler: {
        styledComponents: true
    },
    turbopack: {
        root: process.cwd()
    }
}

export default nextConfig

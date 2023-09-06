/** @type {import('next').NextConfig} */
const nextConfig = {}

const bundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = bundleAnalyzer(nextConfig)

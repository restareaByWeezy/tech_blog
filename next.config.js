/** @type {import('next').NextConfig} */

const path = require('path') // 1. path 선언

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      // issuer: /\.[jt]sx?$/,
    })

    return config
  },
}

module.exports = withVanillaExtract(nextConfig)

/** @type {import('next').NextConfig} */

const path = require('path'); // 1. path 선언

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'media-exp1.licdn.com'],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withVanillaExtract(withContentlayer(nextConfig));

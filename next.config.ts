import type { NextConfig } from 'next';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig: NextConfig = {
  reactStrictMode: false,

  async redirects() {
    return [
      {
        source: '/:path*/',
        destination: '/:path*/login',
        permanent: false,
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
        cacheDirectory: path.resolve(__dirname, '.next/cache'),
      };
    }

    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test?.('.svg'));

    // Add new rules for SVG imports
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components with width/height
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // Apply to JavaScript/TypeScript files
        resourceQuery: { not: [/url/] }, // Exclude if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true, // Optimize SVG
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeViewBox: false, // Keep the viewBox
                      },
                    },
                  },
                ],
              },
              titleProp: true, // Allow setting <title> from props
              dimensions: true, // Add width and height
            },
          },
        ],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;

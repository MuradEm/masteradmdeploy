/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    compiler:
        {
            styledComponents: true
        }
}

module.exports = nextConfig
module.exports = {
    experimental: {
      serverActions: true,
    },
    content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
    './src/services/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './src/util/**/*.{js,ts,jsx,tsx}',
    ],
    compress: false,
  }

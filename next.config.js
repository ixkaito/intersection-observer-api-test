/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    newNextLinkBehavior: true,
  },
}

module.exports = config

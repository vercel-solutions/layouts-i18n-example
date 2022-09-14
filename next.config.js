/** @type {import('next').NextConfig} */
const nextConfig = {
  // Recommended for the `pages` directory
  // Enabled for `app` as the new router leverages concurrent features in React
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    serverComponents: true,
    // Recommended for new `<Link>` and `<Image>` behavior
    // Enables `<Link>` without `<a>`. When migrating an existing app use the codemod as outlined here: https://github.com/vercel/next.js/pull/36436
    newNextLinkBehavior: true,
    // Enables `next/future/image`
    images: {
      allowFutureImage: true,
    },
    // Recommended, will be the default in the next major version:
    // Enable browserslist handling, which is required for legacyBrowsers: false
    browsersListForSwc: true,
    // Change the default compilation output to ESModules compatible browsers
    legacyBrowsers: false,
  },
  // i18n: {
  //   locales: ["en-US", "es-AR"],
  //   defaultLocale: "en-US",
  // },
};

module.exports = nextConfig;

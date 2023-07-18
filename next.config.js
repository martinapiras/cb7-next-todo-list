/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
        @import "./src/scss/variables/border-radius.scss";
      @import "./src/scss/variables/padding.scss";
      @import "./src/scss/variables/elevation.scss";
      @import "./src/scss/helpers/devices.scss";
      @import "./src/scss/helpers/extends.scss";
      @import "./src/scss/helpers/functions.scss";
      @import "./src/scss/helpers/mixins.scss";
      @import "./src/scss/layout/columns.scss";
        `,
  },
};

module.exports = nextConfig;

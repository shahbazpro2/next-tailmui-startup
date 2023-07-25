const { company } = require('@components/config/company/Details');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || `${company.url}`,
  generateRobotsTxt: true, // (optional)
  // ...other options
};

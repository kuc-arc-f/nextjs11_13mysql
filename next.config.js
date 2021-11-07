module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages/', 'components/', 'lib/', 'graphql/']
  },
  env: {
    COOKIE_KEY_USER_ID: "ap21uid",
    CSRF_SECRET: "secret1234"
  },  
}

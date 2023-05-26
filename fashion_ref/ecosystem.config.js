module.exports = {
  apps : [{
    name   : "FashionRef",
    script : "node_modules/next/dist/bin/next",
    args: "start",
    env_production: {
      APP_ENV: 'prod'
    }
  }]
}

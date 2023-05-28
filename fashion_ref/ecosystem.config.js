module.exports = {
  apps : [{
    name   : "FashionRef",
    script : "node_modules/next/dist/bin/next",
    args: "start -p 8080",
    env_production: {
      APP_ENV: 'prod'
    }
  }]
}

require('dotenv').config();
const env = process.env;

const production = {
  username: env.MYSQL_USERNAME,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  //port: env.MYSQL_PORT
};

const backUrl = env.NODE_ENV === 'production' ? 'http://15.164.224.172:8080' : 'http://localhost:8080';

module.exports = { production, backUrl };
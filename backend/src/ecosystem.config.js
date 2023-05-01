const dotenv = require("dotenv");

dotenv.config({
  path: ".env.deploy",
});

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF = "origin/master",
} = process.env;

module.exports = {
  apps: [
    {
      name: "mesto-backend",
      script: "./dist/app.js",
    },
  ],

  deploy: {
    production: {
      user: "kramarvik",
      host: "51.250.13.190",
      ref: "origin/master",
      repo: "git@github.com:marishka-k/web-plus-pm2-deploy.git",
      path: "/home/kramarvik/web-plus-pm2-deploy/backend",
      "post-deploy":
        "cd backend && npm i && npm run build && pm2 startOrRestart ecosystem.config.js",
    },
  },
};

const dotenv = require("dotenv");
dotenv.config({ path: ".env.deploy" });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF = "origin/master",
} = process.env;

module.exports = {
  apps: [
    {
      name: "mesto-frontend",
      script: "./build/index.html",
    },
  ],

  deploy: {
    production: {
      user: "kramarvik",
      host: "51.250.13.190",
      ref: "origin/master",
      repo: "git@github.com:marishka-k/web-plus-pm2-deploy.git",
      path: "/home/kramarvik/web-plus-pm2-deploy/frontend",
      "post-deploy": "cd frontend && npm i && npm run build"
    },
  },
};

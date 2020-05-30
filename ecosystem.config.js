module.exports = {
  apps: [
    {
      name: "tlc_desktop",
      script: "./app.js",
      exec_interpreter: "./node_modules/.bin/babel-node",
      env: {
        NODE_ENV: "production",
        BASE_PATH: process.env.BASE_PATH,
        PORT: 3000
      }
    }
  ]
};

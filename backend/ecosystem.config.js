module.exports = {
  apps: [
    {
      name: "backend",
      script: "node ./src/index.js",
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
}

// backend/config/index.js

module.exports = {
    environment: process.env.NODE_ENV || 'development',             // Tells your app if it's just practicing (development) or performing for real (production).
    port: process.env.PORT || 8000,                                 // Tells your app where to listen.
    dbFile: process.env.DB_FILE,                                    // Tells your app where to find its diary (database file) to remember things.
    jwtConfig: {                                                    // This part is like a secret decoder ring for messages.
      secret: process.env.JWT_SECRET,                               // To check if the messages are really from your friends.
      expiresIn: process.env.JWT_EXPIRES_IN                         // To see how long the messages are good for.
    }
  };
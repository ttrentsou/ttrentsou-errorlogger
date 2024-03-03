// errorLogger.js

class ErrorLogger {
    constructor() {
      // You can customize this to use any external error tracking service
      // For simplicity, we'll just log errors to the console in this example
    }
  
    logError(error) {
      console.error('Error:', error);
      // You can add additional logic here to send the error to an external service
    }
  }
  
  module.exports = ErrorLogger;
  
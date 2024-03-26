// errorLogger.js

class ErrorLogger {
  constructor(externalService) {
    // Initialize with the external error tracking service
    this.externalService = externalService;
  }

  logError(error) {
    console.error('Error:', error);
    
    // Check if external service is provided and log error to it
    if (this.externalService) {
      this.sendErrorToExternalService(error);
    }
  }

  sendErrorToExternalService(error) {
    // Simulate sending error to external service
    console.log('Sending error to external service:', error);
    // You can implement logic here to actually send the error to the external service
  }
}

module.exports = ErrorLogger;
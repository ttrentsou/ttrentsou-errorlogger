````markdown
# Error Logging and Monitoring Package

Error Logging and Monitoring Package is a simple Node.js package that provides functionality to track and monitor errors in a Node.js application.

## Installation

You can install the package via npm:

```bash
npm install error-logging-package
```

## Usage

```javascript
const ErrorLogger = require('error-logging-package');

// Create an instance of ErrorLogger
const errorLogger = new ErrorLogger();

// Simulate an error
const error = new Error('An example error occurred');

// Log the error using the ErrorLogger
errorLogger.logError(error);
```

## API

### `ErrorLogger`

The `ErrorLogger` class provides functionality to log errors.

#### `logError(error)`

Logs the specified error.

- `error` (Error): The error object to be logged.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

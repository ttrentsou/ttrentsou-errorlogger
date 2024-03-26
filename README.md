````markdown
# Error Logger Package

Error Logger Package is a simple Node.js package that provides functionality to log errors, optionally sending them to an external error tracking service.

## Installation

You can install the package via npm:

```bash
npm install error-logger-package
```

## Usage

```javascript
const ErrorLogger = require('error-logger-package');

// Create an instance of ErrorLogger with optional external error tracking service
const errorLogger = new ErrorLogger(externalService);

// Log an error
const error = new Error('An example error occurred');
errorLogger.logError(error);
```

## API

### `ErrorLogger(externalService)`

The `ErrorLogger` class provides functionality to log errors.

- `externalService` (optional): An instance of an external error tracking service to which errors can be sent.

#### `logError(error)`

Logs the specified error, optionally sending it to the external error tracking service if provided.

- `error` (Error): The error object to be logged.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

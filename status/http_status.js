const SUCCESS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTH_INFO: 203,
    NO_CONTENT: 204,
};

const ERROR = {
    BAD_REQUEST: 400,
    UNOTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
};

module.exports = {
    SUCCESS,
    ERROR,
};
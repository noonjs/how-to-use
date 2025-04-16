# Auth
It's very important to configure CORS correctly if your frontend and backend are on different domains. ☀️ noonjs uses credentials, so improper CORS settings will result in errors.

## config.json
{
    ...
    "cors": {
        "origin": "your-front",
        "credentials": true
    }
    ...
}

## Environment Variables
You can also define your configuration using environment variables for flexibility.

CORS_ORIGIN=your-front
CORS_CREDENTIALS=true
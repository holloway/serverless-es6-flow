const Http = require('./src/utils/Http');

export const helloWorld = (event, context, callback) => {
    const request = Http.parseRequest(event);
    callback(
        null,
        Http.createResponse({
            message: 'Hello World',
            request,
        }, 200)
    );
};

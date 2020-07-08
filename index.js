var AWS = require('aws-sdk');
var ses = new AWS.SES();

var RECEIVER = 'ksims@two8designs.com';
var SENDER = 'no-reply@two8designs.com';

var response = {
    "isBase64Encoded": false,
    "headers": { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    "statusCode": 200,
    "body": "{\"result\": \"Success.\"}"
};

exports.handler = function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
};

function sendEmail(event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'name: ' + event.name + '\nphone: ' + event.phone + '\nemail: ' + event.email + '\nsite Obj: ' + event.siteObj + '\nsite Addr: ' + event.siteAddr + '\ndeadline: ' + event.deadline + '\nnumberOfPages: ' + event.numberOfPages + '\nhaveLogo: ' + event.haveLogo + '\nneedHosting: ' + event.needHost + '\ncurrHost: ' + event.currHost + '\nuseExistSite: ' + event.useExistSite + '\nmodern: ' + event.siteImpress1 + '\nuserfriendly: ' + event.siteImpress2 + '\nbold: ' + event.siteImpress3 + '\ncorporate: ' + event.siteImpress4 + '\nfun: ' + event.siteImpress5 + '\nsforwardthinking: ' + event.siteImpress6 + '\ninnovative: ' + event.siteImpress7 +  '\nbright: ' + event.siteImpress8 +  '\ncalming: ' + event.siteImpress9 +  '\nelegant: ' + event.siteImpress10 +  '\nclean: ' + event.siteImpress11 + '\nminimal: ' + event.siteImpress12 +   '\ntargAudience: ' + event.targAudience + '\nsiteImages: ' + event.siteImages +  '\ncolorScheme: ' + event.colScheme +  '\nneedCommerce: ' + event.needCommerce +  '\ncompetition: ' + event.comp +  '\nfavorites: ' + event.fav + '\naddComments: ' + event.addComments,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Survey Form: ' + event.name,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params, done);
}
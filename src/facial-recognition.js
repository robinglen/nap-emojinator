const request = require('request').defaults({
    encoding: null
});
const KEY = process.env.API_KEY

const facialRecognition = {

    _encodeImage: (imageUrl, callback) => {
        request.get({
            url: imageUrl,
            encoding: 'binary'
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const encodedImage = new Buffer(body, 'binary').toString('base64')
                callback(encodedImage)
            } else {
                console.log('error');
                console.log(imageUrl);
            }
        });
    },

    _requestObject: (imageUrl, callback) => {
        facialRecognition._encodeImage(imageUrl, (base64) => {
            callback({
                requests: [{
                    image: {
                        content: base64
                    },
                    features: [{
                        type: 'FACE_DETECTION',
                        maxResults: 10
                    }, {
                        type: 'LABEL_DETECTION',
                        maxResults: 10
                    }]
                }]
            })
        })
    },

    requestImage: (imageUrl, callback) => {
        const API = `https://vision.googleapis.com/v1/images:annotate?key=${KEY}`
        facialRecognition._requestObject(imageUrl, (req) => {
            request({
                method: "POST",
                url: API,
                json: req
            }, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    if (body.responses[0].faceAnnotations) {
                        callback(body.responses[0].faceAnnotations)
                    } else {
                        console.log('error');
                        callback({})
                    }
                } else {
                    console.log('error 2')
                }
            });
        })
    }
}

module.exports = facialRecognition

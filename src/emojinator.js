const emoji = require('node-emoji')
const emojinator = {
    _emoji: {
        core: {
            joy: emoji.get('joy'),
            sorrow: emoji.get('disappointed_relieved'),
            anger: emoji.get('rage'),
            surprised: emoji.get('flushed'),
            headwear: emoji.get('tophat')
        },
        states : {
            confused: emoji.get('confused'),
            robot: emoji.get('robot')
        }
    },
    _score: (likelihood) => {
        var score = 0
        switch(likelihood) {
            case 'VERY_UNLIKELY':
                score = 1
                break;
            case 'UNLIKELY':
                score = 2
                break;
            case 'UNLIKELY':
                score = 2
                break;
            case 'POSSIBLE':
                score = 3
                break;
            case 'LIKELY':
                score = 3
                break;
            case 'VERY_LIKELY':
                score = 4
                break;
            default:
                score = 0
        }
        return score
    },
    init: (facialRecognition) => {
        var total = 0
        const scores = {
            joy: emojinator._score(facialRecognition.joyLikelihood),
            sorrow: emojinator._score(facialRecognition.sorrowLikelihood),
            anger: emojinator._score(facialRecognition.angerLikelihood),
            surprised: emojinator._score(facialRecognition.surpriseLikelihood),
            headwear: emojinator._score(facialRecognition.headwearLikelihood)
        }
        for(var emotion in scores) {
            total = total + scores[emotion]
        }
        scores.total = total;
        return scores
    }
}

module.exports = emojinator

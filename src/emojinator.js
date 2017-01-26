const emoji = require('node-emoji')
const emojinator = {
    emoji: () => {
        core: {
            joy: emoji.get('joy'),
            sorrow: emoji.get('disappointed_relieved'),
            anger: emoji.get('rage'),
            confused: emoji.get('flushed')
            headwear: emoji.get('tophat')
        },
        states : {
            confused: emoji.get('confused'),
            robot: emoji.get('robot')
        }
    },
    score: (likelihood) => {
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
        return score
    }
}

module.exports = emojinator

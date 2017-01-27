const emoji = require('node-emoji')
const emojinator = {
  _emoji: {
    joy: emoji.get(':joy:'),
    sorrow: emoji.get('disappointed'),
    anger: emoji.get('rage'),
    surprised: emoji.get('flushed'),
    confused: emoji.get('confused'),
    robot: emoji.get(':robot_face:')
  },

  _tallyPoints: (likelihood) => {
    var score = 0
    switch (likelihood) {
      case 'VERY_UNLIKELY':
        score = 1
        break
      case 'UNLIKELY':
        score = 2
        break
      case 'POSSIBLE':
        score = 3
        break
      case 'LIKELY':
        score = 3
        break
      case 'VERY_LIKELY':
        score = 4
        break
      default:
        score = 0
    }
    return score
  },
  _score: (facialRecognition) => {
    var scores = {}
    var total = 0
    if (facialRecognition && facialRecognition.joyLikelihood) {
      scores = {
        emotions: {
          joy: emojinator._tallyPoints(facialRecognition.joyLikelihood),
          sorrow: emojinator._tallyPoints(facialRecognition.sorrowLikelihood),
          anger: emojinator._tallyPoints(facialRecognition.angerLikelihood),
          surprised: emojinator._tallyPoints(facialRecognition.surpriseLikelihood)
        }
      }
      for (var emotion in scores.emotions) {
        total = total + scores.emotions[emotion]
      }
    }
    scores.total = total
    return scores
  },

  _strongestEmotion: (obj) => {
    return Object.keys(obj).reduce(function (a, b) { return obj[a] > obj[b] ? a : b })
  },

  _emojinate: (score) => {
    var status = {}
    if (score.total <= 4) {
      status.name = 'robot'
      status.emoji = emojinator._emoji.robot
    } else {
      var emotion = emojinator._strongestEmotion(score.emotions)
      status.name = emotion
      status.emoji = emojinator._emoji[emotion]
      status.score = score.emotions[emotion]
    }
    return status
  },

  init: (facialRecognition) => {
    const score = emojinator._score(facialRecognition)
    return emojinator._emojinate(score)
  }
}

module.exports = emojinator

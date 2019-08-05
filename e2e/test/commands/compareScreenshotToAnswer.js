const fs = require("fs");
const SAVED_DIR = 'screenshots/saved'
const ANSWER_DIR = 'screenshots/answer'
const DIFF_DIR = 'screenshots/diff'

exports.command = function (url, expected, callback) {
  const self = this
  const basename = url.split('//')[1].replace(/\//g, '-')
  const filename = basename + '.png'
  const savedPath = `${SAVED_DIR}/${filename}`
  const answerPath = `${ANSWER_DIR}/${filename}`

  self.url(url).saveScreenshot(savedPath, function (response) {
    if (fs.existsSync(answerPath)) {
      self.assert.compareImages(savedPath, answerPath, DIFF_DIR, expected, function (result) {
        if (typeof callback === 'function') {
          callback.call(self, result);
        }
      })
    } else {
      console.log("Answer image does not exist, saving this screen shot as the answer image.")
      fs.renameSync(savedPath, answerPath)
    }
  })

  return this; // allows the command to be chained.
};

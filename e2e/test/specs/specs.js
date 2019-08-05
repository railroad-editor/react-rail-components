const BASE_URL = "http://localhost:3000"

const PATHS = [
  "/1",
  "/2",
  "/3_1",
  "/3_2",
  "/3_3",
  "/3_4",
  "/4_1",
  "/4_2",
  "/4_3",
  "/4_4",
  "/5_1",
  "/5_2",
  "/6_1",
  "/6_2",
  "/7_1",
  "/8_1",
  "/8_2",
  "/9",
]

module.exports = {
  'Test all cases': function(browser) {
    PATHS.forEach(p => {
      browser.compareScreenshotToAnswer(BASE_URL + p)
    })
    browser.end()
  }
};

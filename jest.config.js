module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ["js", "json", "vue"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/resources/js/src$1",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "vue-jest"
  } 
}

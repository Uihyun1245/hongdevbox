const env = require('./env-config')
{
	"presets": [
	  "next/babel"
	],
	"plugins": [
	  ["transform-define",env]
	]
  }
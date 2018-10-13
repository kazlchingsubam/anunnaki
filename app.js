const express = require('express')
const app = express()

const port = process.env.PORT || 8080

app.use(express.static('public'))

app.listen(port, function(){
	console.log('Serving js libraries to save the world!')
})
import express from 'express';
import { ChainId } from '@uniswap/sdk'

const app = express()

app.get('/', function (req, res) {
	res.send('Hello World!')
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
	console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)
})

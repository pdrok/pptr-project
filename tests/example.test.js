const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
	it('should launch the browser', async function () {
		const browser = await puppeteer.launch({
			headless: false,
			slowMo: 10,
			devtools: false,
		})
		const page = await browser.newPage()
		await page.goto('http://example.com/')
		await page.waitForSelector('h1')
		await page.goto('https://dev.to')
		await page.waitForSelector('#navigation-progress')
		await page.goBack()
		await page.waitForSelector('h1')
		await page.goForward()
		await page.waitForSelector('#navigation-progress')
		await browser.close()
	})
})

// use waitForTimeout(1000) instead of waitFor(1000)

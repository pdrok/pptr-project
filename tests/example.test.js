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
		await page.waitForTimeout(3000)
		await page.waitForSelector('h1')
		await page.reload()
		await page.waitForTimeout(3000)
		await page.waitForSelector('h1')
		await browser.close()
	})
})

// use waitForTimeout(1000) instead of waitFor(1000)

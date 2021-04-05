const puppeteer = require('puppeteer')
describe('Login Test', () => {
	let browser
	let page

	before(async function () {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 0,
			devtools: false,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(200000)
	})

	after(async function () {
		await browser.close()
	})

	it('Login Test - Invalid Credentials', async function () {
		await page.goto('http://zero.webappsecurity.com/')
		await page.waitForSelector('#signin_button')
		await page.click('#signin_button')
		await page.waitForSelector('#login_form')
		await page.type('#user_login', 'invalid creds')
		await page.type('#user_password', 'invalid password')
		await page.click('#user_remember_me')
		await page.click('input[type="submit"]')
		await page.waitForSelector('.alert-error')
	})

	it('Login Test - Valid Credentials', async function () {
		await page.goto('http://zero.webappsecurity.com/')
		await page.waitForSelector('#signin_button')
		await page.click('#signin_button')
		await page.waitForSelector('#login_form')
		await page.type('#user_login', 'username')
		await page.type('#user_password', 'password')
		await page.click('#user_remember_me')
		await page.click('input[type="submit"]')
		await page.waitForSelector('#details-button')
		await page.click('#details-button')
		await page.waitForSelector('#proceed-link')
		await page.click('#proceed-link')
		await page.waitForSelector('#settingsBox')
	})
})

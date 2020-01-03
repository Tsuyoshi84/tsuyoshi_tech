import puppeteer, { Page, Browser } from 'puppeteer'

describe('Web site', () => {
  const BASE_URL = 'http://localhost:3000'
  let browser: Browser
  let page: Page

  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  afterAll(async () => {
    await browser.close()
  })

  describe('top page', () => {
    beforeAll(async () => {
      await page.goto(BASE_URL)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Tsuyoshi Yamaguchi')
    })
  })

  describe('skills page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/skills`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Skills')
    })
  })

  describe('projects page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/projects`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Projects')
    })
  })

  describe('experiene page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/experience`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Experience')
    })
  })

  describe('contact page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/contact`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Contact')
    })
  })
})

import puppeteer, { Page, Browser } from 'puppeteer'
import { percySnapshot } from '@percy/puppeteer'

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
      await percySnapshot(page, 'Top page')
    })
  })

  describe('skills page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/skills`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Skills')
      await percySnapshot(page, 'Skills page')
    })
  })

  describe('projects page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/projects`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Projects')
      await percySnapshot(page, 'Projects page')
    })
  })

  describe('contact page', () => {
    beforeAll(async () => {
      await page.goto(`${BASE_URL}/contact`)
    })

    it('should exist', async () => {
      await expect(page.title()).resolves.toMatch('Contact')
      await percySnapshot(page, 'Contact page')
    })
  })
})

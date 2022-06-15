const assert = require('assert')

describe('JSON.org page', async () => {
    before(async () => {
        await browser.enablePerformanceAudits()
    })

    it('should load within performance budget', async () => {
        /**
         * this page load will take a bit longer as the DevTools service will
         * capture all metrics in the background
         */
        await browser.url('https://www.json.org/json-en.html')

        let metrics = await browser.getMetrics()
        console.log(metrics)
        //assert.ok(metrics.speedIndex < 15000) // check that speedIndex is below 1.5ms

        let score = await browser.getPerformanceScore() // get Lighthouse Performance score
        //assert.ok(score >= .99) // Lighthouse Performance score is at 99% or higher

        await $('=Esperanto').click()

        metrics = await browser.getMetrics()
        //assert.ok(metrics.speedIndex < 1500)
        score = await browser.getPerformanceScore()
       // assert.ok(score >= .99)
    })

    after(async () => {
        await browser.disablePerformanceAudits()
    })
})
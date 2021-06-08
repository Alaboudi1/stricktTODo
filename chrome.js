puppeteer = require('puppeteer');
SourceMapConsumer = require("source-map").SourceMapConsumer;
fs = require('fs');
fetch = require("node-fetch");
pti = require('puppeteer-to-istanbul');

(async () => {
  const rawSourceMap = await (await fetch("http://localhost:3000/static/js/main.chunk.js.map")).json();

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
  page.coverage.startJSCoverage();
  await page.evaluate(() => {
    document.getElementById('button2').click();
    // document.getElementById('button').click();
    document.getElementById('button3').click();

  });
  const coverage = await page.coverage.stopJSCoverage();
  const consumer = await SourceMapConsumer(rawSourceMap)

  console.log(consumer.sources);
  // [ 'http://example.com/www/js/one.js',
  //   'http://example.com/www/js/two.js' ]
  let locations = {"0":{"type":"branch","loc":{"start":{"line":300,"column":0},"end":{"line":309,"column":15}},"locations":[{"start":{"line":300,"column":0},"end":{"line":309,"column":15}}]},"1":{"type":"branch","loc":{"start":{"line":309,"column":17},"end":{"line":312,"column":15}},"locations":[{"start":{"line":309,"column":17},"end":{"line":312,"column":15}}]},"2":{"type":"branch","loc":{"start":{"line":315,"column":3},"end":{"line":385,"column":1}},"locations":[{"start":{"line":315,"column":3},"end":{"line":385,"column":1}}]}}
  let line = Object.entries(locations).flatMap(([k, e]) => [consumer.originalPositionFor({
    line: e.loc.start.line,
    column: e.loc.start.column
  }),
  consumer.originalPositionFor({
    line: e.loc.end.line,
    column: e.loc.end.column
  })
  ])
  console.log(line)
  pti.write(coverage, { includeHostname: true , storagePath: './.nyc_output' })
  // { source: 'http://example.com/www/js/two.js',
  //   line: 2,
  //   column: 10,
  //   name: 'n' }


  try {
    const data = fs.writeFileSync('./test.json', JSON.stringify(line))
    const data2 = fs.writeFileSync('./coverage.json', JSON.stringify(coverage[1]))

    //file written successfully
  } catch (err) {
    console.error(err)
  }
  await browser.close();
})();
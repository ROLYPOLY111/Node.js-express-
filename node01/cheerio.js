const cheerio = require('cheerio');

let $ = cheerio.load('<div><p>���</p><img src="sdafa" /></div>')

console.log($('img').attr('src'))
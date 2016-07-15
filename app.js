var colors = require('colors');
var Crawler = {
	request : null,
	cheerio : null,
	fs      : null,
  colors  : null,
	init : function(){
		Crawler.request = require('request');
		Crawler.cheerio = require('cheerio');
    Crawler.fs      = require('fs');
		Crawler.colors      = require('colors');
		Crawler.getMovies();
	},
	getMovies: function(){

      Crawler.request('https://www.packtpub.com/packt/offers/free-learning', function(err, res, body){
  			if(err)
  				console.log('Error: ' + err);
  			var $ = Crawler.cheerio.load(body);
        var livro  =  $('#deal-of-the-day > div > div > div.dotd-main-book-summary.float-left > div.dotd-title > h2').html().toString().trim();

        console.log('\n\t' + livro.green + '\n');

        Crawler.fs.appendFile('log.txt', livro+' '+ new Date().toString() + '\n');
  		});

	}
};
Crawler.init();

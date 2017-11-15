// From the Scotch.io tutorial which can be found
// here: https://scotch.io/tutorials/scraping-the-web-with-node-js
var express    = require('express');
var fs         = require('fs');
var request    = require('request');
var cheerio    = require('cheerio');
var app        = express();
app.get('/', (req, res) =>{
   const url = "http://rosettacode.org/wiki/Category:Programming_Tasks";
   var json = {tasks: []};
   request(url, (error, response, html)=>{
      if(!error){
         var $ = cheerio.load(html);
         var search = '.mw-category';
         var subcategories = $('.mw-category-group').children();
         for(var i = 0; i < subcategories.length; i++){
            var subcat = subcategories.get(i);
            if(subcat.name == 'ul'){
               var sub = subcat.children;
               for(var j = 0; j < sub.length; j++){
                  if(sub[j].name=='li'){
                     var attribs =sub[j].children[0].attribs;
                     var subtitle = attribs.title;
                     console.log("title: " + subtitle);
                     var sublink = 'http://rosettacode.org'+attribs.href;
                     console.log("link: " + sublink);
                     json.tasks.push({title: subtitle, link: sublink});
                  }
               }
            }
         }
      }
      writeF(json);
   });
});
function writeF(json){
   fs.writeFile('output.json', JSON.stringify(json, null, 4), (err)=>{
      if(err){
         console.log("something went wrong! ", err);
      }
      else{
         console.log("cool beans, check your project directory for the output");
      }
   });
}
app.listen('8081');

console.log("magic happening on port 8081");
exports = module.exports = app;
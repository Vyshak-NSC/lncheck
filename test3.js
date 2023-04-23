import fetch from "node-fetch";
import cheerio from "cheerio";

const url = "https://readnovelfull.me/dimensional-descent/";

fetch(url)
  .then((response) => response.text())
  .then((html) => {
	      const $ = cheerio.load(html);
	      const latestChapter = $("div.item-value a[href^='/dimensional-descent/chapter']")
	        .first()
	        .attr("title");
	      console.log(`Latest chapter: ${latestChapter}`);
	    })
  .catch((error) => {
	      console.log(`Error fetching ${url}: ${error}`);
	    });


//for headlines
var url = 'https://newsapi.org/v2/top-headlines?'+
'country=in&'+
'apiKey=8857ddfa72ae47238500738f55cc70f1'; 
let httpGetAsync = (theUrl, callback) => {
// AJAX
var xmlHttp = new XMLHttpRequest();

// function which executes when state of your request changes
xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        // this is the important line
        callback(xmlHttp.responseText);
    }
}

xmlHttp.open("GET", theUrl, true); // true for asynchronous 
xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlHttp.send(null);
}

let nodeCreated = `
<li class="article">
  <img class="article-img" src="IMG-20180709-WA0015.jpg" alt="image" style="width:100%">
  <h2 class="article-title"> hello hii</h2>
  <p class="article-description">hxjhsgyghwyugyuvyux6fwxgfw</p>
  <span class="article-author" style="display: block;"> shaikh.a.a</span>
  <a class="article-link" href="google.com"> hhjh</a>
</li>

`;

let output = "";



let makeSomeHTML = (response) => {
let obj = JSON.parse(response);
let dataArr = obj["articles"];
  for (let i = 0; i < dataArr.length; i++) {
      let currObj = dataArr[i];
      let atitle = currObj["title"];
      let aauthor = currObj["author"];
      let adescription = currObj["description"];
      let aimage = currObj["urlToImage"];
      let alink = currObj["url"];
      let outTemplate = `
             <li class="article">
                  <img  class="article-img" src="${aimage}" alt="image" style="width:100%" ><br><br>
                  <h2 class="article-title"> ${atitle}</h2><br>
                  <p class="article-description">${adescription}</p><br>
                  <span class="article-author" style="display: block;"> ${aauthor}</span><br>
                  <a class="article-link" href="${alink}">link to page </a>
            </li>    
        `;
    output = output+ outTemplate;
    
  
}



document.querySelector('#news-articles').innerHTML = output;
}
httpGetAsync(url, makeSomeHTML);



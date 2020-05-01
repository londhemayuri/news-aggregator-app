const searchFrom = document.querySelector(".form-search");
const input = document.getElementById("search");
searchFrom.addEventListener('submit',retrieve)
 const na =document.getElementsByClassName('news-articles');

function retrieve(e){
  e.preventDefault() 
  let topic=input.value;
       let url =   `https://newsapi.org/v2/everything?q=${topic}&apiKey=8857ddfa72ae47238500738f55cc70f1`
    
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
 
 let select=document.querySelector('.selector');
if(obj.totalResults==0){
    alert("Keyword not match found");
    select.innerHTML=`<div class="not-found" >data not found</div>`;
}
 
 document.querySelector('#news-articles').innerHTML = output;
}
httpGetAsync(url, makeSomeHTML);
}




// reload
var btn = document.querySelector("#clearbtn");

btn.addEventListener("click", function(e){

    e.preventDefault();

    location.reload(true);

});
const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
let urll = "https://api.jsonbin.io/v3/b/63e76223ebd26539d07b49f4";
// fetch(urll, {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// })
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response))).then(
  
// )
  
app.get('/news', (req, res) => {
  fetch(urll, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json()).then(response => console.log(JSON.stringify(response)))

})






// fetch(urll, {
//     method: 'POST'
// })
//    .then(response => response.json())
  //  .then(json => console.log(json))

  // const fetch = require('node-fetch');

  // // let url = "https://www.reddit.com/r/popular.json";
  
  // let settings = { method: "GET" };
  
  // fetch(urll, settings)
  //     .then(res => res.json())
  //     .then((json) => {
  //         // do something with JSON
  //     });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     })

// app.get('/newscategory', (req, res) => {
// res.send([
//     {"id":1, "name":"Их уншсан"},
//     {"id":2, "name":"Эрэлттэй"},
//     {"id":1, "name":"Цаг үе"},
//     {"id":1, "name":"Спорт"},
//     {"id":1, "name":"Олон улс"},
// ])
// })
 
// const server = http.createServer(async (req, res) => {
//   const urlObj = url.parse(req.url); // url parse хийж хэрэгтэй мэдээллүүдийг обжект хэлбэрээр хадгална
//   const query = queryString.parse(urlObj.query); // {category: '1'}
//   const path = Object.keys(query)[0]; // path name

//   // data duudah
//   const result = await fetch(
//     "https://api.jsonbin.io/v3/b/63e76223ebd26539d07b49f4  ");
//   // JSON ruu hurvuuleh
//   const data = await result.json();
//   }
// );
// const fetch = require('node-fetch');
// let urll = "https://api.jsonbin.io/v3/b/63e76223ebd26539d07b49f4";
// async function hehe (req, res){
//   await fetch(urll).then(res => res.json())

// }

// hehe();
// let urll = "https://api.jsonbin.io/v3/b/63e76223ebd26539d07b49f4";
// fetch(urll)
// .then(res => res.json())
// .then(text => JSON.parse(text.slice(1)))
// .then(json => console.log(json.pageItems))

// let settings = { method: "Get" };

// fetch(urll, settings)
//     .then(res => res.json())
//     .then((json) => {
//         // do something with JSON
//     });
// const json = await fetch(urll).then(res => res.json())

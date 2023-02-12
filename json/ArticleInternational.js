const express = require('express');
const app = express();
const port = 3001;

class Article {
    constructor(image, title, admin, time, views, comments, desc) {
        this.image = image;
        this.title = title;
        this.admin = admin;
        this.time = time;
        this.views = views;
        this.comments = comments;
        this.desc = desc;
    }

    render() {
        return `<article class="news-con">
                  <section class="news-container">
                    <div class="min-con">
                      <div class="news">
                        <img src="${this.image}" class="img">
                        <div class="desc">
                          <strong class="news-title">${this.title}</strong>
                          <div class="news-info">
                            <p class="admin">${this.admin}</p>
                            <p class="time">${this.time}</p>
                            
                            <div class="icon">
                              <svg class="svg" width="22" height="16" viewBox="0 0 22 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M20.9199 7.6C18.8999 2.91 15.0999 0 10.9999 0C6.89994 0 3.09994 2.91 1.07994 7.6C1.02488 7.72617 0.99646 7.86234 0.99646 8C0.99646 8.13766 1.02488 8.27383 1.07994 8.4C3.09994 13.09 6.89994 16 10.9999 16C15.0999 16 18.8999 13.09 20.9199 8.4C20.975 8.27383 21.0034 8.13766 21.0034 8C21.0034 7.86234 20.975 7.72617 20.9199 7.6ZM10.9999 14C7.82994 14 4.82994 11.71 3.09994 8C4.82994 4.29 7.82994 2 10.9999 2C14.1699 2 17.1699 4.29 18.8999 8C17.1699 11.71 14.1699 14 10.9999 14ZM10.9999 4C10.2088 4 9.43546 4.2346 8.77766 4.67412C8.11987 5.11365 7.60718 5.73836 7.30443 6.46927C7.00168 7.20017 6.92246 8.00444 7.0768 8.78036C7.23114 9.55628 7.61211 10.269 8.17152 10.8284C8.73093 11.3878 9.44366 11.7688 10.2196 11.9231C10.9955 12.0775 11.7998 11.9983 12.5307 11.6955C13.2616 11.3928 13.8863 10.8801 14.3258 10.2223C14.7653 9.56448 14.9999 8.79113 14.9999 8C14.9999 6.93913 14.5785 5.92172 13.8284 5.17157C13.0782 4.42143 12.0608 4 10.9999 4ZM10.9999 10C10.6044 10 10.2177 9.8827 9.8888 9.66294C9.55991 9.44318 9.30356 9.13082 9.15219 8.76537C9.00081 8.39991 8.9612 7.99778 9.03837 7.60982C9.11554 7.22186 9.30603 6.86549 9.58573 6.58579C9.86544 6.30608 10.2218 6.1156 10.6098 6.03843C10.9977 5.96126 11.3999 6.00087 11.7653 6.15224C12.1308 6.30362 12.4431 6.55996 12.6629 6.88886C12.8826 7.21776 12.9999 7.60444 12.9999 8C12.9999 8.53043 12.7892 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 10.9999 10Z"
                                  fill="#007FDA" />
                              </svg>
                              ${this.views}
                              <svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M10 0C4.5 0 5.21541e-08 4.5 5.21541e-08 10C5.21541e-08 12.3 0.8 14.5 2.3 16.3L0.3 18.3C-0.1 18.7 -0.1 19.3 0.3 19.7C0.5 19.9 0.7 20 1 20H10C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM6 11C5.4 11 5 10.6 5 10C5 9.4 5.4 9 6 9C6.6 9 7 9.4 7 10C7 10.6 6.6 11 6 11ZM10 11C9.4 11 9 10.6 9 10C9 9.4 9.4 9 10 9C10.6 9 11 9.4 11 10C11 10.6 10.6 11 10 11ZM14 11C13.4 11 13 10.6 13 10C13 9.4 13.4 9 14 9C14.6 9 15 9.4 15 10C15 10.6 14.6 11 14 11Z"
                                  fill="#007FDA" />
                              </svg>
                              ${this.comments}
                            </div>
                          </div>
                          <div class="news-desc">${this.desc}</div>
                        </div>
                      </div>
                    </div>
                    <hr>
                  </section>
                </article>`;
    }
}

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    database: 'article',
    user: 'postgres',
    password: 'password',
});

client.connect();

app.get('/international', (req, res) => {
    let value = "";
    const query = `SELECT * FROM article_international`;

    client.query(query, (error, result) => {
        if (error) {
            console.error(error);
        } else {
            const jsonData = result.rows.map((row) => {
                const obj = {};
                for (const key in row) {
                    if (row.hasOwnProperty(key)) {
                        obj[key] = row[key];
                    }
                }
                return obj;
            });

            for (const article of jsonData) {
                let articleObj = new Article(article.imageThumbnail, article.titleArticle, article.adminName, article.timeSince, article.viewCount, article.commentCount, article.descShort);
                value += articleObj.render();
            }
        }
    });

    const myInterval = setInterval(function () {
        if(value != ""){
            clearInterval(myInterval);
            res.send(`
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
          <style>
          .header {
            width: 75%;
            margin: auto;
            margin-bottom: 2rem;
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            padding: 0;
        }
        
        .header-ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 1rem;
        }
        
        .header-logo {
            background: url('data:image/png;base64,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') no-repeat;
            background-position: center center;
            width: 10rem;
            height: 5rem;
        }
        
        
        .header-ul li a {
            text-align: center;
            color: black;
            text-decoration: none;
            padding: 1rem;
        }
        
        .header-ul li a:hover {
            background-color: rgba(1, 135, 244, 1);
            color: white;
        }
        :root {
            --primary-color: rgba(1, 135, 244, 1)
          }
          body {
            display: block;
            margin: 8px;
          }
          
          .display{
            float: left;
          }
          .world-map {
            display: flex;
            gap: 1rem;
            flex-direction: column;
          }
          
          .world-map h2 {
            width: fit-content;
            border-bottom: solid 0.2em var(--primary-color);
          }
          
          .world-map img {
             width: 100%;
          }
          
          .ediinzasag{
            width: 75vw;
          }
          
          h2{
            font-family: Helvetica Neue,sans-serif;
            margin: 0 0 20px 0;
          }
          
          .homepage-container {
            width: 75%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            align-items: center;
          }
          .anu-title {
            text-decoration: underline;
            text-underline-offset: 12px;
            text-decoration-thickness: 4px;
            text-decoration-color: var(--primary-color);
            text-align: center ;
          }
          .news-con {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: -40px;
            display: flex;
          }
          
          .title {
            font-family: "Fira Sans Condensed", sans-serif;
            font-size: 25px;
            margin-top: -90px;
          }
          .ediinzasag{
            text-decoration: underline;
            text-underline-offset: 12px;
            text-decoration-thickness: 4px;
            text-decoration-color: var(--primary-color);
            text-align:start;
          }
          
          .page-container{
            width: 100%;
          }
          
          .min-con {
            width: 75vw;
            text-align: justify;
          }
          
          hr {
            border: none;
            background-color: rgb(0, 127, 218);
            border-top: 1px solid var(--primary-color);
            height: 0;
            margin: 15px 0;
            width: 75vw;
            flex-direction: column;
            gap: 3rem;
          }
          
          .news {
            width: 50vw;
            height: 20vh;
            margin-top: 5vh;
            display: flex;
          }
          
          .img {
            height: 130px;
            width: 150px;
          }
          
          .desc {
              width: 40vw;
              height: 17vh;
              margin-left: 2vw;
              width: 62vw;
          }
          
          .news-title {
              margin: 0px;
              font-family: "Fira Sans Condensed", sans-serif;
              cursor: pointer;
              width: 62vw;
          }
          
          .news-info {
              width: 25vw;
              height: 4vh;
              margin-top: 1.5vh;
              display: flex;
          }
          
          .admin {
            font-family: 'Fira Sans', sans-serif;
            border-left: var(--primary-color) solid 3px;
            padding-left: 1vh;
            width: 4vw;
            margin: 0px;
            height: 3vh;
            font-size: 15px;
            display: flex;
            align-items: center;
          }
          
          .time {
          height: 3vh;
          margin: 0px;
          width: 10vw;
          font-family: 'Fira Sans', sans-serif;
          color: gray;
          font-size: 15px;
          display: flex;
          align-items: center;
          }
          
          .icon {
            height: 3vh;
            display: flex;
            align-items: center;
            font-size: 15px;
            font-family: 'Fira Sans', sans-serif;
          }
          
          .svg {
          padding-right: 1vh;
          margin-left: 1vh;
          }
          
          .news-desc {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40vw;
            font-family: 'Fira Sans', sans-serif;
            font-size: 14px;
            color: gray;
            width: 62vw;
          }
          
          .pagination {
            display: inline-block;
            justify-content: center;
          }
          
          .pagination a {
            color: black;
            float: left;
            padding: 8px 16px;
            text-decoration: none;
            transition: background-color .3s;
          }
          
          .pagination a.active {
            background-color: var(--primary-color);
            color: white;
          }
          .center {
            text-align: center;
          }
          
          </style>
        
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
          <title>internationalNews</title>
        </head>
        
        <body>
          <header class="header">
            <ul class="header-ul">
              <a href="/index.html" class="header-logo"></a>
              <li><a href="/society.html"> Нийгэм, улс төр </a></li>
              <li><a href="/international.html">Олон улс</a></li>
              <li><a href="/economy.html">Эдийн засаг</a></li>
              <li><a href="/exchange.html">Валютын ханш</a></li>
            </ul>
            <i class="material-icons">search</i>
          </header>
        
          <div class="homepage-container">
            <section class="world-map">
              <h2> Олон улсын мэдээ</h2>
            </section>
            <section id="section-title">
              <h3 class="anu-title ">Америкийн Нэгдсэн Улс</h3>
            </section>
            ${value}  
            <div class="center">
            <div class="pagination">
                <a href="#">&laquo;</a>
                <a href="#" class="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
            </div>
            </div>
        
            </div>
        </body>
        </html>
        `)}
    }, 1000);

    
})

app.listen(port, () => console.log(`Listening to ${port}!`))
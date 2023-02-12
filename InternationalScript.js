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

function renderArticles(articles, element) {
    let value = "";

    for (const article of articles) {
        console.log("desc ", article.desc);
        let articleObj = new Article(article.image, article.title, article.admin, article.time, article.views, article.comments, article.desc);
        value += articleObj.render();
    }

    document.getElementById(element).insertAdjacentHTML("afterend", value);
}

const { Client } = require('pg');
const client = new Client({
    host: 'localhost',
    database: 'article',
    user: 'postgres',
    password: 'password',
});

client.connect();

const query = `SELECT * FROM mytable`;

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
    console.log("jsonData: ",jsonData);
  }
});

window.onload = () => renderArticles("", "section-title");
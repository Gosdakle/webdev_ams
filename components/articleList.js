import "./article.js"

class ArticleList extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = String.raw`
        <style> 
            .article-list{
                display:flex;
                gap: 1rem;
                flex-wrap: wrap;
            }
            .article-list > article-society{
                flex: 1 1;
            }
        </style>

        <div class="article-list">
            <article-society value="1"></article-society>
            <article-society value="3"></article-society>
            <article-society value="5"></article-society>
        </div>`;
    }
}

customElements.define('article-list', ArticleList);
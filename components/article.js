const newsData = {
    articles: [
        {
            "image": "/images/ulstur.jpeg",
            "title": "Монгол Улсын Үндсэн хуулийн амин сүнс бол уг хуулийн 3 дугаар зүйлийн нэг дэх заалт",
            "admin": "Номин",
            "time": "9 цагийн өмнө",
            "views": 627,
            "comments": 12,
            "desc": "Үндсэн хуулийн 3 дугаар зүйлийн нэгд: “Монгол Улсад засгийн бүх эрх ард түмний мэдэлд байна. Монголын ард түмэн төрийн үйл хэрэгт шууд оролцож, мөн сонгож байгуулсан төрийн эрх барих төлөөлөгчдийн байгууллагаараа уламжлан энэхүү эрхээ эдлэнэ“ гэж заасан байдаг. Энэ заалт манай улсын Үндсэн Хуулийн амин сүнс нь юм гэдгийг ойлгохын тулд дараах асуудалд ямар хариулт байхыг бодох хэрэгтэй."
        },
        {
            "image": "/images/ulstur2.jpeg",
            "title": "Хүүхдийн мөнгийг Халамжийн сан руу шилжүүлсэн нь УИХ, Засгийн газрын буруу",
            "admin": "Хулан",
            "time": "5 цагийн өмнө",
            "views": 938,
            "comments": 5,
            "desc": "2023 оны Төсвийн тухай хууль хэрэгжиж эхэлсний дараа Хүүхдийн мөнгийг нийт хүүхдийн 91 хувьд олгож байгаа нь Үндсэн хууль зөрчсөн талаар иргэдийн зүгээс Үндсэн хуулийн цэцэд гомдол гаргаад байгаа билээ. Төсвийн хэлэлцүүлгийн үеэр багагүй маргаан дагуулсан нь эрх баригч нам хүч түрэн баталсан Төсвийн тухай хууль хэрэгжиж эхэлмэгцээ эздээ Цэцэд  дуудав. УИХ-ын дарга Г.Занданшатар ч хэд хоногийн өмнө Сангийн яамныхантай уулзахдаа “Хүүхдийн мөнгө бол халамж биш, Үндсэн хуулийн зөрчил үүсгэлээ” хэмээн бангадсан байсан."
        },
        {
            "image": "/images/ediinz zasag2.jpeg",
            "title": "Газрын тосны үйлдвэртэй болсноор 1000 ажлын байр бий болж, ДНБ-ийг 10 хувиар нэмнэ",
            "admin": "Сүх",
            "time": "2 цагийн өмнө",
            "views": 1538,
            "comments": 63,
            "desc": "Амьдран суух зориулалтаар анх удаа орон сууц худалдан авсан, эсвэл байшин барьсан иргэд татварын буцаан олголтод хамрагдан хуулийн хугацаа 2022 оны хоёрдугаар сарын 15-нд дуусна."
        },
        {
            "image": "/images/ediinzasag5.jpeg",
            "title": "Ажлын байрны цомхтгол хийж буй ээлжит технологийн компани нь “IBM” болов",
            "admin": "Төмөр",
            "time": "4 цагийн өмнө",
            "views": 1332,
            "comments": 32,
            "desc": "“International Business Machines” компани орон тоогоо 3900-аар цомхтгох шийдвэр гаргаснаа зарлалаа. Технологийн компаниудын явуулж буй өргөн хүрээний цомхтголын нөлөө дэлхий даяар мэдрэгдэж эхэлж байна. Хамгийн сүүлд “IBM” буюу “International Business Machines” компани орон тоогоо 3900-аар цомхтгох шийдвэр гаргаснаа зарлалаа. Ингэснээр нэгдүгээр сард “Google”-ийн толгой компани “Alphabet”,“Microsoft”, “Amazon”, “IBM” компаниудын цомхтгол хийсэн ажлын байрын тоо 44 мянга дөхөөд байгаа юм."
        },
        {
            "image": "/images/ediinzasag6.jpeg",
            "title": "Норвегийн Баялгийн сан үл хөдлөх хөрөнгийн томоохон компаниудад эзэмшдэг хувиа нэмэгдүүллээ",
            "admin": "Өлзий",
            "time": "7 цагийн өмнө",
            "views": 2130,
            "comments": 89,
            "desc": "“International Business Machines” компани орон тоогоо 3900-аар цомхтгох шийдвэр гаргаснаа зарлалаа. Технологийн компаниудын явуулж буй өргөн хүрээний цомхтголын нөлөө дэлхий даяар мэдрэгдэж эхэлж байна. Хамгийн сүүлд “IBM” буюу “International Business Machines” компани орон тоогоо 3900-аар цомхтгох шийдвэр гаргаснаа зарлалаа. Ингэснээр нэгдүгээр сард “Google”-ийн толгой компани “Alphabet”,“Microsoft”, “Amazon”, “IBM” компаниудын цомхтгол хийсэн ажлын байрын тоо 44 мянга дөхөөд байгаа юм."
        },
        {
            "image": "/images/ediinzasag7.jpeg",
            "title": "АИ92 автобензиний гаалийн татварыг 2024 оны 1-р сарын 1-нийг хүртэл тэглэлээ",
            "admin": "Хүлэг",
            "time": "3 цагийн өмнө",
            "views": 413,
            "comments": 34,
            "desc": "Засгийн газрын өнөөдрийн ээлжит хуралдаанаар импортоор оруулж байгаа 92 октантай авто бензиний гаалийн албан татварын хэмжээг 2023 оны нэгдүгээр сарын 30-ны өдрөөс 2024 оны нэгдүгээр сарын 1-ний өдрийг хүртэл 0 хувиар тогтоох шийдвэр гаргалаа."
        },
        {
            "image": "/images/ediin zasag3.jpeg",
            "title": "Монгол Улсын Засгийн газрын бондын ханш $104.64 давж, нэрлэсэн үнээс 5.9 хувиар өсөв",
            "admin": "Төмөр",
            "time": "5 цагийн өмнө",
            "views": 317,
            "comments": 29,
            "desc": "Монгол Улсын Засгийн газрын энэ оны нэгдүгээр сард гаргасан таван жилийн хугацаатай, 8.65 хувийн хүүтэй бондын ханш анхны үнээс 5.9 хувиар өсөөд байна.Бондын нэрлэсэн үнэ анхдагч зах зээлд 98.812 ам.долларын ханштай гарч байсан бол хамгийн сүүлийн арилжаагаар ханш нь 104.64 ам.доллар давжээ. Өгөөжийн хувьд ч өсөлтөө хадгалсан хэвээр байна."
        }
    ]
}

class Article extends HTMLElement {
    constructor() {
        super();
        console.log("newsdata",newsData.articles[this.attributes.getNamedItem("value").value]);

        this.innerHTML = String.raw`
            <article class="news-con">
                <section class="news-container">
                  <div class="min-con">
                    <div class="news">
                      <img src="${newsData.articles[this.attributes.getNamedItem("value").value].image}" class="img">
                      <div class="desc">
                        <strong class="news-title">${newsData.articles[this.attributes.getNamedItem("value").value].title}</strong>
                        <div class="news-info">
                          <p class="admin">${newsData.articles[this.attributes.getNamedItem("value").value].admin}</p>
                          <p class="time">${newsData.articles[this.attributes.getNamedItem("value").value].time}</p>
                          
                          <div class="icon">
                            <svg class="svg" width="22" height="16" viewBox="0 0 22 16" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M20.9199 7.6C18.8999 2.91 15.0999 0 10.9999 0C6.89994 0 3.09994 2.91 1.07994 7.6C1.02488 7.72617 0.99646 7.86234 0.99646 8C0.99646 8.13766 1.02488 8.27383 1.07994 8.4C3.09994 13.09 6.89994 16 10.9999 16C15.0999 16 18.8999 13.09 20.9199 8.4C20.975 8.27383 21.0034 8.13766 21.0034 8C21.0034 7.86234 20.975 7.72617 20.9199 7.6ZM10.9999 14C7.82994 14 4.82994 11.71 3.09994 8C4.82994 4.29 7.82994 2 10.9999 2C14.1699 2 17.1699 4.29 18.8999 8C17.1699 11.71 14.1699 14 10.9999 14ZM10.9999 4C10.2088 4 9.43546 4.2346 8.77766 4.67412C8.11987 5.11365 7.60718 5.73836 7.30443 6.46927C7.00168 7.20017 6.92246 8.00444 7.0768 8.78036C7.23114 9.55628 7.61211 10.269 8.17152 10.8284C8.73093 11.3878 9.44366 11.7688 10.2196 11.9231C10.9955 12.0775 11.7998 11.9983 12.5307 11.6955C13.2616 11.3928 13.8863 10.8801 14.3258 10.2223C14.7653 9.56448 14.9999 8.79113 14.9999 8C14.9999 6.93913 14.5785 5.92172 13.8284 5.17157C13.0782 4.42143 12.0608 4 10.9999 4ZM10.9999 10C10.6044 10 10.2177 9.8827 9.8888 9.66294C9.55991 9.44318 9.30356 9.13082 9.15219 8.76537C9.00081 8.39991 8.9612 7.99778 9.03837 7.60982C9.11554 7.22186 9.30603 6.86549 9.58573 6.58579C9.86544 6.30608 10.2218 6.1156 10.6098 6.03843C10.9977 5.96126 11.3999 6.00087 11.7653 6.15224C12.1308 6.30362 12.4431 6.55996 12.6629 6.88886C12.8826 7.21776 12.9999 7.60444 12.9999 8C12.9999 8.53043 12.7892 9.03914 12.4142 9.41421C12.0391 9.78929 11.5304 10 10.9999 10Z"
                                fill="#007FDA" />
                            </svg>
                            ${newsData.articles[this.attributes.getNamedItem("value").value].views}
                            <svg class="svg" width="20" height="20" viewBox="0 0 20 20" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M10 0C4.5 0 5.21541e-08 4.5 5.21541e-08 10C5.21541e-08 12.3 0.8 14.5 2.3 16.3L0.3 18.3C-0.1 18.7 -0.1 19.3 0.3 19.7C0.5 19.9 0.7 20 1 20H10C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM6 11C5.4 11 5 10.6 5 10C5 9.4 5.4 9 6 9C6.6 9 7 9.4 7 10C7 10.6 6.6 11 6 11ZM10 11C9.4 11 9 10.6 9 10C9 9.4 9.4 9 10 9C10.6 9 11 9.4 11 10C11 10.6 10.6 11 10 11ZM14 11C13.4 11 13 10.6 13 10C13 9.4 13.4 9 14 9C14.6 9 15 9.4 15 10C15 10.6 14.6 11 14 11Z"
                                fill="#007FDA" />
                            </svg>
                            ${newsData.articles[this.attributes.getNamedItem("value").value].comments}
                          </div>
                        </div>
                        <div class="news-desc">${newsData.articles[this.attributes.getNamedItem("value").value].desc}</div>
                      </div>
                    </div>
                  </div>
                  <hr>
                </section>
              </article>`;
    }
}

customElements.define('article-society', Article);
async function apiCall(url) {


    try {
        let res = await fetch(url)
        let articles = await res.json();
        return articles;
        
    } catch (error) {
        console.log(error)
    }

}


function appendArticles(articles, main) {

    articles.forEach(el => {

        let div = document.createElement('div')

        let content_div = document.createElement('div')
        content_div.id = "content"

        let title =  document.createElement('h1')
        title.innerText = el.title

        let description =  document.createElement('h4')
        description.innerText = el.description

        let content =  document.createElement('p')
        content.innerText = el.content

        content_div.append(title,description,content)

        let img =  document.createElement('img')
        img.src = el.urlToImage

        let img_div =  document.createElement('div')
        img_div.append(img)
        img_div.id = "image"

        div.append(content_div,img_div)

        div.onclick = ()=>{
            localStorage.setItem("article",JSON.stringify(el))
            window.location.href = "news.html"

        }


        main.append(div);



    })


}

export { apiCall, appendArticles }
let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let newsElm = document.querySelector('.news');
let select = document.querySelector('select');
let errorElm = document.querySelector('.error-message');
let main = document.querySelector('.main');
let allNews = [];

function handleErrorMessage(message = 'Something went wrong') {
  main.style.display = 'none';
  errorElm.innerText = message;
}

function handleSpinner(status = false) {
  if (status) {
    newsElm.innerHTML = `<div class="spinner"></div><div class="donut"></div></div>`;
  }
}

/* <li>
  <img
    src="https://www.ctvnews.ca/polopoly_fs/1.5816492.1647046791!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
    alt=""
  />
  <div>
    <span class="source">NDTV News</span>
    <h3>Russian space agency chief threatens to leave U.S. astronaut on space station</h3>
    <button>Read More</button>
  </div>
</li>; */

function renderNews(news) {
  newsElm.innerHTML = '';
  news.forEach((newsItem) => {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = newsItem.imageUrl;
    img.alt = newsItem.title;
    let div = document.createElement('div');
    let span = document.createElement('span');
    span.classList.add('source');
    span.innerText = newsItem.newsSite;
    let h3 = document.createElement('h3');
    h3.innerText = newsItem.title;
    let a = document.createElement('a');
    a.href = newsItem.url;
    let button = document.createElement('button');
    a.append('button');
    button.innerText = 'Read More';
    div.append(span, h3, button);
    li.append(img, div, a);
    newsElm.append(li);
  });
}

function displayOptions(sources) {
  sources.forEach((source) => {
    let option = document.createElement('option');
    option.innerText = source;
    option.value = source;
    select.append(option);
  });
}

function init() {
  handleSpinner(true);
  fetch(url)
    .then((response) => response.json())
    .then((news) => {
      isLoading = true;
      handleSpinner();
      allNews = news;
      renderNews(news);
      let allSources = new Set(news.map((n) => n.newsSite));
      displayOptions(allSources);
    });
}

select.addEventListener('change', (event) => {
  let source = event.target.value.trim();

  if (source) {
    var filterNews = allNews.filter((news) => news.newsSite === source);
  } else {
    filterNews = allNews;
  }
  renderNews(filterNews);
});

init();
handleErrorMessage();

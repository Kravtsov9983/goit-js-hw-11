

const KEY = "29287796-23bbe14638002cbdb41caa9be"
// const serch = "dog"
const image_type = "photo"
const orientation = "horizontal"
const safesearch = "true"
const per_page = "40"
const btn = document.querySelector("button")
const form = document.querySelector(".search-form")
const div = document.querySelector(".gallery")
const inputSerch = document.querySelector(".search-form__input")
const loadMoreBtnEl = document.querySelector(".load-more")
// const url = `https://pixabay.com/api/?key=${KEY}&q=${input}&image_type=${image_type}&orientation=${orientation}&safesearch=${true}&per_page=${40}`

const updateUi = () => {
  div.innerHTML = "";
};


const createUrl = (e) => {
  e.preventDefault();
  const input = inputSerch.value;
  const url = `https://pixabay.com/api/?key=${KEY}&q=${input}&image_type=${image_type}&orientation=${orientation}&safesearch=${true}&per_page=${40}`;
  fetch(url)
  .then((response) => response.json()
  )
    .then((data) => {
      updateUi()
      insertContent(data.hits)
    })
  .catch((error) => { console.log(error) })
};

form.addEventListener("submit", createUrl);
loadMoreBtnEl.addEventListener("click", createUrl);
  
  const createListItem = (item) => `<div class="photo-card">
  <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${item.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${item.views}
    </p>
    <p class="info-item">
      <b>Comments</b>${item.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${item.downloads}
    </p>
  </div>
</div>`




const generateContent = (array) => (array ? array.reduce((acc, item) => acc + createListItem(item), "") : "");

const insertContent = (array) => {
  const result = generateContent(array);
  div.insertAdjacentHTML("beforeend", result);
};



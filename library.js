// import { BooksList } from './FakeLibrary.js'
// console.log(BooksList)

const Books = document.querySelector('.grid')

function creatBooksList(BooksData) {
  // console.log(BooksData.image)
  return `
  <div class="grid-item">
    <div class="book-image">
      <img src="${ BooksData.image }" alt="${ BooksData.name }">
    </div>
    <div class="book-info">
      <h3 class="book-name">${ BooksData.name }</h3>
      <div class="book-price">
        <span class="sell-price">${ BooksData.originPrice }</span>
        <span class="origin-price">${ BooksData.sellPrice }</span>
      </div>
      <span class="ISBN">${ BooksData.ISBN }</span>
    </div>
  </div>
  `
}

// 用 async 宣告一個 function 
async function getApi() {
  // 重點放在 await 要做的事情 
  const response = await fetch('https://bookshelf.goodideas-studio.com/api',{method: 'GET'})
  // return promise 
  return response.json()
}

async function getBooksInfo() {
  const BooksInfo = await getApi()
  Books.innerHTML = BooksInfo.list.map(BooksData => {
    return creatBooksList(BooksData)
  }).join('')
  let msnry = new Masonry( '.grid');
  imagesLoaded( grid ).on( 'progress', function() {
    // layout Masonry after each image loads
    msnry.layout();
  });
}


getBooksInfo()
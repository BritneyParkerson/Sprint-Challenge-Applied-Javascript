// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    console.log(response);
    let cardsContainer = document.querySelector(".cards-container");
    let arrayValues = Object.values(response.data.articles);
    arrayValues.forEach(card => {
      card.forEach(article => {
        cardsContainer.appendChild(storyCards(article));
        console.log("storyCards");
      })
    })
  })
  .catch((error) => {

  })



function storyCards(object){

    let articles = document.createElement("div");
    articles.classList.add("card");

    let articles2 = document.createElement("div");
    articles2.classList.add("headline");
    articles2.innerHTML = object.headline;
    articles.appendChild(articles2);

    let articles3 = document.createElement("div");
    articles3.classList.add("author");
    articles.appendChild(articles3);

    let articles4 = document.createElement("div");
    articles4.classList.add("img-container");
    articles3.appendChild(articles4);

    let pics = document.createElement("img");
    pics.src = object.authorPhoto;
    articles4.appendChild(pics);

    let credits = document.createElement("span");
    credits.innerHTML = "By " + object.authorName;
    articles3.appendChild(credits);

    return articles;

  }

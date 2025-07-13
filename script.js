const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const favoritesEl = document.getElementById("favorites");

const localQuotes = [
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { quote: "Dream bigger. Do bigger.", author: "Unknown" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
];

function getRandomQuote() {
  const index = Math.floor(Math.random() * localQuotes.length);
  return localQuotes[index];
}

function loadQuoteOfTheDay() {
  const today = new Date().toDateString();
  const stored = JSON.parse(localStorage.getItem("quoteOfTheDay"));

  if (stored && stored.date === today) {
    displayQuote(stored.quote, stored.author);
  } else {
    const newQuote = getRandomQuote();
    localStorage.setItem("quoteOfTheDay", JSON.stringify({
      date: today,
      quote: newQuote.quote,
      author: newQuote.author
    }));
    displayQuote(newQuote.quote, newQuote.author);
  }
}

function displayQuote(quote, author) {
  quoteEl.innerText = `"${quote}"`;
  authorEl.innerText = `– ${author}`;
}

function saveFavorite() {
  const quote = quoteEl.innerText;
  const author = authorEl.innerText;
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.find(fav => fav.quote === quote)) {
    favorites.push({ quote, author });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites();
  }
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favoritesEl.innerHTML = "";
  favorites.forEach(fav => {
    const li = document.createElement("li");
    li.innerText = `${fav.quote} ${fav.author}`;
    favoritesEl.appendChild(li);
  });
}

function shareQuote() {
  const quote = quoteEl.innerText;
  const author = authorEl.innerText;
  const fullQuote = `${quote} ${author}`;

  if (navigator.share) {
    navigator.share({
      title: "Inspiration of the Day",
      text: fullQuote
    });
  } else {
    alert("Sharing not supported on this browser.");
  }
}

function getNewQuote() {
  const newQuote = getRandomQuote();
  const today = new Date().toDateString();
  localStorage.setItem("quoteOfTheDay", JSON.stringify({
    date: today,
    quote: newQuote.quote,
    author: newQuote.author
  }));
  displayQuote(newQuote.quote, newQuote.author);
}

// Run app
loadQuoteOfTheDay();
loadFavorites();



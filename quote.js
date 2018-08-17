var quotes = [
    "Hello",
    "It's me",
    "Here's a quote",
    "I will fill this in later"
];
function newQuote() {
  var randomNum = Math.floor(Math.random()*quotes.length);
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNum];
}
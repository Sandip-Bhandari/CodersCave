document.addEventListener("DOMContentLoaded", () => {
    const quoteText = document.querySelector(".quote");
const authorName = document.querySelector(".name");
const quoteBtn = document.querySelector("button");
const speechBtn = document.querySelector(".speech");
const copyBtn = document.querySelector(".copy");

const synth = window.speechSynthesis;

function displayQuote(quote, author) {
  quoteText.innerText = quote;
  authorName.innerText = author;
}

function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";

  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      // Choose a random quote from the array of quotes
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex].text;
      const author = data[randomIndex].author || "Unknown";
      
      displayQuote(quote, author);

      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "Get Quote";
    })
    .catch(error => {
      console.error('Error fetching the quote:', error);
      quoteText.innerText = "Failed to fetch the quote. Please try again later.";
      authorName.innerText = "Unknown";
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "Get Quote";
    });
}

quoteBtn.addEventListener("click", randomQuote);

speechBtn.addEventListener("click", () => {
  if (!quoteBtn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    synth.speak(utterance);
  }
});

copyBtn.addEventListener("click", () => {
  const textToCopy = `${quoteText.innerText} - ${authorName.innerText}`;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Quote copied to clipboard!");
    })
    .catch(error => {
      console.error('Error copying to clipboard:', error);
      alert("Failed to copy the quote. Please try again.");
    });
});

// Load initial quote on page load
randomQuote();


  });


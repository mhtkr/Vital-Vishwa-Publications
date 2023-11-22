const quotes = [
    "A journey of a thousand miles begins with a single step.",
    "In the midst of winter, I found there was, within me, an invincible summer.",
    "The only way to do great work is to love what you do.",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The greatest discovery of all time is that a person can change his future by merely changing his attitude.",
    "Nothing is impossible, the word itself says 'I'm possible!'",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The best way to predict the future is to create it.",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
  ];
  
  function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const quoteElement = document.getElementById("quote-container");
    quoteElement.textContent = quote;
  }
  
  setInterval(displayQuote, 5000);
  
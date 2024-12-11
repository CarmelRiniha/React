import React from "react";
import { useState } from "react";
import Quotegen from "./Quotegen";
function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const quotes = [
    {
      quote: "Either you run the day, or the day runs you",
      author: "Jim Rohn",
    },
    {
      quote:
        "It is never too late to be what you might have been",
      author: "George Eliot",
    },
    {
        quote:"Don't be afraid to give up the good to go for the great", 

        author: "John D. Rockefeller",
      },
    {
      quote: "Well done is better than well said",
      author: "Benjamin Franklin",
    },
    {
      quote: "The only impossible journey is the one you never begin",
      author: "Tony Robbins",
    },
    {
        quote: "Life is trying things to see if they work",
        author: "Ray Bradbury",
      },
    { quote: "You have to be odd to be number one.", author: "Dr. Seuss" },
  ];
  function randomquote() {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random].quote);
    setAuthor(quotes[random].author);
  }
  return (
    <div className="bg-white flex h-30 w-96 flex shadow-md text-center p-6 rounded-lg ">
      <button
        onClick={randomquote}
        className="bg-teal-700 hover:bg-teal-600 text-white m-4 p-4 h-20 rounded-lg"
      >
        Get a quote
      </button>
      <Quotegen quote={quote} author={author} />
    </div>
  );
}

export default Quote;

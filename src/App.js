import React, { useState } from 'react';
import './App.css';
import books from './booksData';

const BookDetails = ({ book }) => (
  <div className='outer_container'>
    <div className="book-details">
      <div className="book-title">
        <h2>{book.title}</h2>
      </div>
      <div className="image-container">
        <img src={book.cover} alt={book.title} />
      </div>
      <div className="book-info">
      <div className='novel'>
        <p className='author' > {book.author}</p>
        
        <p> {book.genre}</p>
        <p>{book.pages} Pages</p>
        </div>
      </div>
    </div>
  </div>
);


const App = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);

  const handleNext = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const handlePrevious = () => {
    setCurrentBookIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const currentBook = books[currentBookIndex];

  return (
    <div className="container">
      <BookDetails book={currentBook} />
      <div className="button-container">
        <button className="previous-button" onClick={handlePrevious}>
          &lt;
        </button>
        <button className="next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default App;

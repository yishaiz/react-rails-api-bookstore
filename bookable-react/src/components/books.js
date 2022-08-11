import React from "react";

function books({ books }) {
  return (
    <div>
      <h1>Theses books are from the api</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.body}</p>
        </div>
      ))}
    </div>
  );
}

export default books;

import React from 'react';

function Header({ setPage }) {
  return (
    <header className="header">
      <h1>📚 BookHunt</h1>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("mylist")}>My Reading List</button>
        <button onClick={() => setPage("review")}>Add Review</button>
      </nav>
    </header>
  );
}

export default Header;

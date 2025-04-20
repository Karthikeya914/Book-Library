import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import BookDetails from './pages/BookDetails.jsx';
import MyList from './pages/MyList.jsx';
import AddReview from './pages/AddReview.jsx';
import { BookProvider } from './context/BookContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/add-review" element={<AddReview />} />
        </Routes>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;

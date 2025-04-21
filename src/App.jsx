// import all components here

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyList from "./pages/ReadingList";
import BookDetails from "./pages/BookDetails";
import "./App.css";

// App Component
function App() {
  return (
    <BookProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/book/:bookId" element={<BookDetails />} /> 
        </Routes>
      </Router>
    </BookProvider>
  );
}


// Exporting App Component 
export default App;

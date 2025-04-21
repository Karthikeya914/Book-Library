# BookHunt 📚

BookHunt is a simple React app that helps you search for books, view details, and save your favorite ones to a reading list. It uses the Google Books API to fetch book data and stores your reading list in local storage, so your data stays even after a page refresh.

---

## Features

- Search books by title or keyword
- View book details like author, publisher, description, etc.
- Add books to your personal reading list
- Remove books from the reading list anytime
- Book list is saved in local storage
- Book title suggestions while typing
- Clean and responsive UI

---

## Tech Stack Used

- React  
- React Router  
- Context API for global state management  
- Google Books API for fetching book data  
- Custom CSS for styling  
- Vite for fast development environment

---

## How to Use

### 1. **Home Page**
   - This is the main page where you can search for books.
   - Simply type a title or keyword in the search bar to find books.
   - The search results will show a list of books, with options to view their details or add them to your reading list.

### 2. **Book Details Page**
   - After clicking on a book from the search results, you'll be taken to the **Book Details Page**.
   - Here, you can see detailed information about the book, such as the author(s), publisher, description, and a preview link.
   - There's also a button to add the book to your reading list.

### 3. **My List Page**
   - This page shows all the books you’ve added to your reading list.
   - You can easily remove books from the list by clicking a remove button.
   - The list will be saved even after refreshing the page, thanks to local storage.

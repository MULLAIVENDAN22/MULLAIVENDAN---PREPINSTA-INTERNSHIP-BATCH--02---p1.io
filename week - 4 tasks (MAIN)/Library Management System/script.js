let books = [];

// Get elements
const addButton = document.getElementById('add-button');
const addBookForm = document.getElementById('add-book-form');
const backButton = document.getElementById('back-button');
const bookList = document.getElementById('book-list');

// Hide form and back button initially
addBookForm.style.display = 'none';
backButton.style.display = 'none';

// Add event listeners
addButton.addEventListener('click', () => {
  // Hide add button and show form
  addButton.style.display = 'none';
  addBookForm.style.display = 'flex';
  backButton.style.display = 'block';
});

backButton.addEventListener('click', () => {
  // Hide form and back button, show add button
  addBookForm.style.display = 'none';
  backButton.style.display = 'none';
  addButton.style.display = 'block';
});

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let genre = document.getElementById("genre").value;

  if (title && author && pages && genre) {
    let newBook = {
      title: title,
      author: author,
      pages: pages,
      genre: genre
    };
    books.push(newBook);
    sessionStorage.setItem('books', JSON.stringify(books));
    displayBooks();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("error-message").innerHTML = "";
  } else {
    document.getElementById("error-message").innerHTML = "Please fill all required fields.";
  }
});

document.getElementById("search").addEventListener("input", () => {
    const searchTitle = document.getElementById("search").value;
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase()));
    displayBooks(filteredBooks);
  });
  

function displayBooks(booksToDisplay = books) {
  bookList.innerHTML = "";
  booksToDisplay.forEach(book => {
    let bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.innerHTML = `
        <h2>${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Genre: ${book.genre}</p>
        <button class="remove-button">Remove</button>
      `;
    bookList.appendChild(bookElement);
  });

  if (booksToDisplay.length === 0) {
    bookList.innerHTML = '<p style="text-align: center; margin-top: 40px;">No books found.</p>';
  }

  // Reset the book list when the back button is clicked
  backButton.addEventListener('click', () => {
    sessionStorage.setItem('books', JSON.stringify(books));
    displayBooks();
  });
}

// Initialize the book list
displayBooks();

// Restore the book list from session storage
const storedBooks = sessionStorage.getItem('books');
if (storedBooks) {
  books = JSON.parse(storedBooks);
}
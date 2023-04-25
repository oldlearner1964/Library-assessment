function findAuthorById(authors, id) {
  const chooseAuthorById = authors.find((author) => author.id === id)
    return chooseAuthorById;
}

function findBookById(books, id) {
  const chooseBookById = books.find((book) => book.id === id);
    return chooseBookById;
}

function partitionBooksByBorrowedStatus(books) {
  const booksCheckedOut = books.filter((book) => book.borrows[0].returned === false);
    const booksReturned = books.filter((book) => book.borrows[0].returned === true);
    let answer = [];
    answer.push(booksCheckedOut);
    answer.push(booksReturned);
    return answer;
}

function getBorrowersForBook(book, accounts) {
 const  listOfBorrowers = book.borrows;
 const answer = listOfBorrowers.map((borrower) =>{
  let eligibleAccount = accounts.find((account) => account.id === borrower.id);
  return {...borrower, ...eligibleAccount};
 });
 return answer.slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

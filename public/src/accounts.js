function findAccountById(accounts, id) {  
    //output the account(object)from the array of accounts according to the id no;
    const answer = accounts.find((account) => account.id === id);
    return answer;
}


function sortAccountsByLastName(accounts) {
  const sortedAlphabetically = accounts.sort((accountA, accountB) => 
    accountA.name.last > accountB.name.last ? 1 : -1);
    return sortedAlphabetically;
}

function getTotalNumberOfBorrows(account, books) {
  //1st function will calculate how many borrows for one book;
  function numberOfBorrowsByBook(account, book){
    const nbrOfBorByBk = book.borrows.reduce((result, borrow) => {
        if(borrow.id === account.id){
            result += 1;
        }return result;
    },0)
    return nbrOfBorByBk;
    }

//2nd will use the 1st function to add the numbers of each borrows by book;
const answer = books.reduce((result, book) => {
        result += numberOfBorrowsByBook(account, book);
        return result;
},0);
return answer;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);

  let bookDetails = booksPossessed.map((detail) => ({
  ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
  
  return bookDetails;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

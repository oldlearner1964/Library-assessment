function getTotalBooksCount(books) {
  const answer = books.length;
  return answer;
}

function getTotalAccountsCount(accounts) {
  const answer = accounts.length;
  return answer;
}

function getBooksBorrowedCount(books) {
  const booksCheckedOut = books.reduce((result, book) => {
if(book.borrows[0].returned === false){
  result += 1;
}
return result;  
},0);
return booksCheckedOut;  
}

function getMostCommonGenres(books) {
  //create an array with unordered genre names
  const unorderedGenresArray = books.reduce((result, book) => {    
    if(!result.includes(book.genre)){
     result.push(book.genre);
    }return result;
   },[]);
   //loop over the above array, in each loop (genre name) find the corresponding count
   const unorderedAnswer = unorderedGenresArray.reduce((result, genre) => {
    let count = books.reduce((total, book) => {
        if(book.genre === genre){
            total += 1;
        }
        return total;
    },0);
    //insert each object after finding the name and count
    result.push({'name' : genre, 'count': count});
    return result;
     },[]);
     //sort and cut the answer to 5 elements
     const orderedAnswer = unorderedAnswer.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
     return orderedAnswer.slice(0,5);
  }



function getMostPopularBooks(books) {
  //loop books to find each count and insert the object with the count and name of the book
  const unorderedAnswer = books.reduce((result, book) => {
    let count = book.borrows.length;
    result.push({'name': book.title, 'count': count});
    return result;
  },[]);
//sort by larger to lower count and then cut from the resulting array the first five counts
  const orderedAnswer = unorderedAnswer.sort((answerA, answerB) => answerA.count < answerB.count ? 1 : -1);
  const answer = orderedAnswer.slice(0,5);
return answer;
}

function getMostPopularAuthors(books, authors) {
  function getNameOfAuthorBy(author){
return (`${author.name.first} ${author.name.last}`);
  };
  function getAuthorId(author){
    return author.id;
  };
  const unorderedAnswer = authors.reduce((result, author) => {
    let count = books.reduce((total, book) =>{
    if(book.authorId === getAuthorId(author)){
      total += book.borrows.length;
    }return total;
  },0);
  result.push({'name': getNameOfAuthorBy(author), 'count': count});
  return result;
},[]);
const orderedAnswer = unorderedAnswer.sort((objectA, objectB) => objectA.count < objectB.count ? 1  : -1);
const answer = orderedAnswer.slice(0, 5);
return answer;  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

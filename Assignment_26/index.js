function extractTitleAndAuthor(books, ...additionalArgument) {
    const titleAndauthorName = books.map(({ title, author }) => ({ title, author }));
    console.log("The title and author name")
    console.log(...titleAndauthorName,...additionalArgument);
  }
  
  const books = [
    { title: 'The Best of C. M. Kornbluth', author:" Frederik Pohl", year:  2021},
    { title: 'Ringworld', author: 'Larry Niven', year:  2015},
    { title: 'Catalyst: A Tale of the Barque Cats', author: 'Anne McCaffrey', year: 1949 },
    { title: 'Fahrenheit 451: A Novel', author: 'Ray Bradbury', year: 2011 },
    { title: 'Dune', author: 'Frank Herbert', year: 2003 }
  ];
 
  
  extractTitleAndAuthor(books); 
  
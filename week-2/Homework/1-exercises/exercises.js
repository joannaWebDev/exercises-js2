/**
 * For each of the names in the array passed into this function
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

let content1 = document.querySelector("#content1");
content1.style.margin = '0 auto';
content1.style.padding = '8px';

function exerciseOne(arrayOfPeople) {
  arrayOfPeople.map(person => {
    let div = document.createElement('div');
    let h1Name = document.createElement('h1');
    h1Name.innerText = person.name.toUpperCase();
    h1Name.style.color = 'purple';   

    let h2Job = document.createElement('h2');
    h2Job.innerText = person.job;
    h2Job.style.fontWeight = '300'

    content1.appendChild(div);
    div.appendChild(h1Name);
    div.appendChild(h2Job);
  })
}
exerciseOne(people);
/**
 * Create a list of shopping items. You should use an unordered list.
 * All of your HTML should go inside the Div tag with the id "content".
 */
let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

let content2 = document.querySelector("#content2");
content2.style.borderTop = '2px dotted red';
content2.style.margin = '0 auto';
content2.style.padding = '8px';

let unOrderedlList = document.createElement('ol');
    unOrderedlList.style.maxWidth = '150px'
    content2.appendChild(unOrderedlList);

function exerciseTwo(shopping) {
  shopping.forEach(item => {
    let listElements = document.createElement('li')
    listElements.style.listStyle= "square inside";
    listElements.innerText = item;
    unOrderedlList.appendChild(listElements);
    
})
}
exerciseTwo(shopping);


/**
    I'd like to display my three favorite books inside a nice webpage!
    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

let content3 = document.getElementById("content3");
content3.style.borderTop = '2px dotted red';

let booksOrderedList = document.createElement('ul');
booksOrderedList.style.display = 'flex';
booksOrderedList.style.flexWrap = 'wrap';
booksOrderedList.style.justifyContent = 'space-between'
booksOrderedList.style.width = 'calc( 100% - 11px)';
booksOrderedList.style.padding = '20px';
content3.appendChild(booksOrderedList);

function exerciseThree(books) {
  books.forEach(book => {
  let booksList = document.createElement('li');
  booksList.style.width = 'calc(25% - 51px)';
  booksList.style.margin = '15px';
  booksList.style.minWidth = '350px';
  booksList.style.padding = '10px';
  booksList.style.listStyle = 'none'
  booksOrderedList.style.backgroundImage ='';
  booksOrderedList.appendChild(booksList);

  let bookTitleAndAuthor = document.createElement('p');
  bookTitleAndAuthor.innerText = `${book.title} - ${book.author}`;
  booksList.appendChild(bookTitleAndAuthor);

  let image = ['img/book-419589_640.jpg', 'img/desk-1148994_640.jpg', 'img/old-books-436498_640.jpg'];
  let bookImage = document.createElement('img');
  bookImage.src = image[books.indexOf(book)];
  bookImage.style.width = '225px';
  bookImage.style.float = 'left';
  bookImage.style.padding = '20px 0'
  bookTitleAndAuthor.appendChild(bookImage);

  if (book.alreadyRead) {
    booksList.style.backgroundColor = 'lightgreen'
  } else {
    booksList.style.backgroundColor = 'red';
  }
  //book.alreadyRead ? booksList.style.backgroundColor = 'lightgreen' : booksList.style.backgroundColor = 'red';
})
}

exerciseThree(books);

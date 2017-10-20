// inital delclarations

// pulling blogDatabase from local storage
let blogDatabaseParse = JSON.parse(localStorage.getItem("blogDatabaseStored")).reverse()

// setting inital states
let currentPage = 1
let numberOfItems = 2
let numberOfPages = 0 //this will be set on load
let paginationBarPosition = 0 //use this number to increment pagination bar (1-5) (2-6) (3-7) etc.
let paginationButtonArray = document.getElementsByClassName("paginationButton")

// sets number of pages and writes first page

const blogInit = function() {
    numberOfPages = Math.ceil(blogDatabaseParse.length / numberOfItems)

    writeBlogs()
}

const writeBlogs = function() {
    //splices database into the currect section to be displayed on currentPage
    let blogsToWrite = blogDatabaseParse.slice((currentPage - 1) * numberOfItems, currentPage * numberOfItems )
    
    // Declare variable that will write to html
    let currentPageHTML = ""
    
    // Iterates over slice and ammends it to variable 
    for (let i = 0; i < blogsToWrite.length; i++) {
        let element = blogsToWrite[i]
        currentPageHTML += `
        <div class="card">
        <h1>${element.title}</h1>
        <h2>${element.content}</h2>
        <div id="blog${i}tags"></div>
        <h4>${element.author} - ${element.dateOfPublication}</h4>
        </div>
        `
    }
    
    // Write blogs to HTML
    document.getElementById("blogContent").innerHTML = currentPageHTML
    
    //function to check pagination bar
    writePaginationBar()
    setPaginationBarStatus()
    writeEventListeners()
}

const writePaginationBar = function() {
    
    //Keep current page button as the middle button unless it is one of the first or last two pages

    switch (true) {
        case (currentPage <= 3):
            paginationBarPosition = 0
            break
        case (currentPage >= 4 && currentPage <= (numberOfPages - 2)):
            paginationBarPosition = currentPage - 3
            break
        case (currentPage >= numberOfPages - 2):
            paginationBarPosition = numberOfPages - 5
            break
    }

    // variable that will write pagination bar
    let paginationBarHTML = ""

    //ammends variable with first and previous buttons
    paginationBarHTML += `
    
        <button class = "backButton paginationButton" id="first">&lt;&lt;</button>
        <button class = "backButton paginationButton" id="previous">&lt;</button>
    `

    // write buttons for each page, but will not exceed 5
    for (let index = 0; index < numberOfPages; index++) {
        let ordinalPosition = index+1
        // write individual numbers for pagination - set id to the position of the button and set the inner html to the button position+the paginationBarPosition
        paginationBarHTML += `
        <button class="paginationButton" id="${ordinalPosition}">${ordinalPosition + paginationBarPosition}</button>
        `
        // break loop after witing 5 buttons
        if (ordinalPosition >= 5){
            break
        }
    }

    paginationBarHTML += `
        <button class = "forwardButton paginationButton" id="next">&gt;</button>
        <button class = "forwardButton paginationButton" id="previous">&gt;&gt;</button>
    `
    // write pagination bar to HTML

    document.getElementById("paginationBar").innerHTML = paginationBarHTML

}

// Disable current page button and disable first / previous if at page one and next / last buttons if  pageNumber === numberOfPages
const setPaginationBarStatus = function () {

    for (let index = 0; index < paginationButtonArray.length; index++) {
        paginationButtonArray[index].disabled = parseInt(paginationButtonArray[index].innerHTML) === currentPage ? true : false
    }

    document.getElementsByClassName("backButton")[0].disabled = currentPage === 1 ? true : false
    
    document.getElementsByClassName("backButton")[1].disabled = currentPage === 1 ? true : false
    
    document.getElementsByClassName("forwardButton")[0].disabled = currentPage === numberOfPages ? true : false
    document.getElementsByClassName("forwardButton")[1].disabled = currentPage === numberOfPages ? true : false
}

const changePageNumber = function (event) {
    // change page number based on button pushed
    switch(event.target.innerHTML) {
        case "&lt;&lt;": 
            currentPage = 1
            break
        case "&lt;": 
            currentPage--
            break
        case "&gt;": 
            currentPage++
            break
        case "&gt;&gt;": 
            currentPage = numberOfPages
            break
        default:
            currentPage = parseInt(event.target.innerHTML)
    }
    writeBlogs()
}

//Add event listeners to buttons
const writeEventListeners = function () {
    for (let j = 0; j < paginationButtonArray.length; j++) {
        let pagButtonElement = paginationButtonArray[j];
        pagButtonElement.addEventListener("click", changePageNumber, false);
    }

}

window.onload = blogInit()

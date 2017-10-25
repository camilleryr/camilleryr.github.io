// setting inital states
let currentPage = NaN
let numberOfItems = 2
let numberOfPages = NaN //this will be set on load
let paginationBarPosition = NaN //use this number to increment pagination bar (1-5) (2-6) (3-7) etc.
let paginationButtonArray = document.getElementsByClassName("paginationButton")
let localStorageItem = []

//Set blogs to display starting at most recent
const blogInit = function (storageItem = blogDatabase) {
    paginationBarPosition = 0
    localStorageItem = storageItem
    currentPage = 1

    writeBlogs()
}

const writeBlogs = function() {
    // sets number of pages
    numberOfPages = Math.ceil(localStorageItem.length / numberOfItems)

    //splices database into the currect section to be displayed on currentPage
    let blogsToWrite = localStorageItem.slice((currentPage - 1) * numberOfItems, currentPage * numberOfItems )
    
    // Declare variable that will write to html
    let currentPageHTML = ""
    
    // Iterates over slice and ammends it to currentPageHTML variable 
   
    blogsToWrite.forEach (element => {
        let blogTags = ``

        //Create spans for each tag to be injected into the HTML string on each individual blog
        element.tags.forEach(tags => {
            blogTags += `
            <span class="tags">${tags}</span>
            `
        })
        
        //Create HTML string for each individual blog
        currentPageHTML += `
        <div class="card">
        <h1>${element.id} : ${element.title}</h1>
        <h2>${element.content}</h2>
        <div id="blogTags">${blogTags}</div>
        <h4>${element.author} - ${element.dateOfPublication}</h4>
        </div>
        `
    })
    
    // Write blogs to HTML
    document.getElementById("blogContent").innerHTML = currentPageHTML
    
    //functions to check/write pagination bar
    writePaginationBar()

}

const writePaginationBar = function() {
    //Keep current page button as the middle button unless it is one of the first or last two pages
    switch (true) {
        case (numberOfPages <= 5):
            paginationBarPosition = 0
            break
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

    // Save data to variable that will be written to innerHTML
    let paginationBarHTML = `
        <button class = "backButton paginationButton" id="first">&lt;&lt;</button>
        <button class = "backButton paginationButton" id="previous">&lt;</button>
    `

    // write buttons for each page, but will not exceed 5
    for (let ordinalPosition = 1; ordinalPosition <= numberOfPages; ordinalPosition++) {           
        // write individual numbers for pagination - set id to the position of the button and set the inner html to the button position + the paginationBarPosition
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
        <button class = "forwardButton paginationButton" id="last">&gt;&gt;</button>
    `
    // write pagination bar to HTML

    document.getElementById("paginationBar").innerHTML = paginationBarHTML

    setPaginationBarStatus()
}

// Disable current page button and disable first / previous if at page one and next / last buttons if  pageNumber === numberOfPages
const setPaginationBarStatus = function () {

    Array.from(paginationButtonArray).forEach(x => x.disabled = parseInt(x.innerHTML) === currentPage ? true : false)

    Array.from(document.getElementsByClassName("backButton")).forEach(x => x.style.visibility = currentPage === 1 ? "hidden" : "visable")
    
    Array.from(document.getElementsByClassName("forwardButton")).forEach(x => x.style.visibility = currentPage === numberOfPages ? "hidden" : "visable")
}

document.getElementById("paginationBar").addEventListener("click", event => {
    // change page number based on button pushed - do not trigger if button is disabled
    if (event.target.disabled === false) {
        switch(event.target.id) {
            case "first": 
                currentPage = 1
                break
            case "previous": 
                currentPage--
                break
            case "next": 
                currentPage++
                break
            case "last": 
                currentPage = numberOfPages
                break
            default:
                currentPage = parseInt(event.target.innerHTML)
        }
    }
    writeBlogs()
})

window.onload = blogInit()

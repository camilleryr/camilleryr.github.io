// variables to be set on initialization
let numberOfItems // numer of items to display per page
let numberOfPages // numer of pages needed to paginate all content
let contentToPaginate // variable for content
let paginationBarPosition // use this number to increment pagination bar (1-5) (2-6) (3-7) etc.
let currentPage // current pagination page position
let originalContent // database for current page
let databaseName // database for current page

// designation html node to write pagination bar to
let paginationButtonArray = document.getElementsByClassName('paginationButton')

// Set blogs to display starting at most recent

const onPageLoad = (content, dbName, itemsPerPage = 2) => {
    databaseName = dbName
    // sets original content to display after removing search query
    originalContent = content
    // set number of items per page from arguments
    numberOfItems = itemsPerPage

    initializePagination()
}

const initializePagination = (content = originalContent) => {
    // sets initial paginationBarPosition so onload it will display pages 1-5
    paginationBarPosition = 0
    // sets the content to paginate to the argument passed in
    contentToPaginate = content
    // sets initial page to load
    currentPage = 1
    // sets number of pages
    numberOfPages = Math.ceil(contentToPaginate.length / numberOfItems)

    spliceContent()
}

const spliceContent = () => {
    writeContent(contentToPaginate.slice((currentPage - 1) * numberOfItems, currentPage * numberOfItems))
    setPaginationBarPosition()
}

const setPaginationBarPosition = function () {
    // Define previous previousPaginationBarPosition to compare with current paginationBarPosition after the switch statement to determine if the pagination nav bar needs to be reconstructed
    // const previousPaginationBarPosition = paginationBarPosition

    // Keep current page button as the middle button unless it is one of the first or last two pages
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

    writePaginationBar()
}

const writePaginationBar = function () {
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
        if (ordinalPosition >= 5) {
            break
        }
    }

    paginationBarHTML += `
        <button class = "forwardButton paginationButton" id="next">&gt;</button>
        <button class = "forwardButton paginationButton" id="last">&gt;&gt;</button>
    `
    // write pagination bar to HTML

    document.getElementById('paginationBar').innerHTML = paginationBarHTML

    setPaginationBarStatus()
}

// Disable current page button and disable first / previous if at page one and next / last buttons if  pageNumber === numberOfPages
const setPaginationBarStatus = function () {
    Array.from(paginationButtonArray).forEach(x => { x.disabled = parseInt(x.innerHTML) === currentPage })

    Array.from(document.getElementsByClassName('backButton')).forEach(x => { x.style.visibility = currentPage === 1 ? 'hidden' : 'visible' })

    Array.from(document.getElementsByClassName('forwardButton')).forEach(x => { x.style.visibility = currentPage === numberOfPages ? 'hidden' : 'visible' })
}

document.getElementById('paginationBar').addEventListener('click', event => {
    // change page number based on button pushed - do not trigger if button is disabled
    if (event.target.disabled === false) {
        switch (event.target.id) {
            case 'first':
                currentPage = 1
                break
            case 'previous':
                currentPage--
                break
            case 'next':
                currentPage++
                break
            case 'last':
                currentPage = numberOfPages
                break
            default:
                currentPage = parseInt(event.target.innerHTML)
        }
        spliceContent()
    }
})

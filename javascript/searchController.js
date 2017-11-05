// Use clear button to revert back to full list of blog entries
document.getElementById('searchClear').addEventListener('click', event => {
    document.getElementById('search').value = 'Search Field'
    initializePagination(originalContent)
})

// Clear search bar when it is selected, and refill it with "Search Blogs" when it is not
document.getElementById('search').addEventListener('focus', event => {
    document.getElementById('search').value = ''
})

document.getElementById('search').addEventListener('blur', event => {
    document.getElementById('search').value = 'Search Blogs'
})

// Pull blogs from storage, filter contents (non case sensitive), save to a new localStorage item - reasign the localStorageItem variable so that the writeBlog() function will use the filtered data to construct the blog list -- Switched to keyup to do "live searching"

document.getElementById('search').addEventListener('keyup', event => {
    let searchQuery = document.getElementById('search').value.toLowerCase()
    if (searchQuery.length >= 3) {
        let filteredContentArray = []

        contentToPaginate.forEach(element => {
            if (element.title.toLowerCase().includes(searchQuery) || element.content.toLowerCase().includes(searchQuery)) {
                filteredContentArray.push(element)
            }
        })

        if (filteredContentArray.length === 0) {
            writeElement.innerHTML = `<div id="searchFailure">Search Returned No Results</div>`
        } else {
            initializePagination(filteredContentArray)
        }
    } else {
        initializePagination(originalContent)
    }
})

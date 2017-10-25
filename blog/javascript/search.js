//Use clear button to revert back to full list of blog entries
document.getElementById("searchClear").addEventListener("click", event => {
    document.getElementById("search").value = "Search Field"
    blogInit()
})

// Pull blogs from storage, filter contents (non case sensitive), save to a new localStorage item - reasign the localStorageItem variable so that the writeBlog() function will use the filtered data to construct the blog list 
document.getElementById("searchButton").addEventListener("click", event => {
    let searchQuery = document.getElementById("search").value.toLowerCase()

    //pull full list of blogs from local storage
    let fullBlogArray = JSON.parse(localStorage.getItem("blogDatabaseStored"))
    
    //checks search field for at least 3 characters and creates new arraw that returns any object that includes the search query in the title or content
    if (searchQuery.length < 3) {
        alert("Need to enter more than 3 charachters")

    } else {
        let filteredBlogArray = fullBlogArray.filter (blog => {
            return blog.title.toLowerCase().includes(searchQuery) || blog.content.toLowerCase().includes(searchQuery)
        })

        blogInit(filteredBlogArray)
    }

})
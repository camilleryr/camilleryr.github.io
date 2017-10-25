//Use clear button to revert back to full list of blog entries
document.getElementById("searchClear").addEventListener("click", event => {
    document.getElementById("search").value = "Search Field"
    blogInit()
})


// Pull blogs from storage, filter contents (non case sensitive), save to a new localStorage item - reasign the localStorageItem variable so that the writeBlog() function will use the filtered data to construct the blog list -- Switched to keyup to do "live searching"
document.getElementById("search").addEventListener("keyup", event => {
    let searchQuery = document.getElementById("search").value.toLowerCase()
        if (searchQuery.length >= 3) {

            let filteredBlogArray = blogDatabase.filter (blog => {
                return blog.title.toLowerCase().includes(searchQuery) || blog.content.toLowerCase().includes(searchQuery)
            })
            
            console.log(filteredBlogArray.length)
            
            if (filteredBlogArray.length === 0) {
                document.getElementById("blogContent").innerHTML = "Search Returned No Results"
            } else {
                blogInit(filteredBlogArray)
            }
            
        } else {
            blogInit()
        }

})
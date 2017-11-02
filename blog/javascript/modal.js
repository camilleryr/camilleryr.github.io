//Listen to click event on publish button - create an array of input fields, pass it to blog generator - reload page page one of blogs
document.getElementById("publish").addEventListener("click", event => {

    blogDatabase.unshift(blogObjectFactory ([
        document.getElementById("blogTitle").value,
        document.getElementById("date").value,
        document.getElementById("author").value,
        document.getElementById("content").value,
        document.getElementById("tags").value
        ]))
    
    localStorage.setItem("blogDatabaseStored", JSON.stringify(blogDatabase))
    document.getElementById("modalDiv").style.display = "none"

})
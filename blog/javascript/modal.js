//Open Modal Windon
document.getElementById("modal").addEventListener("click", event => {
    document.getElementById("modalDiv").style.display = "block"
})

//Close Modal Window with X in upper right hand corner
document.getElementById("closeModal").addEventListener("click", event => {
    document.getElementById("modalDiv").style.display = "none"
})

//Listen to click event on publish button - create an array of input fields, pass it to blog generator - reload page page one of blogs
document.getElementById("publish").addEventListener("click", event => {

    blogObjectFactory([
    document.getElementById("blogTitle").value,
    document.getElementById("date").value,
    document.getElementById("author").value,
    document.getElementById("content").value,
    document.getElementById("tags").value
    ])
    document.getElementById("modalDiv").style.display = "none"

    blogInit ()
})
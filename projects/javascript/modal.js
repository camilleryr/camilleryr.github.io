//Listen to click event on publish button - create an array of input fields, pass it to blog generator - reload page page one of blogs
document.getElementById("publish").addEventListener("click", event => {
    
        projectDatabase.unshift(projectObjectFactory ([
            document.getElementById("title").value,
            document.getElementById("date").value,
            document.getElementById("tech").value,
            document.getElementById("teammates").value,
            document.getElementById("link").value
            ]))
        
        localStorage.setItem("projectDatabaseStored", JSON.stringify(projectDatabase))
        document.getElementById("modalDiv").style.display = "none"
    
    })
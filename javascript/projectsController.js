// Call JSON object from localStorage - parse it - assign it to let
let projectDatabaseParse = JSON.parse(localStorage.getItem("projectDatabaseStored"))

// Output blogdata to html
let projectElement = document.getElementById("projectContent")

for (let i = 0; i < projectDatabaseParse.length; i++) {
    let element = projectDatabaseParse[i];

    projectElement.innerHTML += `
    <article class="projectItem">
        <h2>Project Name : ${element.name}</h2>
        <h4>Completed on: ${element.dateCompleted}</h4>
        <a href="${element.link}" target="_blank">Check it out</a>
    </article>
    `
    
}
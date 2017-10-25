let resumeDatabaseParsed = JSON.parse(localStorage.getItem("resumeStored"))

let resumeElement = document.getElementById("resumeContent")

for (let index = 0; index < resumeDatabaseParsed.length; index++) {
    let element = resumeDatabaseParsed[index]
    
    resumeElement.innerHTML += `
    <article class="resumeItem" id="resume${index}"></article>
    `

    document.getElementById(`resume${index}`).innerHTML = `
        <h2>${element.dates.start} - ${element.dates.stop}</h2>
        <h1>${element.company} : ${element.title}</h1>
        <ul id="resume${index}list"></ul>`

    let element2 = element.responsibilities

    for (let i = 0; i < element2.length; i++) {
        document.getElementById(`resume${index}list`).innerHTML += `
        <li>${element2[i]}</li>
        `
    }
}
    

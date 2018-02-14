let contactDatabaseParsed = JSON.parse(localStorage.getItem('contactDatabaseStored'))

let contactElement = document.getElementById('contactContent')

for (let index = 0; index < contactDatabaseParsed.length; index++) {
    let element = contactDatabaseParsed[index]
    let contactItemClass = index % 2
    contactElement.innerHTML += `
    <article class="contactItem contactItem${contactItemClass}" id="${element.service}">
        <img src="${element.icon}" class="contactIcon">
        <h2 class="service">${element.service}</h2>
        <a href="${element.location}"><h3 class="service">${element.tag}</h3></a>
    </article>
    `
}

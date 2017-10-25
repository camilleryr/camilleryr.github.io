const headerEl = document.getElementById("pageHeader")
let navDisplayString = ""

//Build Nav bar to be injected into header
navBarDatabase.forEach(navObject => {
    navDisplayString += `
    <div class="navButton"><a href="${navObject.pageLink}" id="${navObject.pageName.toLowerCase()}Button">${navObject.pageName}</a></div>
    `
})

//Build Header
let headerDisplayString = `
    <img src="/images/cm_logo.svg">
    <h1>CHRISTOPHER MILLER</h1>
    <nav id="navElement">
        ${navDisplayString}
    </nav>
`
// Write header and nav bar to DOM
headerEl.innerHTML = headerDisplayString
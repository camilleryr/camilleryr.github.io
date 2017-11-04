const headerEl = document.getElementById('pageHeader')
let navDisplayString = ''

// Build Nav bar to be injected into header
navBarDatabase.forEach(navObject => {
    navDisplayString += `
    <div class="navButton"><a href="${navObject.pageLink}" id="${navObject.pageName.toLowerCase()}Button">${navObject.pageName}</a></div>
    `
})

// Build Header
let headerDisplayString = `
<img src="/images/cm_logo.svg" id="logon_logo">
<h1>CHRISTOPHER MILLER</h1>
<div id="logon" class="hidden">
    <input type="userName" name="userName" id="userName" value="camiller"> 
    <input type="password" name="password" id="password" value="password"> 
    <button id="logon_botton">Submit</button>
</div>
    <nav id="navElement">
        ${navDisplayString}
    </nav>
`
// Write header and nav bar to DOM
headerEl.innerHTML = headerDisplayString

document.getElementById('logon_logo').addEventListener('click', event => {
    document.getElementById('logon').classList.toggle('hidden')
})

// logon

const userPassword = ['camiller/password', 'test/test', 'sszpak/sszpak']

localStorage.setItem('logon', 'false')

document.getElementById('logon_botton').addEventListener('click', event => {
    let logonCredentials = document.getElementById('userName').value + '/' + document.getElementById('password').value

    if (userPassword.find(element => element === logonCredentials)) {
        localStorage.setItem('logon', 'true')
        document.getElementById('logon').classList.toggle('hidden')
        if (document.getElementById('modal')) {
            document.getElementById('modal').classList.toggle('hidden')
        }
    }
})

const userPassword = ['camiller/password', 'test/test', 'sszpak/sszpak']

document.getElementById('logon_botton').addEventListener('click', event => {
    let logonCredentials = document.getElementById(userName).value + document.getElementById(password).value
    console.log(logonCredentials)
})

// Open Modal Windon
document.getElementById('modal').addEventListener('click', event => {
    document.getElementById('modalDiv').style.display = 'block'

    document.getElementById('form').reset()
})

Array.from(document.getElementsByClassName('formfield')).forEach(field => {
    field.addEventListener('focus', event => {
        console.log(event)
        event.target.value = ''
    })
})

// Close Modal Window with X in upper right hand corner
document.getElementById('closeModal').addEventListener('click', event => {
    document.getElementById('modalDiv').style.display = 'none'
})

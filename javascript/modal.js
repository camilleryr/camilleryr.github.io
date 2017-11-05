// Open Modal Windon
document.getElementById('modal').addEventListener('click', event => {
    document.getElementById('modalDiv').style.display = 'block'

    document.getElementById('form').reset()
})

Array.from(document.getElementsByClassName('formField')).forEach(element => {
    element.addEventListener('focus', event => {
        console.log(event)
        let currentElId = event.target.id
        if (event.target.value === defaultValueObject[currentElId]) {
            event.target.value = ''
        }
    })
})

// eventlistener for all functionality
document.getElementById('modalDiv').addEventListener('click', event => {
    let elID = event.target.id
    switch (true) {
        case elID === 'publish':
            publish()
            break

        case elID === 'closeModal':
            closeModal()
            break

        case elID.startsWith('delete'):
            deleteContent(elID.split('-')[1])
            break

        case elID.startsWith('edit'):
            editContent(elID.split('-')[1])
            break

        case elID === ('saveChanges'):
            saveChanges()
            break

        default:
            break
    }
})

// Close Modal Window with X in upper right hand corner
const closeModal = () => {
    document.getElementById('modalDiv').style.display = 'none'
}

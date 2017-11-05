let editIndex

const editContent = id => {
    id = parseInt(id)
    document.getElementById('publish').classList = 'hidden'
    document.getElementById('saveChanges').classList = ''

    editIndex = originalContent.indexOf(originalContent.find(elemnt => elemnt.id === id))
    let currentObject = originalContent[editIndex]

    Array.from(document.getElementsByClassName('formfield')).forEach(element => {
        element.value = currentObject[element.id]
    })
}

const saveChanges = () => {
    document.getElementById('publish').classList = ''
    document.getElementById('saveChanges').classList = 'hidden'

    Array.from(document.getElementsByClassName('formfield')).forEach(element => {
        let editedValue
        if (element.id === 'tags' || element.id === 'teammates' || element.id === 'techUsed') {
            editedValue = element.value.split(',')
        } else {
            editedValue = element.value
        }
        originalContent[editIndex][element.id] = editedValue
    })
    localStorage.setItem(databaseName, JSON.stringify(originalContent))
    document.getElementById('form').reset()
    listContents(originalContent)
    initializePagination()
}

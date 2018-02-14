const deleteContent = function (id) {
    id = parseInt(id)
    originalContent[originalContent.indexOf(originalContent.find(elemnt => elemnt.id === id))].show = false
    localStorage.setItem(databaseName, JSON.stringify(originalContent))
    listContents(originalContent)
    initializePagination()
}

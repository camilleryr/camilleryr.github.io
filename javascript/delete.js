const deleteContent = function (id) {
    id = parseInt(id)
    originalContent.splice(originalContent.indexOf(originalContent.find(elemnt => elemnt.id === id)), 1)
    localStorage.setItem(databaseName, JSON.stringify(originalContent))
    listContents(originalContent)
    initializePagination()
}

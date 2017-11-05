// Listen to click event on publish button - create an array of input fields, pass it to blog generator - reload page page one of blogs

defaultValueObject = {
    'title': 'Blog Title',
    'author': 'Chris Miller',
    'tags': 'Blog Tags - Separated By Tags',
    'content': 'Blog Contents'
}

const publish = () => {
    blogDatabase.unshift(blogObjectFactory([
        document.getElementById('title').value,
        document.getElementById('date').value,
        document.getElementById('author').value,
        document.getElementById('content').value,
        document.getElementById('tags').value
    ]))

    localStorage.setItem('blogDatabaseStored', JSON.stringify(blogDatabase))
    onPageLoad(blogDatabase)
    document.getElementById('modalDiv').style.display = 'none'
}

listContents(blogDatabase)

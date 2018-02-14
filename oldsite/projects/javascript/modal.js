// Listen to click event on publish button - create an array of input fields, pass it to blog generator - reload page page one of blogs

defaultValueObject = {
    'title': 'Project Title',
    'teammates': 'Teammates - Separated By Tags',
    'tech': 'Tech Used - Separated By Commas',
    'link': 'HTTP Link',
    'content': 'Project Description'
}

const publish = () => {
    projectDatabase.unshift(projectObjectFactory([
        document.getElementById('title').value,
        document.getElementById('date').value,
        document.getElementById('techUsed').value,
        document.getElementById('teammates').value,
        document.getElementById('link').value
    ]))

    localStorage.setItem('projectDatabaseStored', JSON.stringify(projectDatabase))
    onPageLoad(projectDatabase)
    document.getElementById('modalDiv').style.display = 'none'
}

listContents(originalContent)
const writeElement = document.getElementById('blogContent')

const writeContent = blogArticlesToDisplay => {
    // Output blogdata to html

    // Declare variable that will write to html
    let currentPageHTML = ''

    // Iterates over slice and ammends it to currentPageHTML variable
    blogArticlesToDisplay.forEach(element => {
        // Create spans for each tag to be injected into the HTML string on each individual blog
        if (element.show) {
            let blogTags = ``
            element.tags.forEach(tag => {
                blogTags += `
                <span class='tags'>${tag}</span>
                `
            })

            // Create HTML string for each individual blog
            currentPageHTML += `
            <div class='card'>
            <h1>${element.id} : ${element.title}</h1>
            <h2>${element.content}</h2>
            <div id='blogTags'>${blogTags}</div>
            <h4>${element.author} - ${element.date}</h4>
            </div>
            `
        }
    })

    // Write blogs to HTML
    writeElement.innerHTML = currentPageHTML
}

window.onload = onPageLoad(blogDatabase, 'blogDatabaseStored', 3)

// test

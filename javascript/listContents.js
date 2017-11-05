const listContents = contentArray => {
    const contentEl = document.querySelector('.modal__listContents')
    let contentToWrite = ''

    contentArray.forEach(contentObject => {
        if (contentObject.show) {
            let id = contentObject.id
            contentToWrite += `
                <article class="block-${id}">
                    <div>
                        <h2>${id} : ${contentObject.title}</h2>
                        <p>Date : ${contentObject.date}<p>
                    </div>
                    <div>
                        <button id="delete-${id}">DELETE</button>
                        <button id="edit-${id}">EDIT</button>
                    </div>
                </article>
            `
        }
    })

    contentEl.innerHTML = contentToWrite
}

// Call JSON object from localStorage - parse it - assign it to let
let blogDatabaseParse = JSON.parse(localStorage.getItem("blogDatabaseStored"))

// Output blogdata to html
let blogElement = document.getElementById("blogContent")

for (let i = (blogDatabaseParse.length - 1); i >= 0; i--) {
    let element = blogDatabaseParse[i];

    blogElement.innerHTML += `
    <div class="card">
        <h1>${element.title}</h1>
        <h2>${element.content}</h2>
        <div id="blog${i}tags"></div>
        <h4>${element.author} - ${element.dateOfPublication}</h4>
    </div>
    `
    let blogTags = element.tags
    let blogTagsElement = document.getElementById(`blog${i}tags`)
    for (let index = 0; index < blogTags.length; index++) {
        blogTagsElement += `
        <div class="blogTags">${blogTags[index]}</div>
        `
    }
}
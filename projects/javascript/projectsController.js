// Output blogdata to html
let writeElement = document.getElementById('projectContent')

const writeContent = projectsToDisplay => {
    let currentPageHTML = ''

    projectsToDisplay.forEach(project => {
        let techTags = ``
        project.techUsed.forEach(tag => {
            techTags += `
            <span class="tech">${tag}</span>
            `
        })

        let teammates = ``
        project.teammates.forEach(tag => {
            teammates += `
            <span class="teammates">${tag}</span>
            `
        })

        currentPageHTML += `
        <article class="projectItem">
            <h2>Project Name : ${project.title}</h2>
            <div class="techTags">${techTags}</div>
            <div class="teammatesTags">${teammates}</div>
            <h4>Completed on: ${project.dateCompleted}</h4>
            <a href="${project.link}" target="_blank">Check it out</a>
        </article>
        `
    })

    writeElement.innerHTML = currentPageHTML
}

window.onload = onPageLoad(projectDatabase, 2)

// Blog Database Array
const blogDatabase = []

// Gernerator function to create unique ids
const idGenerator = function* () {
    let id = 1

    while(true) {
        yield id++
    }
}

// Generator function instance
let blogIdFactory = idGenerator()

// factory function to creat blog objects and push them into database
const blogObjectGenerator = function (title, date, content, ...tags) {
    blogDatabase.push(
        Object.create(null, {
            "id": { value: blogIdFactory.next().value, enumerable: true },
            "title": { value: title, enumerable: true },
            "dateOfPublication": { value: date, enumerable: true },
            "content": { value: content, enumerable: true },
            "author": { value: "Chris Miller", enumerable: true },
            "tags": { value: tags, enumerable: true }
        })
    )
}


blogObjectGenerator(
    "This is my first blog post", 
    "2017-10-05",
    "We are on day 4 of the full-stack software development bootcamp, and so far it is going well. The material can be confounding at times, but I have been assured that it will fall into place as long as I continue to forge ahead.",
    "First Blog", "NSS", "Check In"
)

blogObjectGenerator(
    "Mid week 2 update", 
    "2017-10-11",
    "We are on day 8 and have been reconfiguring our personal sites to dynamically load data to our sites using JSON / localStorage.",
    "JSON", "Document Methods", "NSS", "Check In"
)

blogObjectGenerator(
    "Jagged Ferrets FTW", 
    "2017-10-13",
    "End of week two and we just presented the work from our first sprint - hobsandjills.com - a ferret and ferret accessory website.  It was a great experience with great folks and we came up with a project, that while not perfect, met the m.v.p. requirements and we were able to institue some of our flex projects including some toaster and modal code.",
    "Flexbox", "Modal Box", "Toaster", "CSS Sucks"
)

blogObjectGenerator(
    "Confued Camels and Pagination", 
    "2017-10-18",
    "Day 13 is underwy and we have finished up presenting our second group projects to the class.  For this outing, we were tasked with repeating the propt from our first group project with a new team and the new skills we had learned during the first turn.  My group, the confused camels, set about to create a new company website.<br>I was knee deep in creating a vanilla javascript message board / email platform when all of the students were called back into class and alerted to a new feature that needed to be added before the end of the sprint - pagination.  Its an impressive feat that all six groups were able to complete a working version of this feature in the few hours provided given that many of the skills had not been covered in class at this point.",
    "Pagination", "Javascript", "Pivot", "Group 2 Electric Boogaloo"
)

blogObjectGenerator(
    "Getting Real, Real Fast", 
    "2017-10-19",
    "Today we live coded our pagination project from the other day and I learn, once again, the valuable lesson that I dont know much, and the little I do know is at best incomplete.  Lab time today is dedicated to generator functions / factory functions, and implimenting pagination on this very blog page, so if you have that functionality, I was successful",
    "Pagination Part Duex", "Generators", "Factories"
)

blogObjectGenerator(
    "Test Blog 1", 
    "2017-10-20",
    "This is a test blog to fill out a bit of content.  I am filling this out more to see if that solves my styling issues... for now"
)

blogObjectGenerator(
    "Test Blog 2", 
    "2017-10-21",
    "This is a second test blog to fill out a bit more additional content.  This is a nonsence sentince to put some shit on the page"
)

blogObjectGenerator(
    "Test Blog 3", 
    "2017-10-22",
    "Continuing to add content to make it so that there are enough pages of blog entries to try out my pagination"
)

blogObjectGenerator(
    "Test Blog 4", 
    "2017-10-22",
    "Its starting to get harder to fill up content with stuff that means nothing.  I guess I could write content that had substiance but that would be more taxing and I am not to concerned with anything in these blogs at this point"
)

blogObjectGenerator(
    "Test Blog 5", 
    "2017-10-29",
    "I am mostly just concerned with trying to create a pagination bar that is responsive.  I want it to only show the first 5 pages, then re-write the bar to have 2-6 or 3-7 "
)

blogObjectGenerator(
    "Test Blog 6", 
    "2017-10-20",
    "This is a test blog to fill out a bit of content.  I am filling this out more to see if that solves my styling issues... for now"
)

blogObjectGenerator(
    "Test Blog 7", 
    "2017-10-21",
    "This is a second test blog to fill out a bit more additional content.  This is a nonsence sentince to put some shit on the page"
)

blogObjectGenerator(
    "Test Blog 8", 
    "2017-10-22",
    "Continuing to add content to make it so that there are enough pages of blog entries to try out my pagination"
)

blogObjectGenerator(
    "Test Blog 9", 
    "2017-10-22",
    "Its starting to get harder to fill up content with stuff that means nothing.  I guess I could write content that had substiance but that would be more taxing and I am not to concerned with anything in these blogs at this point"
)

blogObjectGenerator(
    "Test Blog 10", 
    "2017-10-29",
    "I am mostly just concerned with trying to create a pagination bar that is responsive.  I want it to only show the first 5 pages, then re-write the bar to have 2-6 or 3-7 "
)
blogObjectGenerator(
    "This is my first blog post", 
    "2017-10-05",
    "We are on day 4 of the full-stack software development bootcamp, and so far it is going well. The material can be confounding at times, but I have been assured that it will fall into place as long as I continue to forge ahead.",
    "First Blog", "NSS", "Check In"
)

blogObjectGenerator(
    "Mid week 2 update", 
    "2017-10-11",
    "We are on day 8 and have been reconfiguring our personal sites to dynamically load data to our sites using JSON / localStorage.",
    "JSON", "Document Methods", "NSS", "Check In"
)

blogObjectGenerator(
    "Jagged Ferrets FTW", 
    "2017-10-13",
    "End of week two and we just presented the work from our first sprint - hobsandjills.com - a ferret and ferret accessory website.  It was a great experience with great folks and we came up with a project, that while not perfect, met the m.v.p. requirements and we were able to institue some of our flex projects including some toaster and modal code.",
    "Flexbox", "Modal Box", "Toaster", "CSS Sucks"
)

blogObjectGenerator(
    "Confued Camels and Pagination", 
    "2017-10-18",
    "Day 13 is underwy and we have finished up presenting our second group projects to the class.  For this outing, we were tasked with repeating the propt from our first group project with a new team and the new skills we had learned during the first turn.  My group, the confused camels, set about to create a new company website.<br>I was knee deep in creating a vanilla javascript message board / email platform when all of the students were called back into class and alerted to a new feature that needed to be added before the end of the sprint - pagination.  Its an impressive feat that all six groups were able to complete a working version of this feature in the few hours provided given that many of the skills had not been covered in class at this point.",
    "Pagination", "Javascript", "Pivot", "Group 2 Electric Boogaloo"
)

blogObjectGenerator(
    "Getting Real, Real Fast", 
    "2017-10-19",
    "Today we live coded our pagination project from the other day and I learn, once again, the valuable lesson that I dont know much, and the little I do know is at best incomplete.  Lab time today is dedicated to generator functions / factory functions, and implimenting pagination on this very blog page, so if you have that functionality, I was successful",
    "Pagination Part Duex", "Generators", "Factories"
)

blogObjectGenerator(
    "Test Blog 1", 
    "2017-10-20",
    "This is a test blog to fill out a bit of content.  I am filling this out more to see if that solves my styling issues... for now"
)

blogObjectGenerator(
    "Test Blog 2", 
    "2017-10-21",
    "This is a second test blog to fill out a bit more additional content.  This is a nonsence sentince to put some shit on the page"
)

blogObjectGenerator(
    "Test Blog 3", 
    "2017-10-22",
    "Continuing to add content to make it so that there are enough pages of blog entries to try out my pagination"
)

blogObjectGenerator(
    "Test Blog 4", 
    "2017-10-22",
    "Its starting to get harder to fill up content with stuff that means nothing.  I guess I could write content that had substiance but that would be more taxing and I am not to concerned with anything in these blogs at this point"
)

blogObjectGenerator(
    "Test Blog 5", 
    "2017-10-29",
    "I am mostly just concerned with trying to create a pagination bar that is responsive.  I want it to only show the first 5 pages, then re-write the bar to have 2-6 or 3-7 "
)

blogObjectGenerator(
    "Test Blog 6", 
    "2017-10-20",
    "This is a test blog to fill out a bit of content.  I am filling this out more to see if that solves my styling issues... for now"
)

blogObjectGenerator(
    "Test Blog 7", 
    "2017-10-21",
    "This is a second test blog to fill out a bit more additional content.  This is a nonsence sentince to put some shit on the page"
)

blogObjectGenerator(
    "Test Blog 8", 
    "2017-10-22",
    "Continuing to add content to make it so that there are enough pages of blog entries to try out my pagination"
)

blogObjectGenerator(
    "Test Blog 9", 
    "2017-10-22",
    "Its starting to get harder to fill up content with stuff that means nothing.  I guess I could write content that had substiance but that would be more taxing and I am not to concerned with anything in these blogs at this point"
)

blogObjectGenerator(
    "Test Blog 10", 
    "2017-10-29",
    "I am mostly just concerned with trying to create a pagination bar that is responsive.  I want it to only show the first 5 pages, then re-write the bar to have 2-6 or 3-7 "
)
// template to generate blog object

// blogObjectGenerator(
//     title, 
//     date,
//     content,
//     tags
// )


let blogDatabaseString = JSON.stringify(blogDatabase)
localStorage.setItem("blogDatabaseStored", blogDatabaseString)
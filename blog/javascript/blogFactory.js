// Blog Database Array
const blogDatabase = []

// Check local storage for unique id value and intialize at 0 if not present
if (localStorage.getItem("blogId") === null) {
    localStorage.setItem("blogId", JSON.stringify(0))
}

// Gernerator function to create unique ids
const idGenerator = function* () {

    let id = JSON.parse(localStorage.getItem("blogId"))

    while(true) {
        id++
        localStorage.setItem("blogId", `${id}`)
        yield id
    }
}

// Generator function instance
let blogIdFactory = idGenerator()

// factory function to creat blog objects and push them into database
const blogObjectGenerator = function (blog) {
    
    let blogDatabase = JSON.parse(localStorage.getItem("blogDatabaseStored"))

    blogDatabase.push(
        Object.create(null, {
            "id": { value: blogIdFactory.next().value, enumerable: true },
            "title": { value: blog[0], enumerable: true },
            "dateOfPublication": { value: blog[1], enumerable: true },
            "content": { value: blog[3], enumerable: true },
            "author": { value: blog[2], enumerable: true },
            "tags": { value: blog[4].split(", "), enumerable: true }
        })
    )

    localStorage.setItem("blogDatabaseStored", JSON.stringify(blogDatabase))
}


// Check local storage for blog database and initialize with hard coded blog entries

if (localStorage.getItem("blogDatabaseStored") === null) {

    localStorage.setItem("blogDatabaseStored", JSON.stringify([]))
    
    blogObjectGenerator(
        ["This is my first blog post", 
        "2017-10-05",
        "Chris Miller",
        "We are on day 4 of the full-stack software development bootcamp, and so far it is going well. The material can be confounding at times, but I have been assured that it will fall into place as long as I continue to forge ahead.",
        "First Blog, NSS, Check In"]
    )

    blogObjectGenerator(
        ["Mid week 2 update", 
        "2017-10-11",
        "Chris Miller",
        "We are on day 8 and have been reconfiguring our personal sites to dynamically load data to our sites using JSON / localStorage.",
        "JSON, Document Methods, NSS, Check In"]
    )

    blogObjectGenerator(
        ["Jagged Ferrets FTW", 
        "2017-10-13",
        "Chris Miller",
        "End of week two and we just presented the work from our first sprint - hobsandjills.com - a ferret and ferret accessory website.  It was a great experience with great folks and we came up with a project, that while not perfect, met the m.v.p. requirements and we were able to institue some of our flex projects including some toaster and modal code.",
        "Flexbox, Modal Box, Toaster, CSS Sucks"]
    )

    blogObjectGenerator(
        ["Confued Camels and Pagination", 
        "2017-10-18",
        "Chris Miller",
        "Day 13 is underwy and we have finished up presenting our second group projects to the class.  For this outing, we were tasked with repeating the propt from our first group project with a new team and the new skills we had learned during the first turn.  My group, the confused camels, set about to create a new company website.<br>I was knee deep in creating a vanilla javascript message board / email platform when all of the students were called back into class and alerted to a new feature that needed to be added before the end of the sprint - pagination.  Its an impressive feat that all six groups were able to complete a working version of this feature in the few hours provided given that many of the skills had not been covered in class at this point.",
        "Pagination, Javascript, Pivot, Group 2 Electric Boogaloo"]
    )

    blogObjectGenerator(
        ["Getting Real, Real Fast", 
        "2017-10-19",
        "Chris Miller",
        "Today we live coded our pagination project from the other day and I learn, once again, the valuable lesson that I dont know much, and the little I do know is at best incomplete.  Lab time today is dedicated to generator functions / factory functions, and implimenting pagination on this very blog page, so if you have that functionality, I was successful",
        "Pagination Part Duex, Generators, Factories"]
    )

    blogObjectGenerator(
        ["Looking ahead and falling behind", 
        "2017-10-24",
        "Chris Miller",
        "Today was a lab day, and being ostly up to date on my excercises and tickets, I attempted to work ahead by looking at the scope chapter and associated excercise.  I spent the majority of the morning staring at my screen and only wrote perhaps 3 lines of code, which I promptly deleted.  Thankfully a new set of tickets were assigned, and while they are a significant challenge, they are a challenge I understand",
        "#Nope, Glad to Have Tickets, Just this once, Never Again"]
    )

    // template to generate blog object

    // blogObjectGenerator(
    //     title, 
    //     date,
    //     author,
    //     content,
    //     tags
    // )
}
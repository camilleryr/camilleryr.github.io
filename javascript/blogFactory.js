// Check local storage for JSON object??

const blog0 = {
    "title": "This is my first blog post",
    "dateOfPublication": "2017-10-05",
    "tags": ["First Blog", "NSS", "Check In"],
    "author": "Chris Miller",
    "content": ["We are on day 4 of the full-stack software development bootcamp, and so far it is going well. The material can be confounding at times, but I have been assured that it will fall into place as long as I continue to forge ahead."]
}

const blog1 = {
    "title": "Mid week 2 update",
    "dateOfPublication": "2017-10-11",
    "tags": ["JSON", "Document Methods", "NSS", "Check In"],
    "author": "Chris Miller",
    "content": ["We are on day 8 and have been reconfiguring our personal sites to dynamically load data to our sites using JSON / localStorage."]
}

const blog2 = {
    "title": "Jagged Ferrets FTW",
    "dateOfPublication": "2017-10-13",
    "tags": ["Flexbox", "Modal Box", "Toaster", "CSS Sucks"],
    "author": "Chris Miller",
    "content": ["End of week two and we just presented the work from our first sprint - hobsandjills.com - a ferret and ferret accessory website.  It was a great experience with great folks and we came up with a project, that while not perfect, met the m.v.p. requirements and we were able to institue some of our flex projects including some toaster and modal code."]
}

const blog3 = {
    "title": "Confued Camels and Pagination",
    "dateOfPublication": "2017-10-18",
    "tags": ["Pagination", "Javascript", "Pivot", "Group 2 Electric Boogaloo"],
    "author": "Chris Miller",
    "content": ["Day 13 is underwy and we have finished up presenting our second group projects to the class.  For this outing, we were tasked with repeating the propt from our first group project with a new team and the new skills we had learned during the first turn.  My group, the confused camels, set about to create a new company website.<br>I was knee deep in creating a vanilla javascript message board / email platform when all of the students were called back into class and alerted to a new feature that needed to be added before the end of the sprint - pagination.  Its an impressive feat that all six groups were able to complete a working version of this feature in the few hours provided given that many of the skills had not been covered in class at this point."]
}

const blogDatabase = [blog1, blog2, blog3]

let blogDatabaseString = JSON.stringify(blogDatabase)
localStorage.setItem("blogDatabaseStored", blogDatabaseString)
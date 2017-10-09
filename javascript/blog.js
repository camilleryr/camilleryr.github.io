const blog1 = {
    "tite": "This is my first blog post",
    "dateOfPublication": "2017-10-05",
    "tags": ["First Blog", "NSS", "Check In"],
    "author": "Chris Miller",
    "content": ["We are on day 4 of the full-stack software development bootcamp, and so far it is going well. The material can be confounding at times, but I have been assured that it will fall into place as long as I continue to forge ahead."]
}

const blogDatabase = [blog1]

let blogDatabaseString = JSON.stringify(blogDatabase)
localStorage.setItem("blogDatabaseStored", blogDatabaseString)
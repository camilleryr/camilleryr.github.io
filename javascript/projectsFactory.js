const project0 = {
    "name": "Overly Excited",
    "dateCompleted": "2017-10-04",
    "techUsed": ["array methods"],
    "teammates": [],
    "link": "https://github.com/camilleryr/Overly-Excited"
}
const project1 = {
    "name": "Cash To Coins",
    "dateCompleted": "2017-10-05",
    "techUsed": ["for loops"],
    "teammates": [],
    "link": "https://github.com/camilleryr/coins-to-cash"
}
const project2 = {
    "name": "Grades",
    "dateCompleted": "2017-10-06",
    "techUsed": ["objects"],
    "teammates": []
}
const project3 = {
    "name": "Home Inventory",
    "dateCompleted": "2017-10-08",
    "techUsed": ["JSON", "localStorage"],
    "teammates": [],
    "link": "https://github.com/camilleryr/grades"
}
const project4 = {
    "name": "CSS Selector",
    "dateCompleted": "2017-10-09",
    "techUsed": ["CSS Selectors"],
    "teammates": [],
    "link": "https://github.com/camilleryr/css-selectors"
}
const project5 = {
    "name": "Hobs & Jills",
    "dateCompleted": "2017-10-13",
    "techUsed": ["Flexbox", "Modal", "Toaster", "Form Validation"],
    "teammates": ["Kris", "Jessie", "Courtney", "Ryan"],
    "link": "https://github.com/nss-day-cohort-22/company-website-jagged-ferrets"
}

const project6 = {
    "name": "CAMELS Chicken Sunglasss",
    "dateCompleted": "2017-10-18",
    "techUsed": ["Javascript", "Pagination", "Comment Section"],
    "teammates": ["John", "Paul", "Kristen"],
    "link": "https://github.com/nss-day-cohort-22/company-website-part-deux-confused-camels"
}

const projectDatabase = [project0, project1, project2, project3, project4, project5]

let projectDatabaseString = JSON.stringify(projectDatabase)
localStorage.setItem("projectDatabaseStored", projectDatabaseString)
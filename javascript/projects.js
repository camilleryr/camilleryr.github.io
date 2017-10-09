const project1 = {
    "name": "Overly Excited",
    "dateCompleted": "2017-10-04",
    "techUsed": ["array methods"],
    "teammates": []
}
const project2 = {
    "name": "Cash To Coins",
    "dateCompleted": "2017-10-05",
    "techUsed": ["for loops"],
    "teammates": []
}
const project3 = {
    "name": "Grades",
    "dateCompleted": "2017-10-06",
    "techUsed": ["objects"],
    "teammates": []
}
const project4 = {
    "name": "Home Inventory",
    "dateCompleted": "2017-10-08",
    "techUsed": ["JSON", "localStorage"],
    "teammates": []
}
const project5 = {
    "name": "CSS Selector",
    "dateCompleted": "2017-10-09",
    "techUsed": ["CSS Selectors"],
    "teammates": []
}

const projectDatabase = [project1, project2, project3, project4, project5]

let projectDatabaseString = JSON.stringify(projectDatabase)
localStorage.setItem("projectDatabaseStored", projectDatabaseString)
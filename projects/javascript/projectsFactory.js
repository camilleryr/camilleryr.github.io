// Set initial condition of blogDatabase from localStorage or as an empty array
const projectDatabase = JSON.parse(localStorage.getItem('projectDatabaseStored')) || []

// Gernerator function to create unique ids, pulls latestID value from blogDatabase and adds it to the generated number
const idGenerator = function * (latestID) {
    let id = 1

    while (true) {
        yield latestID + id++
    }
}

// Pull highest id number from blogDatabase or set to 0
let latestID = (projectDatabase[0] || { id: 0 })

// Generator function instance
let projectIdFactory = idGenerator(latestID.id)

// factory function to creat blog objects and push them into database
const projectObjectFactory = project =>
    Object.create(null, {
        'id': { value: projectIdFactory.next().value, enumerable: true },
        'title': { value: project[0], enumerable: true },
        'dateCompleted': { value: project[1], enumerable: true },
        'techUsed': { value: project[2].split(', '), enumerable: true },
        'teammates': { value: project[3].split(', '), enumerable: true },
        'link': { value: project[4], enumerable: true }
    })

// Check local storage for blog database and initialize with hard coded blog entries

if (projectDatabase.length === 0) {
    projectDatabase.unshift(projectObjectFactory([
        'Overly Excited',
        '2017-10-04',
        'Arrays, Loops',
        'Solo Project',
        'https://github.com/camilleryr/Overly-Excited']))

    projectDatabase.unshift(projectObjectFactory([
        'Cash To Coins',
        '2017-10-05',
        'Loops, Simple Math',
        'Solo Project',
        'https://github.com/camilleryr/coins-to-cash']))

    projectDatabase.unshift(projectObjectFactory([
        'Grades',
        '2017-10-06',
        'Loops, Loops, More Loops',
        'Solo Project',
        'https://github.com/camilleryr/grades']))

    projectDatabase.unshift(projectObjectFactory([
        'Home Inventory',
        '2017-10-08',
        'JSON, localStorage',
        'Solo Project',
        'https://github.com/camilleryr/home_inventory']))

    projectDatabase.unshift(projectObjectFactory([
        'CSS Selectors',
        '2017-10-09',
        'CSS Selectors',
        'Solo Project',
        'https://github.com/camilleryr/css-selectors']))

    projectDatabase.unshift(projectObjectFactory([
        'Hobs & Jills',
        '2017-10-13',
        'Flexbox, Modal, Toaster, Form Validation',
        'Kris, Jessie, Courtney, Ryan',
        'https://github.com/nss-day-cohort-22/company-website-jagged-ferrets']))

    projectDatabase.unshift(projectObjectFactory([
        'CAMELS Chicken Sunglasss',
        '2017-10-18',
        'Javascript, Pagination, Comment Section, Filtering',
        'John, Paul, Kristen',
        'https://github.com/nss-day-cohort-22/company-website-part-deux-confused-camels']))

    projectDatabase.unshift(projectObjectFactory([
        'Lexscopistan',
        '2017-10-30',
        'Scope, Generator Function, Getters and Setters',
        'Solo Project',
        'https://github.com/camilleryr/heap-skope']))

    localStorage.setItem('projectDatabaseStored', JSON.stringify(projectDatabase))
}

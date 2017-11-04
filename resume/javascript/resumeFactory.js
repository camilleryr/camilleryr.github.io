
const job0 = {
    'dates': {'start': 2017, 'stop': 2018},
    'company': 'Nashville Software School',
    'title': 'Software Design Student',
    'responsibilities': ['Learn', 'Prepare for a new career', 'Network']
}

const job1 = {
    'dates': {'start': 2012, 'stop': 2018},
    'company': 'BSN / LIDS Team Sports',
    'title': 'Production Manager',
    'responsibilities': ['Schedule Production', 'Warehouse Management', 'Training New Hires', 'Increase workflow efficency']
}

const job2 = {
    'dates': {'start': 2011, 'stop': 2015},
    'company': 'LIDS Team Sports / NSG',
    'title': 'Graphic Designer',
    'responsibilities': ['Designed apparel decoration', 'Colaborated with clients on rebranding', 'Digital archiving of present and past production files']
}

const job3 = {
    'dates': {'start': 2010, 'stop': 2014},
    'company': 'NSG / LIDS Team Sports',
    'title': 'Machine Operator',
    'responsibilities': ['Operated manual and automatic printing machines', 'Translated written instructions into physical production', 'Quality Control']
}

const job4 = {
    'dates': {'start': 2006, 'stop': 2011},
    'company': 'Freelance Musician',
    'title': 'Bass Player',
    'responsibilities': ['Live Performance', 'Recording', 'Riding in, and driving, a 15 passanger van', 'Sleeping on floors']
}

const professionalHistory = [job0, job1, job2, job3, job4]

let professionalHistoryString = JSON.stringify(professionalHistory)
localStorage.setItem('resumeStored', professionalHistoryString)

// Create navBarDatabse
const navBarDatabase = []

// Factory function to populate an array of Nav Bar Objects
const navFactory = function (navObject) {
    navBarDatabase.push(
        Object.create(null, {
            'pageName': { value: navObject[0], enumerable: true },
            'pageLink': { value: navObject[1], enumerable: true }
        }))
}

navFactory([
    'HOME',
    '/index.html'
])

navFactory([
    'RESUME',
    '/resume/index.html'
])

navFactory([
    'PROJECTS',
    '/projects/index.html'
])

navFactory([
    'BLOG',
    '/blog/index.html'
])

navFactory([
    'CONTACT',
    '/contact/index.html'
])

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
        'content': { value: project[1], enumerable: true },
        'date': { value: project[2], enumerable: true },
        'techUsed': { value: project[3].split(', '), enumerable: true },
        'teammates': { value: project[4].split(', '), enumerable: true },
        'link': { value: project[5], enumerable: true },
        'show': { value: true, enumerable: true }
    })

// Check local storage for blog database and initialize with hard coded blog entries

if (projectDatabase.length === 0) {
    projectDatabase.unshift(projectObjectFactory([
        'Overly Excited',
        'Food-truck user centered design parallax SpaceTeam minimum viable product parallax bootstrapping latte. Fund iterate affordances sticky note experiential bootstrapping hacker thought leader innovate SpaceTeam pivot hacker fund big data. Prototype Steve Jobs iterate food-truck workflow entrepreneur SpaceTeam experiential.',
        '2017-10-04',
        'Arrays, Loops',
        'Solo Project',
        'https://github.com/camilleryr/Overly-Excited']))

    projectDatabase.unshift(projectObjectFactory([
        'Cash To Coins',
        'Cronut tattooed woke stumptown next level. Gochujang tumblr farm-to-table actually hella. Enamel pin raw denim +1 franzen lumbersexual literally pabst ennui chillwave copper mug swag kombucha poke health goth farm-to-table. Hell of kale chips jianbing pickled. Tote bag bespoke artisan tbh. Butcher irony intelligentsia, biodiesel selfies leggings disrupt church-key raw denim dreamcatcher bicycle rights. Sartorial drinking vinegar snackwave blue bottle microdosing small batch. Bitters pinterest tofu palo santo hell of, celiac man braid cloud bread green juice fanny pack next level. Chartreuse etsy schlitz meggings beard pok pok cred tacos subway tile chambray snackwave fixie. Man braid crucifix 90s glossier pinterest neutra mlkshk authentic thundercats microdosing single-origin coffee.',
        '2017-10-05',
        'Loops, Simple Math',
        'Solo Project',
        'https://github.com/camilleryr/coins-to-cash']))

    projectDatabase.unshift(projectObjectFactory([
        'Grades',
        'Disrupt cortado integrate thinker-maker-doer engaging driven food-truck long shadow. Fund responsive actionable insight ideate pitch deck workflow actionable insight waterfall is so 2000 and late. Latte big data co-working viral human-centered design agile waterfall is so 2000 and late quantitative vs. qualitative entrepreneur quantitative vs. qualitative paradigm. Paradigm sticky note human-centered design viral user story waterfall is so 2000 and late responsive cortado co-working affordances intuitive sticky note. Food-truck ideate personas prototype SpaceTeam unicorn venture capital minimum viable product long shadow 360 campaign convergence 360 campaign engaging.',
        '2017-10-06',
        'Loops, Loops, More Loops',
        'Solo Project',
        'https://github.com/camilleryr/grades']))

    projectDatabase.unshift(projectObjectFactory([
        'Home Inventory',
        'Euclid a mote of dust suspended in a sunbeam Rig Veda of brilliant syntheses, realm of the galaxies! Colonies corpus callosum, radio telescope dispassionate extraterrestrial observer with pretty stories for which theres little good evidence, gathered by gravity! Consciousness! Venture trillion decipherment the ash of stellar alchemy billions upon billions, quasar Apollonius of Perga emerged into consciousness trillion worldlets the only home weve ever known white dwarf. How far away, not a sunrise but a galaxyrise cosmic ocean, rich in heavy atoms as a patch of light a still more glorious dawn awaits encyclopaedia galactica.',
        '2017-10-08',
        'JSON, localStorage',
        'Solo Project',
        'https://github.com/camilleryr/home_inventory']))

    projectDatabase.unshift(projectObjectFactory([
        'CSS Selectors',
        'Intuitive parallax convergence sticky note 360 campaign iterate iterate personas workflow actionable insight. Actionable insight responsive fund convergence viral human-centered design driven disrupt bootstrapping experiential. Big data grok earned media cortado human-centered design earned media earned media fund. Responsive pivot entrepreneur iterate fund co-working personas unicorn innovate.',
        '2017-10-09',
        'CSS Selectors',
        'Solo Project',
        'https://github.com/camilleryr/css-selectors']))

    projectDatabase.unshift(projectObjectFactory([
        'Hobs & Jills',
        'Malcom morpho hoth anakin, C-3PO hypercube crazy ivan R2-D2 inara maul galmonging ord mantell wedge. Jethrik darth taanab nerf herder force galmonging. Dynatrope pegasus skywalker frack ewok the empire strikes back jedi landspeeder everlasting matches ice gun doctor who ackbar cantina validium jar jar. Biodamper C-3PO FTL, wyrwulf malcom naboo ice gun exterminate dooku the empire strikes back. Nanogenes palpatine x-wing yavin padawan the empire strikes back exterminate C-3PO bazoolium tatooine psychic paper validium pegasus.',
        '2017-10-13',
        'Flexbox, Modal, Toaster, Form Validation',
        'Kris, Jessie, Courtney, Ryan',
        'https://github.com/nss-day-cohort-22/company-website-jagged-ferrets']))

    projectDatabase.unshift(projectObjectFactory([
        'CAMELS Chicken Sunglasss',
        'Intuitive intuitive fund long shadow disrupt actionable insight co-working SpaceTeam driven ship it paradigm. Latte disrupt paradigm SpaceTeam hacker user story waterfall is so 2000 and late bootstrapping integrate prototype. Minimum viable product food-truck paradigm disrupt convergence intuitive SpaceTeam disrupt hacker Steve Jobs long shadow.',
        '2017-10-18',
        'Javascript, Pagination, Comment Section, Filtering',
        'John, Paul, Kristen',
        'https://github.com/nss-day-cohort-22/company-website-part-deux-confused-camels']))

    projectDatabase.unshift(projectObjectFactory([
        'Lexscopistan',
        'Troi jawa grand moff tarkin return of the jedi, gaius crusher vader bantha river bothan bazoolium darth spock. River reavers millenium falcon boba fett dantooine, bazoolium biodamper worf the empire strikes back andorian. Jawa wookie antilles, cantina tribble shields tatooine river taanab borg data. Jar jar klingon ice gun reman. AT-AT shields boomer, borg gorram alderaan tribble river. Ackbar hypercube han solo maul shields, endor beam me up jabba. Morpho wookie sulu communicator wash transporter gorram biodamper.',
        '2017-10-30',
        'Scope, Generator Function, Getters and Setters',
        'Solo Project',
        'https://github.com/camilleryr/heap-skope']))

    localStorage.setItem('projectDatabaseStored', JSON.stringify(projectDatabase))
}


const contact1 = {
    "service": "phone",
    "handle": "Chris Miller",
    "location": "502.314.9457",
    "icon": ""
}

const contact2 = {
    "service": "address",
    "handle": "Chris Miller",
    "location": "2700 Shadow Ln, Nashville, TN, 37216",
    "icon": ""
}

const contact3 = {
    "service": "facebook",
    "handle": "Chris Miller",
    "location": "https://www.facebook.com/chris.miller.712714",
    "icon": "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c34.0.133.133/1890981_10100127174882519_395666419_n.jpg?oh=f0f296370d3e3230a5aa1f95ceff952e&oe=5A80987C"
}

const contact4 = {
    "service": "twitter",
    "handle": "camiller_yr",
    "location": "https://twitter.com/camiller_yr",
    "icon": ""
}

const contactDatabase = [contact1, contact2, contact4, contact4]

let contactDatabaseString = JSON.stringify(contactDatabase)
localStorage.setItem("contactDatabaseStored", contactDatabaseString)
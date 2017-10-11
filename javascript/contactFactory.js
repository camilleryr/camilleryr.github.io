
const contact1 = {
    "service": "phone",
    "handle": "Chris Miller",
    "location": "502.314.9457",
    "icon": "../images/phone_icon.svg"
}

const contact2 = {
    "service": "address",
    "handle": "Chris Miller",
    "location": "2700 Shadow Ln, Nashville, TN, 37216",
    "icon": "../images/address_icon.svg"
}

const contact3 = {
    "service": "facebook",
    "handle": "Chris Miller",
    "location": "https://www.facebook.com/chris.miller.712714",
    "icon": "../images/facebook_icon.svg"
}

const contact4 = {
    "service": "twitter",
    "handle": "camiller_yr",
    "location": "https://twitter.com/camiller_yr",
    "icon": "../images/twitter_icon.svg"
}

const contactDatabase = [contact1, contact2, contact4, contact4]

let contactDatabaseString = JSON.stringify(contactDatabase)
localStorage.setItem("contactDatabaseStored", contactDatabaseString)
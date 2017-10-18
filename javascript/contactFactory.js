
const contact0 = {
    "service": "phone",
    "handle": "Chris Miller",
    "location": "502.314.9457",
    "icon": "../images/phone_icon.svg",
    "tag": "Call Me"
}

const contact1 = {
    "service": "address",
    "handle": "Chris Miller",
    "location": "https://goo.gl/maps/tA2jWuSAbVm",
    "icon": "../images/address_icon.svg",
    "tag": "Find Me"
}

const contact2 = {
    "service": "facebook",
    "handle": "Chris Miller",
    "location": "https://www.facebook.com/chris.miller.712714",
    "icon": "../images/facebook_icon.svg",
    "tag": "Friend Me"
}

const contact3 = {
    "service": "twitter",
    "handle": "camiller_yr",
    "location": "https://twitter.com/camiller_yr",
    "icon": "../images/twitter_icon.svg",
    "tag": "Tweet Me"
}

const contact4 = {
    "service": "eamil",
    "handle": "camiller.yr",
    "location": "mailto:camiller.yr@gmail.com?Subject=Hello%20again",
    "icon": "../images/email_icon.svg",
    "tag": "Email Me"
}

const contactDatabase = [contact0, contact1, contact2, contact3, contact4]

let contactDatabaseString = JSON.stringify(contactDatabase)
localStorage.setItem("contactDatabaseStored", contactDatabaseString)
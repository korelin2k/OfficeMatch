import { Profile } from "./profile";

// Seed to add initial members to the database
// Executed manually

// Michael
const michaelDetails = {
    firstName: "Michael",
    lastName: "",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/b/\
bb/3michael.jpg/revision/latest/scale-to-width-down/620?cb=20180918205003`,
    scores: [ 1, 1, 1, 1, 4, 3, 2, 5, 2, 1 ],
};
const michael = new Profile(michaelDetails);
michael.add();

// Eleanor
const eleanorDetails = {
    firstName: "Eleanor",
    lastName: "Shellstrop",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/d/\
da/3shellstrop.jpg/revision/latest/scale-to-width-down/620?cb=20180918204854`,
    scores: [ 5, 1, 2, 1, 2, 1, 2, 1, 5, 3 ],
};
const eleanor = new Profile(eleanorDetails);
eleanor.add();

// Chidi
const chidiDetails = {
    firstName: "Chidi",
    lastName: "Anagonye",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/e/\
e1/3chidi.jpg/revision/latest/scale-to-width-down/620?cb=20180918204837`,
    scores: [ 2, 2, 5, 2, 1, 2, 1, 1, 1, 3 ],
};
const chidi = new Profile(chidiDetails);
chidi.add();

// Tahani
const tahaniDetails = {
    firstName: "Tahani",
    lastName: "Al-Jamil",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/1/\
1a/3tahani.jpg/revision/latest/scale-to-width-down/620?cb=20180918204934`,
    scores: [ 3, 1, 4, 4, 5, 1, 4, 1, 2, 1 ],
};
const tahani = new Profile(tahaniDetails);
tahani.add();

// Jason
const jasonDetails = {
    firstName: "Jason",
    lastName: "Mendoza",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/a/\
a5/3jason.jpg/revision/latest/scale-to-width-down/620?cb=20180918204919`,
    scores: [ 4, 5, 2, 2, 4, 1, 5, 1, 3, 3 ],
};
const jason = new Profile(jasonDetails);
jason.add();

// Good Janet
const goodJanetDetails = {
    firstName: "Janet",
    lastName: "",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/9/\
90/3janet.jpg/revision/latest/scale-to-width-down/620?cb=20180918204908`,
    scores: [ 5, 5, 1, 5, 1, 5, 2, 1, 1, 1 ],
};
const goodJanet = new Profile(goodJanetDetails);
goodJanet.add();

// Bad Janet
const badJanetDetails = {
    firstName: "Janet",
    lastName: "",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/d/\
da/Bad_Janet.jpg/revision/latest/scale-to-width-down/619?cb=20171023030348`,
    scores: [ 1, 1, 1, 1, 1, 5, 3, 5, 5, 1 ],
};
const badJanet = new Profile(badJanetDetails);
badJanet.add();

// Vicky
const vickyDetails = {
    firstName: "Vicky",
    lastName: "Sengupta",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/7/\
79/Vicky.jpg/revision/latest/scale-to-width-down/620?cb=20180913210804`,
    scores: [ 1, 2, 2, 1, 1, 2, 2, 5, 3, 2 ],
};
const vicky = new Profile(vickyDetails);
vicky.add();

// Mindy
const mindyDetails = {
    firstName: "Mindy",
    lastName: "St. Claire",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/9/\
9c/Mindy-St-Claire.jpg/revision/latest/scale-to-width-down/620?cb=20180914205021`,
    scores: [ 4, 1, 3, 3, 2, 1, 2, 1, 2, 1 ],
};
const mindy = new Profile(mindyDetails);
mindy.add();

// Derek
const derekDetails = {
    firstName: "Derek",
    lastName: "Hofstetler",
    photo: `https://vignette.wikia.nocookie.net/thegoodplace/images/7/\
75/Derek.jpg/revision/latest?cb=20171030124055`,
    scores: [ 3, 4, 1, 4, 1, 4, 1, 1, 1, 5 ],
};
const derek = new Profile(derekDetails);
derek.add();

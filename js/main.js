var iceCream = ['Coconut', 'CheeseCake', 'ButterPecan'];
iceCream.push('Vanila');

var currentPresident = {
    firstName: 'Donald',
    lastName: 'Trump',
    termLength: 0.7,
    party: 'Republicans',
    yearsOfPresidency: '2017'
};

var previousPresident = {
    firstName: 'Barack',
    lastName: 'Obama',
    termLength: 8,
    party: 'Democratics',
    yearsOfPresidency: '2009 - 2017'
};

var fourtyThirdPresident = {
    firstName: 'George W.',
    lastName: 'Bush',
    termLength: 8,
    party: 'Republicans',
    yearsOfPresidency: '2001 - 2009'
};

var fourtySecondPresident = {
    firstName: 'Bill',
    lastName: 'Clinton',
    termLength: 8,
    party: 'Democratics',
    yearsOfPresidency: '1993 - 2001'
};

var fourtyFirstPresident = {
    firstName: 'George H. W.',
    lastName: 'Bush',
    termLength: 4,
    party: 'Republicans',
    yearsOfPresidency: '1989 - 1993'
};

var presidents = [currentPresident,
    previousPresident,
    fourtyThirdPresident,
    fourtySecondPresident,
    fourtyFirstPresident];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

function howdy() {
    console.log('Reggie Peled says hello!');
}
howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log('I’m sorry, but that’s too many to count.');
    } else {
        console.log('What a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    display(favMovie);
}

inception(console.log, 'Maleficent is a fantastic movie.');

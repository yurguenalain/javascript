//Online status
//Display online status for a list of users.
//Example:
//`onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.

const users = ["mockIng99", "JoeyPunch", "glassedFer","Glassdoor",'gogogo'];

function onlineStatus(users) {
    const count = users.length;

    if (count === 0) {
        return ("No hay gente en linea");

    } else if (count === 1) {

        return `${users[0]} online`;

    } else if (count === 2) {
        return `${users[0]} and ${users[1]} online`;

    } else {
        return `${users[0]} and ${users[1]} and ${count -2 } more online `;

    }

}

console.log(onlineStatus(users));












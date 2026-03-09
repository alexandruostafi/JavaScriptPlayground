let user1 =
{
    name: "John",
    age: 23,
    isAdmin: false
}

let user2 =
{
    name: "Mike",
    age: 52,
    isAdmin: false
}

let user3 =
{
    name: "Robert",
    age: 46,
    isAdmin: true
}

users = [user1, user2, user3]

let adminCount = 0;

users.forEach(element => {
    if (element.isAdmin) {
        adminCount++;
    }
});

console.log(`Second user name is: ${users[1].name}`)
console.log(`Third user's age is: ${users[2].age}`)
console.log(`Number of admins is: ${adminCount}`)
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: userId,
                name: 'John Doe',
                email: 'johndoe@example.com'
            };
            console.log('User data loaded!')
            resolve(userData);
        }, 2000)

    });
}

async function loadUser() {
    try {
        const user = await fetchUserData(1);
        console.log(`User data: ${JSON.stringify(user)}`);
    } catch (error) {
        console.error(error);
    }
}

loadUser();



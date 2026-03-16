function checkPassword(password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if( password === '' || password === null || password === undefined) {
        reject('Password cannot be empty!');
        return;
      }
      if (password === 'JavaScript123') {
        resolve('Password is correct!');
      }
      else {
        reject('Password is incorrect!');
      }
    }, 1000);
  });
}
checkPassword('JavaScript123')
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });
checkPassword('JavaScript223')
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });

checkPassword('')
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });

checkPassword(null)
    .then(message => {
      console.log(message);
    })
    .catch(error => {
      console.error(error);
    });
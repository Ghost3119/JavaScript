const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
  let result = 0;
  for(let users in usersObj){
    if(usersObj[users].online === true){
      result++;
    }
  }return result;
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users));
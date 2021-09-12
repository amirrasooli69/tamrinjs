
class user { 
    index(data) {
        console.log(data);
        return {
            name: "Amir"
        }
    }

    sayHi() {
        console.log('helllllllo');
    }

    login(data) {
        return 'user/login.html';
    }
}

module.exports = user;
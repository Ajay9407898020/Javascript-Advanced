"Function which can have function as a parameter or can return function"

function grantPermission(user) {
    console.log('Authencticated and permission granted to ' + user.name);
}

function authenticate(verify) {
    let array = [];
    for(let i = 0; i < verify; i++) {
        array.push(i);
    }
}

"passing function as paramerter"
function letPersonIn(user, fn) {   
    if(user.level === 'developer') {
        fn(1000000);
    } else if(user.level === 'admin') {
        fn(50000000);
    }
    return grantPermission(user)
}

letPersonIn({ name: 'Ajay', level: 'developer' }, authenticate);

letPersonIn({ name: 'Vijay', level: 'admin' }, authenticate);


var getUserRole = function(name,role){

    switch (role) {
        case "admin":
            return `${name} with all access`;
            break;// this not necessary
        case "subadmin":
            return `${name} is sub-admin with access to create and delete`;
            break;

        case "testprep":
            return `${name} is a test perp with access to create and delete tests`;
            break;
        case "user":
            return `${name} is a user to consume content`;
            break;
        default:

        return `${name} is a trai user`;
            break;
    }
}

console.log(getUserRole("sajal","testprep"));

var getRole = getUserRole("sammy","user");

console.log(getRole);
//create an application with following roles:
//admin -get full acess
//subadmin
//testprep
//user

var user = "admin";

switch (user) {
    case "admin":
        console.log("you get the full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete course");
        break;
    case "testprep":
        console.log("gets access to create/delete test");
        break;

    case "user":
            console.log("get access to consume content");
            break;

    default:
        console.log("trail user")
        break;
}
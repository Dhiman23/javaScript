var isLoggedIn = true;
var isEmailVerified = false;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Logged in Success");
//     if(isEmailVerified){
//         console.log("Email is verfified");
//         if(cardInfo){
//             console.log("you can make purchase");
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && cardInfo){
    console.log("Allow user to make a purchase");
}else{
    console.log("you are not allowed to do that");
}
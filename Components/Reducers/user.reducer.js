export default function(user={}, action) {
    //console.log("reducerr",user);
    
    if(action.type == 'setUserData') {

        var userCopy={
            lastname:action.Nom,
            firstname:action.Prenom,
            email:action.Email,
            city:action.City,
            country: action.Country
        }

        return userCopy;
    }else {
        return user;
    }
}
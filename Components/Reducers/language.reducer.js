export default function(language='', action) {
    //console.log("reducerr",user);
    
    if(action.type == 'enchosen') {

        return 'en';


    }else if(action.type == 'ptchosen') {

        return 'pt';
    }else{
        return language;
    }
}
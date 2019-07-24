export default function(language='', action) {
    //console.log("reducerr",user);
    
    if(action.type == 'enchosen') {
    
        console.log('Anglais');
        console.log('test',language);


        return 'en';


    }else if(action.type == 'ptchosen') {

        console.log('Portugais');

        return 'pt';
    }else{
        return language;
    }
}
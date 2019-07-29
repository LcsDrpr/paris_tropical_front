export default function(meteo={}, action) {
    //console.log("reducerr",user);
    
    if(action.type == 'getCurrentMeteo') {

        console.log('ACTION REDUCER METEO',action);

        var meteoCopy={
            temp:action.Temperature,
            icon:action.WeatherIcone,
        }

        return meteoCopy;
    }else {
        return meteo;
    }
}
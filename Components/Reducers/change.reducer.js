export default function(change={}, action) {
   console.log('Action .......',action)
    
    if(action.type == 'change') {

        return action.dataChange;
    }else {
        return change;
    }
}
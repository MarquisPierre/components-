// Reducer tha isa function that will change the globale state

 const nameReducer =(state = {name: 'Marquis'}, action) =>{
  console.log(state)
switch(action){
    case "NAME_CHANGE":
        return{...state,name:action.payload}
        default:
            return state
    }


}

export default nameReducer
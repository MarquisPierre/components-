// Actions are functions that attempt to update the global state
// Actions trigger reducers to actually update the state


export default nameChange = (text)=>{
// all actions return a type
// they can optionally return a payload of data
    return{
        type:"NAME_CHANGE",
        payload:text,
    }
}

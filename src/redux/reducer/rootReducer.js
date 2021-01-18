const initState = {
    posts:[]
}
const rootReducer = (state=initState,action)=>{
    switch(action.type){
        case "fetch":
            return state;
        case "DATA_RECEIVED":
           return action.payload
        default:
            console.log("ssasasasas")
            return state;
    }
}
export default rootReducer;
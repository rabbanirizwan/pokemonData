//import { useDispatch } from "react-redux"

//const dispatch = useDispatch()
export const FetchPokemonData = async (name) => {
    return { 
        type: "fetch",
        payload:name
    }



}
import { LOADLISTBUNDLE, DELETELISTBUNDLE } from '../types/types' 

const initialState = []

export default function (state = initialState, action){
    switch(action.type){
        case LOADLISTBUNDLE:
            state = action.payload
            return state
        case DELETELISTBUNDLE:
            let listsbundle = JSON.parse(localStorage.getItem("Bundles"))
            let newlistbundle = listsbundle.filter((e) => e.id !== action.payload)
            localStorage.removeItem("Bundles")
            localStorage.setItem("Bundles", JSON.stringify(newlistbundle))
            state = newlistbundle
            return state
        default:
            return state;
    }
}
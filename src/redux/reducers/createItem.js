import { CREATEITEM, DELETE } from '../types/types' 

const initialState = {
    items: []
}

export default function (state = initialState, action){
    switch(action.type){
        case CREATEITEM:
            if(action.payload.patter !== undefined){
                state = {
                    items: state.items.map((item)=>{
                        if(item.id === action.payload.patter){
                            item.subItem = [...item.subItem, action.payload]
                        }
                        return item
                    })
                }
            }else{
                state = {
                    items: [...state.items, action.payload]
                }
            }
            return state 
        case DELETE:
            let item = state.items.map((i)=>{
                let subitem = i.subItem.filter(s => s.id !== action.payload)
                i.subItem = subitem
                return i
            })

            state = {
                items: item.filter(s => s.id !== action.payload)
            }
            return state
        default:
            return state;
    }
}
import { ADDBUNDLE, DELETEBUNDLE, RECORDMEMORY, CANTITEM } from '../types/types' 

const initialState = {
    bundles: []
}

export default function (state = initialState, action){
    switch(action.type){
        case ADDBUNDLE:
            console.log('add bundle')
            console.log(action.payload)
            let bundle = {
                'id': Math.random().toString(36).substr(2, 9),
                'code': action.payload.code,
                'description': action.payload.description,
                'price': action.payload.price,
                'radioType': action.payload.radioType,
                'cant': action.payload.cant,
                'subItem': action.payload.subItem
            }
            state = {
                bundles: [...state.bundles, bundle]
            }
            return state
        case DELETEBUNDLE:
            state = {
                bundles: state.bundles.filter(s => s.id !== action.payload)
            }
            return state
        case RECORDMEMORY:
            console.log('record memory', action.payload)

            if(localStorage.getItem("Bundles") !== null){
                let bundles = localStorage.getItem("Bundles");
                let allBundles = JSON.parse(bundles)
                let all = [...allBundles, action.payload]
                localStorage.setItem("Bundles", JSON.stringify(all))
            }else{
                localStorage.setItem("Bundles", JSON.stringify([action.payload]))
            }
            state = {bundles: []}
            return state
        case CANTITEM:
                console.log('cantitem')
                console.log(action.payload)
                let auxsate = state.bundles
                console.log(auxsate)
                let newstate
                if(action.payload.patter === 'patter'){
                    newstate = auxsate.map((i)=>{
                        if(i.id === action.payload.id){
                            i.cant = parseInt(action.payload.cant)
                        }
                        return i
                    })
                }else{
                    newstate = auxsate.map((i)=>{
                        let subitem = i.subItem.map((sub)=>{
                            if(sub.id === action.payload.id){
                                sub.cant = parseInt(action.payload.cant)
                            }
                            return sub
                        })
                        i.subItem = subitem
                        return i
                    })
                }
                state = {
                    bundles: newstate
                }
                console.log(newstate)
            return state
        default:
            return state;
    }
}
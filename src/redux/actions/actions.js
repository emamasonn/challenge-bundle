import { CREATEITEM, DELETE, ORDER, ADDBUNDLE, DELETEBUNDLE, RECORDMEMORY, LOADLISTBUNDLE, DELETELISTBUNDLE, CANTITEM } from '../types/types'//importo los tipos de acciones 


export const loadItem = (data) => {
    return {
        type: CREATEITEM,
        payload: data
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}

export const orderItems = (value) => {
    return {
        type: ORDER,
        payload: value
    }
}

export const addBundle = (bundle) => {
    return {
        type: ADDBUNDLE,
        payload: bundle
    }
}

export const deleteBundle = (id) => {
    return {
        type: DELETEBUNDLE,
        payload: id
    }
}

export const recordMemory = (bundles) => {
    return {
        type: RECORDMEMORY,
        payload: bundles
    }
}

export const loadListBundles = (listbundle) => {
    return {
        type: LOADLISTBUNDLE,
        payload: listbundle
    }
}

export const deleteListBundle = (id) => {
    return {
        type: DELETELISTBUNDLE,
        payload: id
    }
}

export const cantItem = (cantItem) => {
    return {
        type: CANTITEM,
        payload: cantItem
    }
}
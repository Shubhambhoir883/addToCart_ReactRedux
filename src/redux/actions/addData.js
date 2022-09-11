export const dataAddData = (data) => {
    return {
        type: "ADD_DATA",
        payload: data
    }
}

export const REMOVE = (data) => {
    return {
        type: "RMV_ONE",
        payload: data
    }
}

export const DLT =(id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}
import { act } from "@testing-library/react"

const apiReducer = (state={data:[],loading:true},action) => {
    switch(action.type){
        case  'ON_SUCCESS' : return {...state,data:action.payload,loading:action.loading}
        default : return state
    }
}

export default apiReducer
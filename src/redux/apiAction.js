import axios from 'axios';

const apiAction = () => {
    return dispatch => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch({type:'ON_SUCCESS',payload:response.data,loading:false})
            })
    }
}

export default apiAction;

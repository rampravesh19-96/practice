const apiAction = () => {
    return dispatch => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => dispatch({type:'ON_SUCCESS',payload:data,loading:false}))
    }
}

export default apiAction
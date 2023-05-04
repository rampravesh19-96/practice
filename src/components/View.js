import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiAction from '../redux/apiAction';
import Card from './Card';
import { useParams } from 'react-router-dom';


function View(props) {
    const data = useSelector(state => state.apiReducer)
    const dispatch = useDispatch()
    const id = useParams()

    useEffect(()=>{
        dispatch(apiAction())
    },[dispatch])
    return (
        <div className='view'>
            {data.loading? <h2>Loading</h2>:
            <Card item={data.data.find(item => item.id==id.id)}/>
            }
        </div>
    );
}

export default View;
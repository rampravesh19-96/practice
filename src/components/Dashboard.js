import React, { useState,useMemo,useCallback } from 'react';
import "./Dashboard.css"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiAction from '../redux/apiAction';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
import { search,sorting,pagination } from './models';

function Dashboard(props) {
    const data = useSelector(state => state.apiReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [query,setQuery] = useState('')
    const [sortBy,setSortBy] = useState('')
    const [orderBy,setOrderBy] = useState('asc')
    const [currentPage,setCurrentPage] = useState(1)
    const filteredData = useMemo(() => search(data.data || [], query), [data, query]);
    const sortedData = useMemo(() => sorting(filteredData, sortBy, orderBy === "asc"), [filteredData, sortBy, orderBy]);
    const paginatedData = useMemo(() => pagination(sortedData,currentPage),[sortedData,currentPage])

    useEffect(()=>{
        dispatch(apiAction())
    },[dispatch])

    const handleClick = useCallback((id) => {
        navigate(`${id}`);
    }, [navigate]);

    const handleSearch = useCallback((e) => {
        e.preventDefault();
        setQuery(e.target.search.value);
        setCurrentPage(1);
    }, []);
    
    const handleSorting = useCallback((sortBy, isAscending = true) => {
        setSortBy(sortBy);
        setOrderBy(isAscending ? "asc" : "desc");
    }, []);
    
    const handlePage = useCallback((page) => {
        setCurrentPage(page);
    }, []);
    

    return (
        <main className='dashboard'>
            <div className="header">
                <form onSubmit={handleSearch}>
                    <input type="text" name='search' />
                    <input type="submit" value="Search" />
                </form>
                <div className="sort">
                    <div>
                        <label htmlFor="">Sort By</label>
                        <select onChange={(e)=>{handleSorting(e.target.value,orderBy==='asc')}}>
                            <option value="">...Select...</option>
                            <option value="title">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                    {sortBy &&
                        <div>
                            <label htmlFor="">Order By</label>
                            <select onChange={(e)=>{handleSorting(sortBy,e.target.value==='asc')}}>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    }
                </div>
            </div>
            <div className="container">
                {paginatedData.data.map(item => <Card key={item.id} item={item} handleClick={()=>{handleClick(item.id)}}/>)}
            </div>
            <div className="pagination">
                    <ul>
                        {Array.from({length:paginatedData.no_of_pages}).map((_,index) => {
                           return <li key={index+1} className={`item ${currentPage===index+1?'active':''}`} onClick={()=>{handlePage(index+1)}}>{index+1}</li>
                        })}
                    </ul>
            </div>
        </main>
    );
}

export default Dashboard;
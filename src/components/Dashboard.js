import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import apiAction from '../redux/apiAction';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const search = (items=[],query,queryList=["title","description"]) => {
    return items.filter(item => 
            queryList.some(key => 
                item[key].toLowerCase().indexOf(query.toLowerCase()) !== -1
                )
        )
}

const sorting = (items=[],sortBy,isAscending=true) => {
    return items.sort((a,b)=>{
        if(a[sortBy]>b[sortBy]){
            return isAscending?1:-1
        }
        if(a[sortBy]<b[sortBy]){
            return isAscending?-1:1
        }
        return 0
    }
        
    )
}

const pagination = (items=[],currentPage=1,itemsPerPage=5) => {
    const noOfPages = Math.ceil(items.length/itemsPerPage)
    const startIndex = (currentPage-1)*itemsPerPage
    const endIndex = currentPage*itemsPerPage
    const currentPageData = items.slice(startIndex,endIndex)
    return {
        data : currentPageData,
        no_of_pages : noOfPages,
        current_page : currentPage
    }
}

function Dashboard(props) {
    const data = useSelector(state => state.apiReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [query,setQuery] = useState('')
    const [sortBy,setSortBy] = useState('')
    const [orderBy,setOrderBy] = useState('asc')
    const [currentPage,setCurrentPage] = useState(1)
    const filteredData = search(data.data || [],query)
    const sorteddata = sorting(filteredData,sortBy,orderBy==='asc')
    const paginatedData = pagination(sorteddata,currentPage)

    const handleClick = (id) => {
        navigate(`${id}`)
    }
    const handleSearch = (e) => {
        e.preventDefault()
        setQuery(e.target.search.value)
        setCurrentPage(1)
    }

    const handleSorting = (sortBy,isAscending=true) => {
        setSortBy(sortBy)
        setOrderBy(isAscending?'asc':'desc')
    }
    const handlePage = (page) => {
        setCurrentPage(page)
    }


    useEffect(()=>{
        dispatch(apiAction())
    },[dispatch])

    return (
        <main>
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
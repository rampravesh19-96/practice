const search = (items=[],query,queryList=["title","description"]) => {
    return items.filter(item => 
            queryList.some(key => 
                item[key].toLowerCase().indexOf(query.toLowerCase()) !== -1
                )
        )
}

const sorting = (items=[],sortBy,isAscending=true) => {
    return [...items].sort((a,b)=>{
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

export {search,sorting,pagination}
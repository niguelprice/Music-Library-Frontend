import { useState } from "react";

const SearchBar = ({data}) => {
    const [search, setSearch] = useState()
    




    return (
        <div>
            <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
    
            
        </div>  
    

    );
}



export default SearchBar;
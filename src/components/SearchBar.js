import React, { useState } from "react";

const SearchBar = ({setSearchItem}) => {
    const [searchValue, setSearchValue] = useState('');

const handleOnClick = () => {  
    setSearchItem(searchValue);
    // setSearchValue('');
    console.log('hey');
}
return (
    <div className="search-bar">
        <input type='text' placeholder="Search product" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button className="search-button-container" onClick={() => handleOnClick()}>Search</button>
    </div>
)
}

export default SearchBar;
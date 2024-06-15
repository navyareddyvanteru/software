
import React, {useEffect, useState} from 'react' 
import {Link, useLocation} from 'react-router-dom' 
import "./Header.css"
const Header = () => {
const [activeTab, setActiveTab] = useState('Home');  const location = useLocation();

useEffect(() => {  if(location.pathname === '/') {
setActiveTab('Home');
} else if(location.pathname === '/add') {  setActiveTab('AddContact');
} else if(location.pathname === '/about') {
setActiveTab('About');
}
} , [location])


return (
<div className='header'>
<p className='logo'>Software Piracy Protection System</p>
<div className='header-right'>
<Link to='/'>
<p
className={`${activeTab === 'Home' ? 'active' : ''}`}  onClick={() => setActiveTab("Home")}>
Home
</p>
</Link>
<Link to='/add'>
<p
className={`${activeTab === 'AddContact' ? 'active' : ''}`}  onClick={() => setActiveTab("AddContact")}>
Buy
</p>
</Link>
<Link to='/download'>
<p
className={`${activeTab === 'download' ? 'active' : ''}`}  onClick={() => setActiveTab("download")}>
Download
</p>
</Link>
<Link to='/buy'>
<p
className={`${activeTab === 'buy' ? 'active' : ''}`}  onClick={() => setActiveTab("buy")}>
About Us
</p>
</Link>
<Link to='/about'>
<p
className={`${activeTab === 'About' ? 'active' : ''}`}  onClick={() => setActiveTab("About")}>
Contact Us
</p>
</Link>


</div>
</div>
)
}


export default Header;



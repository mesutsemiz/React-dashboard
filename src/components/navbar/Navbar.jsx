import React from "react"
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';


const Navbar=()=>{
  return(
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchOutlinedIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <TranslateOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>          
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>          
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>          
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">2</div>             
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>          
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/2761733/pexels-photo-2761733.jpeg?cs=srgb&dl=pexels-grisha-chernigowsky-2761733.jpg&fm=jpg" alt=""
            className="avatar"
            />        
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
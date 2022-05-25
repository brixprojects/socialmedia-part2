import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function topbar() {
  return (
    <div classmate="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">brixsocial</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search />
            <input placeholder="Search for friend, post or video" className="search" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
          <span className="topbarlinks">Homepage</span>
          <span className="topbarlinks">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconsitem">
              <Person />
              <span className="topbarIconBadge">5000</span>
            </div>
            <div className="topbarIconsitem">
              <Chat />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconsitem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/sniper150.jpg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

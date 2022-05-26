import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">SocialMedia</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className="searchIcon"/>
            <input placeholder="Search for friend, post or video" className="searchInput" />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
          <span className="topbarlinks">Homepage</span>

          <span className="topbarlinks">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconsItem">
              <Person />
              <span className="topbarIconsBadge">1</span>
            </div>
            <div className="topbarIconsItem">
              <Chat />
              <span className="topbarIconsBadge">2</span>
            </div>
            <div className="topbarIconsItem">
              <Notifications />
              <span className="topbarIconsBadge">1</span>
            </div>
          </div>
          <img src="/assets/profilepicutes/post1.webp" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

import "./sidebar.css"
import {Chat, Group, RssFeed, School, WorkOutline, PlayCircleFilledOutlined, Bookmark, Event} from "@mui/icons-material";

export default function sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
    <ul className="sidebarList">
        <li className="sidebarListItem">
        <RssFeed className="sidebarIcon"/>
        <span className="sidebarListItemText">feed</span>
        </li>
        <li className="sidebarListItem">
        <Chat className="sidebarIcon"/>
        <span className="sidebarListItemText">Chat</span>
        </li>
        <li className="sidebarListItem">
        <PlayCircleFilledOutlined className="sidebarIcon"/>
        <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
        <Group className="sidebarIcon"/>
        <span className="sidebarListItemText">Group</span>
        </li>  
        <li className="sidebarListItem">
        <Bookmark className="sidebarIcon"/>
        <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
        <WorkOutline className="sidebarIcon"/>
        <span className="sidebarListItemText">Jobs</span>
        </li>
        <li className="sidebarListItem">
        <Event className="sidebarIcon"/>
        <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
        <School className="sidebarIcon"/>
        <span className="sidebarListItemText">Courses</span>
        </li>
    </ul>
    <button className="sidebarButton">Show More</button>
    <hr className="sidebarHr"/>
    <ul className="sidebarFriendList">
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">PostMalone</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post/wiz1.jpg" alt=""/>
            <span className="sidebarFriendName">WizKhalifa</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post/kurt1.jpg" alt=""/>
            <span className="sidebarFriendName">kurt Clyde</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post/mark.jpg" alt=""/>
            <span className="sidebarFriendName">Mark Steven</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post/marty.jpg" alt=""/>
            <span className="sidebarFriendName">Marty Pabello</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">BongBongMarcos</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">IndayDuterte</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">Jackma</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">jeff Bezos</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">Bill Gates</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">Steve Jobs</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">Skusta Clee</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">Flow G</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">RamsesWeed</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">Cong Tv</span>
        </li>
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/profilepicutes/post2.webp" alt=""/>
            <span className="sidebarFriendName">SuperCarBlondie</span>
        </li>
        

    </ul>
    </div>
    </div>
  );
}

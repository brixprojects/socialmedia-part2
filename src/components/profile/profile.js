import "./profile.css";
import  Feed from "../../components/feed/feed";
import Sidebar from "../../components/topbar/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import Rightbar from "../../components/rightbar/rightbar";

export default function profile() {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
    <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="/assets/profilepicutes/post/wiz4.jpg" alt="" />
        <img className="profileUserImg" src="/assets/profilepicutes/post/wiz5.jpg" alt="" />
        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Wiz Motherfucker Khalifa</h4>
            <span className="profileInfoDesc">i some weed to feel alive</span>
        </div>
    </div>
    <div className="profileRightBottom">
    <Feed />
    <Rightbar profile/>
    </div>
    </div>
    </div>

  
    </> 
  )
}

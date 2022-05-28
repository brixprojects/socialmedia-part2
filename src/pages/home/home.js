import  Feed from "../../components/feed/feed";
import Sidebar from "../../components/topbar/sidebar/sidebar";
import Topbar from "../../components/topbar/topbar";
import Rightbar from "../../components/rightbar/rightbar";
import "./home.css"
export default function home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
      </div>

    
      </> 
  )
}

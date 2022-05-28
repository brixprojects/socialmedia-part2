import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function rightbar({profile}) {

  const HomeRightbar = () => {
    return(
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift2.jpg" alt=""/>
          <span className="birthdayText">
            <b>Kurt Clyde</b> and <b>3 other friends</b> have a birthday today</span>
          
        </div>
        <img className="rightbarAd" src="/assets/ad.webp" alt=""/>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         {Users.map((u) => (
           <Online key={u.id} user={u} />
         ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
    <>
    <h4 className="rightbarTitle">User information</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">from:</span>
        <span className="rightbarInfoValue">Tacloban</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Married</span>
      </div>
    </div>
    <h4 className="rightbarTitle">User friends</h4>
    <div className="rightbarFollowings">
      <div className="rightbarFollowing">
        <img src="/assets/profilepicutes/post/wiz1.jpg" alt="" className="rightbarfollowingsImg"/>
        <span className="rightbarFollowingName">wiz khalifa

        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/profilepicutes/post/mark.jpg" alt="" className="rightbarfollowingsImg"/>
        <span className="rightbarFollowingName">wiz khalifa

        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/profilepicutes/post/wiz3.jpg" alt="" className="rightbarfollowingsImg"/>
        <span className="rightbarFollowingName">wiz khalifa

        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/profilepicutes/post/wiz4.jpg" alt="" className="rightbarfollowingsImg"/>
        <span className="rightbarFollowingName">wiz khalifa

        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/profilepicutes/post/wiz5.jpg" alt="" className="rightbarfollowingsImg"/>
        <span className="rightbarFollowingName">wiz khalifa

        </span>
      </div>
      <div className="rightbarFollowing">
        <img src="/assets/profilepicutes/post/wiz1.jpg" alt="" className="rightbarfollowingsImg"/>
        <span className="rightbarFollowingName">wiz khalifa

        </span>
      </div>
    </div>
    </>
  );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
     {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

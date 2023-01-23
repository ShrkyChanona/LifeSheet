import photo from "../../assets/img/foto.jpg";
import "../../assets/styles/ProfilePic.css";

function ProfilePic() {
    return (
        <div className="div-child1">
            <img src={photo} alt="" className="image" />
        </div>
    );
}

export default ProfilePic;

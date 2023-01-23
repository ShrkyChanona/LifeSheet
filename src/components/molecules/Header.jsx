import Name from "../atoms/Name";
import ProfilePic from "../atoms/ProfilePic";
import Images from "../atoms/Images";
import { data } from '../../data/data.js';
import "../../assets/styles/Header.css";

function Header() {
    return (
        <>
            <div className="">
                <div className="flexbox">
                    <ProfilePic />
                    <div className="content-center border">
                        <Name name={data.subjectDate.name} lastName={data.subjectDate.lastName} />

                        <Images img={data.routes.github} />
                        <Images img={data.routes.linkedin} />
                        <Images img={data.routes.facebook} />
                        
                    </div>
                    

                </div>
                
            </div>

        </>
    );
}

export default Header;
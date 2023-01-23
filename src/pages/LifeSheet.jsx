import Profile from "../components/molecules/Profile";
import Header from "../components/molecules/Header";
import Article from "../components/molecules/Article";
import ProfilePic from "../components/atoms/ProfilePic";

import "../assets/styles/Header.css"
import "../assets/styles/General.css"

function LifeSheet() {
    return (
        <>
            <body>
                <header className="flexbox">
                    <Header />
                    
                </header>

                <nav></nav>
                
                <aside className="flexbox" >
                    <Profile />
                    
                    <main>
                        <Article />
                    </main>
                </aside>

                


            </body>
        </>
    );
}

export default LifeSheet;
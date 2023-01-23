//React
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Info from "../atoms/Info";
import ProfilePic from "../atoms/ProfilePic";
//js
import { data } from '../../data/data.js';
//css
import "../../assets/styles/Profile.css";


function Profile() {
    return (
        <>
            <div id="div-father">
                <div>
                    <center><Title text="DATOS PERSONALES" /></center>
                    <Text msn="DOMICILIO:" /> <Info info={data.subjectDate.addres} /> <br />
                    <Text msn="CURP:" /> <Info info={data.subjectDate.curp} /> <br />
                    <Text msn="R.F.C:" /> <Info info={data.subjectDate.rfc} /> <br />
                    <Text msn="EDAD:" /> <Info info={data.subjectDate.age} /> <br />
                    <Text msn="GENERO:" /> <Info info={data.subjectDate.gen} /> <br />
                    <Text msn="ESTADO CIVIL:" /> <Info info={data.subjectDate.civilStatus} /> <br />
                    <Text msn="NACIONALIDAD:" /> <Info info={data.subjectDate.nacionality} /> <br />
                </div> <br />
                <div>
                    <center><Title text="HISTORIA ACADEMICA" /></center>
                    <Text msn="PROFESION:" /> <Info info={data.academicHistory.profession} /> <br />
                    <Text msn="ULTIMO GRADO DE ESTUDIO:" /> <Info info={data.academicHistory.lastGraStudy} /> <br />
                    <Text msn="BACHILLERATO:" /> <Info info={data.academicHistory.bachiller} /> <br />
                </div>
            </div>
        </>

    );
}

export default Profile;

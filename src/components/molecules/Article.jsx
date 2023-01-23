//React
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Images from "../atoms/Images";
import Points from "../atoms/Points";
//js
import { data } from '../../data/data.js';
//css
import "../../assets/styles/General.css";
import "../../assets/styles/Letters.css";

function Article() {
    return (
        <section>
            <article>
                <center><Title text="ACTUALIZACION PROFESIONAL" /></center>
                <div className="articles-content ">
                    <h4>CURSOS Y TALLERES</h4>
                    <ul className="text-body">
                        <li><Points imgn={data.routes.point} /> <Text msn="INTRODUCCION A UNITY PARA VIDEOJUEGOS 2D (2018)" /> </li>
                        <li><Points imgn={data.routes.point} /> <Text msn="INTRODUCCION AL DESARROLLO WEB CON PHP (2019)" /> </li>
                        <li><Points imgn={data.routes.point} /> <Text msn="UNIVERSIDAD JAVA DE CERO A EXPERTO (2022)" /> </li>
                    </ul>
                </div>
            </article>

            <article className="articles">
                <center><Title text="ACERCA DE MI" /></center>
                <div className="articles-content text-body">
                    <Text msn="Soy una persona que constantemente busca desafíos que superar, actualmente estoy cursando la ingeniería en desarrollo de software, lucho por mi titulación profesional, una vez concluyendo mis estudios universitarios estoy dispuesto a recabar experiencia laboral mientras persigo mis metas de alcanzar una maestría y doctorado en el ámbito informático." />
                </div>
            </article>

            <article className="articles">
                <center><Title text="EN MIS TIEMPOS LIBRES ME ENCONTRARAS" /></center>
                <div className="articles-content text-body">
                    <ul>
                        <li><Text msn={"Aumentando mis conocimientos sobre el lenguaje JAVA, este lenguaje es mi favorito por lo que intento sacar el mayor conocimiento posible de este mismo mejorando mis buenas prácticas de programación."} /></li>
                        <li><Text msn={"Curioseando sobre historias e idiomas, la mayoría de veces me entretengo con historias mitológicas, así como historias reales, también me agrada la idea de profundizar en cierto idioma ya sea local o extranjero."} /></li>
                        <li><Text msn={"Patinando, es cierto que programar me apasiona, pero practicar el deporte de skaterboarding también me hace feliz."} /></li>
                        <li><Text msn={"Estudiando piano, las veces que prefiero tomar un descanso son las veces que prefiero deleitarme con el sonido de las notas musicales."} /></li>
                    </ul>
                </div>
            </article>
        </section>
    );
}

export default Article;
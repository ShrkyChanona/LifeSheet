import '../../assets/styles/Name.css'

function Name({name, lastName}) {
    return (
        <div id='name-title'>
            <h1>{name} <br />{lastName} </h1>
        </div>
    );
}

export default Name;
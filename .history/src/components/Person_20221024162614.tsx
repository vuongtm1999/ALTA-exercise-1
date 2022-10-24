type PersonProps = {
    name: {
        firstNa: string
        lastNa: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.firstNa} {props.name.lastNa}</h2>
     );
}

export default Person;
type PersonProps = {
    name: {
        firstNa: string
        lastName: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.firstNa} {props.name.lastName}</h2>
     );
}

export default Person;
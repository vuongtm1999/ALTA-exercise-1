type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.firstNa} {props.name.lastName}</h2>
     );
}

export default Person;
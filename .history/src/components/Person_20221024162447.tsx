type PersonProps = {
    name: {
        firstName: string
        lastName: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.V} {props.name.B}</h2>
     );
}

export default Person;
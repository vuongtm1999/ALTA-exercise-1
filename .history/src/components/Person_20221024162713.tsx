type PersonProps = {
    name: {
        first: string
        lastName: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.first} {props.name.lastName}</h2>
     );
}

export default Person;
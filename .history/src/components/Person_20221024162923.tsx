type PersonProps = {
    name: {
        first: string
        last: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.first} {props.name.lastName}</h2>
     );
}

export default Person;
type PersonProps = {
    name: {
        V: string
        B: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.V} {props.name.B}</h2>
     );
}

export default Person;
type PersonProps = {
    name: {
        v: string
        b: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.v} {props.name.b}</h2>
     );
}

export default Person;
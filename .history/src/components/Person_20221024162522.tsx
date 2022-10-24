type PersonProps = {
    name: {
        FN: string
        lastName: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.FN} {props.name.lastName}</h2>
     );
}

export default Person;
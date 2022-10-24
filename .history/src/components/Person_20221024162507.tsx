type PersonProps = {
    name: {
        firstN: string
        lastName: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.firstN} {props.name.lastName}</h2>
     );
}

export default Person;
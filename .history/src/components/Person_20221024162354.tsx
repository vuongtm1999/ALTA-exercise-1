type PersonProps = {
    name: {
        v: string
        b: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.firstN} {props.name.lastN}</h2>
     );
}

export default Person;
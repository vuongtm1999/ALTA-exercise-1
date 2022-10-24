type PersonProps = {
    name: {
        FN: string
        LN: string
    }
}


function Person(props: PersonProps) {
    return ( 
        <h2>{props.name.FN} {props.name.LN}</h2>
     );
}

export default Person;
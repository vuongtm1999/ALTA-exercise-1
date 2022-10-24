type PersonProps = {
    name: {
        first: string
        last: string
    }
}


function Person

export const Person = (props: PersonProps) {
    return ( 
        <h2>{props.name.first} {props.name.last}</h2>
     );
}
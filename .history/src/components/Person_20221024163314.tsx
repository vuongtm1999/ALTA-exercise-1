type PersonProps = {
    name: {
        firstName: string
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return ( 
        <div>{props.name.firstName} {props.name.last}</div>
     );
}
type PersonProps = {
    name: {
        f: string
        last: string
    }
}

export const Person = (props: PersonProps) => {
    return ( 
        <div>{props.name.f} {props.name.last}</div>
     );
}
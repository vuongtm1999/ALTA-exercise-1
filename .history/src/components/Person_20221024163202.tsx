type PersonProps = {
    name: {
        f: string
        l: string
    }
}

export const Person = (props: PersonProps) => {
    return ( 
        <div>{props.name.f} {props.name.l}</div>
     );
}
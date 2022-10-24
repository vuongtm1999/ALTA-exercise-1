type PersonListProps = {
    name: {
        firstName: string
        lastName: string
    }
}

export const PersonList = (props: PersonProps) => {
    return ( 
        <div>{props.name.firstName} {props.name.lastName}</div>
     );
}
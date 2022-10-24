type PersonListProps = {
    name: {
        firstName: string
        lastName: string
    }
}

export const PersonList = (props: PersonListProps) => {
    return ( 
        <div>{props.name.firstName} {props.name.lastName}</div>
     );
}
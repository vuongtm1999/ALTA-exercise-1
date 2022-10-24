type PersonListProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export const Status = (props: PersonListProps) => {
    return ( 
        <div>
            {props.names.map(name => { 
                return <li>{name.firstName} {name.lastName}</li>
            })}
        </div>
     );
}
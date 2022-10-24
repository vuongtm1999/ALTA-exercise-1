type StatusProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export const Status = (props: StatusProps) => {
    return ( 
        <div>
            {props.names.map(name => { 
                return <li>{name.firstName} {name.lastName}</li>
            })}
        </div>
     );
}
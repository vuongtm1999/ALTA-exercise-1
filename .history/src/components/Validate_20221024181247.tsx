type ValidateProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export const Validate = (props: ValidateProps) => {
    return ( 
        <div>
            {props.names.map(name => { 
                return <li>{name.firstName} {name.lastName}</li>
            })}
        </div>
     );
}
type PersonListProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return ( 
        <div>
            {props.names.map(person => {
                <h2>Vuong</h2>
            })}
        </div>
     );
}
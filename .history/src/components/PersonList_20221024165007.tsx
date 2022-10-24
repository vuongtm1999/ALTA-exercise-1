import { log } from "console"

type PersonListProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return ( 
        <div>
            {props.names.map(name => {return console.log(name);
            })}
        </div>
     );
}
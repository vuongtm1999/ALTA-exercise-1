type Greetprops = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

export const Greet = (props: Greetprops) => {
    return ( 
        <div>
            {props.isLoggedIn ?  <h2>Welcome {props.name}! You have {props.messageCount} unread message</h2> :
                                    <h2>Welcome guest</h2> 
            }
        </div>
     );
};
type Greetprops = {
    name: string
    // Không cần chuyển cũng đc đối với prop messageCount
    messageCount?: number
    isLoggedIn: boolean
}

// Có React.FC thì không đc xài (props: Greetprops)
const Greet = (props: Greetprops) => {
    // set default value for propertie messageCount (destructuring object )
    const { messageCount = 0 } = props;

    return ( 
        <div>
            {props.isLoggedIn ?  <h2>Welcome {props.name}! You have {messageCount} unread message</h2> :
                                    <h2>Welcome guest</h2> 
            }
        </div>
     );
};

export { Greet } 
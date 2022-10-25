type Greetprops = {
    name: string
    // Không cần chuyển cũng đc đối với prop messageCount
    messageCount?: number
    isLoggedIn: boolean
}

const Greet: React.FC = () => {
    // set default value for propertie messageCount
    // const { messageCount = 0 } = props;

    return ( 
        <div>
        //     {props.isLoggedIn ?  <h2>Welcome {props.name}! You have {props.messageCount} unread message</h2> :
        //                             <h2>Welcome guest</h2> 
        //     }
        </div>
     );
};

export { Greet } 
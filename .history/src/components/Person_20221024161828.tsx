type PersonProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}


function Person(props: PersonProps) {
    return ( 
        <h2>Person</h2>
     );
}

export default Person;
class Parent extends React.Component {
    state = { message: "" }
    const callbackFunction = (childData) => {
          this.setState({message: childData})
    },
    
    
     render() {
            return (
                <div>
                     <Child1 parentCallback = {this.callbackFunction}/>
                     <p> {this.state.message} </p>
                </div>
            );
    }
    }
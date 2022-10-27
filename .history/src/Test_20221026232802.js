import React, {useState} from 'react';

function Parent() {
  const [message, setMessage] = useState('')

  callbackFunction = (childData) => {
    setMessage(childData)
  },

  return (
    <div>
      <Child parentCallback={callbackFunction}/>
      <p> {message} </p>
    </div>
  );
}
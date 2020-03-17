import React from 'react';

function FirstComponent(props) {
  console.log("this is props", props.items)
  return (
    <div>
      <ul>
        {props.todos.map((todos, index)=>{
          return <div>
              <li key={index}>{props.todos[index]}
                <button>Delete</button>
              </li>
            </div>
        })}
      </ul>
    </div>
  )
}

export default FirstComponent;
/* <button>
  Was button clicked {props.wasClicked}
</button> */
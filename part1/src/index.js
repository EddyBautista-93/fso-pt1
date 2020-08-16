import React from 'react';
import ReactDOM from 'react-dom';
// note to self you need to use () not {}


// const App = () => { 
//   console.log('Hello from component');
//   const now = new Date()
//   const a = 10;
//   const b = 20;

//   return React.createElement(
//     'div',
//     null,
//     React.createElement(
//       'p', null, 'Hello world it is ' , now.toString()
//     ),
//     React.createElement(
//       'p',null , a, ' plus ', b, ' is ', a + b
//     )
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p> Hello {props.name}</p>
    </div>
  )
}

const App = () => {
   return (
     <div>
       <h1> Greetings </h1>
       <Hello name="Testing Testing one two three" />
       <Hello name="Testing Testing one two three" />
       <Hello name="Testing Testing one two three" />
     </div>
   )
}


ReactDOM.render( <App />,
  document.getElementById('root')
)



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

// const Hello = (props) => {
//   return (
//     <div>
//       <p> Hello {props.name}, you are {props.age} years old.</p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10
//    return (
//      <>
//        <h1> Greetings </h1>
//        <Hello name="John" age= {26}/>
//        <Hello name={name} age= {26 + 23} />
//        <Hello name={name} age= {age} />
//      </>
//    )
// }
const Hello = (props) => {
 const name = props.name;
 const age = props.age;

 const bornYear = () => new Date().getFullYear() - age;
  
//   return (
//     <div>
//       <p>
//         Hello {props.name} , you are {props.age} years old.
//       </p>
//       <p> So you were probably born in {bornYear()}</p>
//     </div>
//   )
// } 

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings </h1>
      <Hello name="Maya"  age={10} />      
      <Hello name={name}  age={age} />
    </div>
  )
}


ReactDOM.render( <App />,
  document.getElementById('root')
)



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
//The props that are passed to the component are now directly de structured into the variables name and age.

//This means that instead of assigning the entire props object into a variable called props and then assigning
// its properties into the variables name and age

const Hello = ({ name, age }) => {
const bornYear = () => new Date().getFullYear() - age;
  
  return (
     <div>
       <p>
         Hello {name} , you are {age} years old.
       </p>
       <p> So you were probably born in {bornYear()}</p>
     </div>
   )
 } 
//
// const App = () => {
// const name = 'Peter';
// const age = 10;
// return (
//    <div>
//      <h1>Greetings </h1>
//      <Hello name="Maya"  age={10} />      
//      <Hello name={name}  age={age} />
//    </div>
//  )
//}
//

const App = ( props ) => {
  const { counter } = props;
  return (
    <div>{ counter }</div>
  )
}

let counter = 1;

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
    document.getElementById('root'))
}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)


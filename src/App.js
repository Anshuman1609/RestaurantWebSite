import React from 'react'
import Restaurant from './component/Basics/Restaurant';

const App = () => { 
  return (
    <Restaurant/>
  )
}
export default App



// JSX Rules
// it always return a single element;
// use Div or React Fragment to wrap all your JSX Code || React.Fragment or <> && </>
// className in pace of class -> className
// Need to close all non-closing tags in jsx  CLOSE ALL EVEN IMG <IMG/>
// use camelCase for attributes || first word nonCapital but second word first alphabest CAPITAL -> onClick
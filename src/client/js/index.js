import React from 'react'
import { render } from 'react-dom'

import Layout from "./components/Layout"

const app = document.getElementById('app');

render(<Layout/>, app)

// const Button = (props) => <button style={{backgroundColor: props.color}}>Hello World</button>
// render(
//     <Button color="blue" onClick={() => console.log('clicked')} />
//     , document.getElementById('app'))

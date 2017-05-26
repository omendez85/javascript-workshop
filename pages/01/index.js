

import Head from './../components/head'
import Wrapper from './../components/wrapper'
import Hero from './../components/hero'
import Content from './../components/content'

// ---
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import { docco } from 'react-syntax-highlighter/dist/styles'
import js from 'react-syntax-highlighter/dist/languages/javascript'

registerLanguage('javascript', js)

// ---
import data from './../data/subjects.json'
import assert from './../assert'
import { calcArea, helloWorld } from './exercise'

const subject = data.subjects.find((item) => item.id === '01')

function runTest() {
  assert(calcArea(10, 4) === 40 && calcArea(12, 8) === 96, 'Calculate triangle area')
  assert(helloWorld() === 'Hello World', 'Return Hello World')
}

class Subject extends React.Component {
  componentDidMount() {
    runTest()
  }

  componentDidUpdate() {
    runTest()
  }

  render() {
    return  (
      <Wrapper>
        <Head title={ subject.label }/>
        <Hero title={ subject.label }/>
        <Content>
          <p>
            JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
          </p>

          <ul>
            <li>
              Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM).
            </li>
            <li>
              Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server.
            </li>
          </ul>

          <h2>
            The Basics
          </h2>

          <p>
            JavaScript borrows most of its syntax from Java, but is also influenced by Awk, Perl and Python.
          </p>

          <p>
            JavaScript is <b>case-sensitive</b> and uses the <b>Unicode</b> character set.
          </p>

          <p>
            In JavaScript, instructions are called statements and are separated by a semicolon (;). Spaces, tabs and newline characters are called whitespace. The source text of JavaScript scripts gets scanned from left to right and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments or whitespace. It is recommended to always add semicolons to end your statements; it will avoid side effects.
          </p>

          <h3>
            Comments
          </h3>

          <p>
            The syntax of <b>comments</b> is the same as in C++ and in many other languages:
          </p>

          <SyntaxHighlighter language="javascript" style={ docco }>
            {
    `// a one line comment

    /* this is a longer,
      multi-line comment
    */

    /* You can't, however, /* nest comments */ SyntaxError */`
            }
          </SyntaxHighlighter>

          <h3>
            Declarations
          </h3>

          <p>
            There are three kinds of declarations in JavaScript.
          </p>

          <dl>
            <dt>
              <code>
                var
              </code>
            </dt>
            <dd>
              <small>
                Declares a variable, optionally initializing it to a value.
              </small>
            </dd>
            <dt>
              <code>
                let
              </code>
            </dt>
            <dd>
              <small>
                Declares a block-scoped, local variable, optionally initializing it to a value.
              </small>
            </dd>
            <dt>
              <code>
                const
              </code>
            </dt>
            <dd>
              <small>
                Declares a block-scoped, read-only named constant.
              </small>
            </dd>
          </dl>

          <h4>
            Variables
          </h4>

          <p>
            You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.
          </p>

          <p>
            A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($); subsequent characters can also be digits (0-9). Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) and the characters "a" through "z" (lowercase).
          </p>

          <p>
            You can use most of ISO 8859-1 or Unicode letters such as å and ü in identifiers
          </p>

          <p>
            Some examples of legal names are <code>Number_hits</code>, <code>temp99</code>, <code>$credit</code>, and <code>_name</code>.
          </p>

          <h4>
            Declaring variables
          </h4>

          <p>
            You can declare a variable in three ways:
          </p>

          <ul>
            <li>
              With the keyword <code>var</code>. For example, <code>var x = 42</code>. This syntax can be used to declare both local and global variables.
            </li>
            <li>
              By simply assigning it a value. For example, <code>x = 42</code>. This always declares a global variable, if it is declared outside of any function. It generates a strict JavaScript warning. You shouldn't use this variant.
            </li>
            <li>
              With the keyword let. For example, <code>let y = 13</code>. This syntax can be used to declare a block-scope local variable.
            </li>
          </ul>
        </Content>
      </Wrapper>
    )
  }
}


export default Subject
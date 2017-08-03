import React from 'react'
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Image,
  Code,
  Appear,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'

const codeExamples = {
  curry: require('../assets/code-examples/curry'),
  promiseDataLast: require('../assets/code-examples/promiseDataLast'),
  reusePromiseCodeWithMap: require('../assets/code-examples/reusePromiseCodeWithMap'),
  introCompose: require('../assets/code-examples/introCompose'),
  compose: require('../assets/code-examples/compose'),
  composeRamda: require('../assets/code-examples/composeRamda'),
}
export default () => [
  <CodeSlide
    notes={
      <ul>
        <li>
          A curried function is a
          function that can be called
          with less than all its
          arguments and return a
          function waiting for the
          remaining ones. Sometimes
          called partially applied.
        </li>
        <li>
          A lot of fp lang has this by
          default
        </li>
      </ul>
    }
    lang="js"
    code={codeExamples.curry}
    ranges={[
      { loc: [0, 1], title: 'Curry' },
      { loc: [0, 3] },
      { loc: [4, 6] },
      { loc: [4, 8] },
      { loc: [4, 9] },
      {
        loc: [10, 11],
        note:
          'Import curry from our favorite util library',
      },
      { loc: [10, 15] },
    ]}
  />,
  <Slide
    notes={
      <ul>
        <li>
          Data last means that we try to writw our function in a way
          so that the arg most likely to change is last.
        </li>
        <li>Most cases data.</li>
        <li>To show how we can combine curry and data last, lets look at some code.</li>
      </ul>
    }
    transition={['fade']}
    bgColor="tertiary"
  >
    <Heading
      size={1}
      textColor="primary"
    >
      Data Last
    </Heading>
  </Slide>,
  <CodeSlide
    notes={
      <ol>
        <li>
          Lets see how we can combine
          curry + data last when working
          with promises.
        </li>
        <li>
          We focus on the implementation
          inside curry
        </li>
        <li>
          Go through all the steps
        </li>
        <li>
          <b>Summary:</b> When you read
          the code its communicating
          what to di instead of how,
          this means even if its a bug
          in the code a fellow developer
          can try to implement what it
          tried to do.
        </li>
        <li>
          Easy to change behavior.
        </li>
      </ol>
    }
    lang="js"
    code={codeExamples.promiseDataLast}
    ranges={[
      {
        loc: [0, 1],
        title:
          'Lets play with promises',
      },
      { loc: [0, 3] },
      {
        loc: [4, 8],
        note:
          'Curried function data last',
      },
      { loc: [5, 7] },
      {
        loc: [8, 12],
        note: 'One more',
      },
      { loc: [12, 21] },
    ]}
  />,
  <CodeSlide
    notes={
      <ul>
        <li>
          Even tho writing DRY code
          wasn't our main goal. We get a
          lot of reuse for free.
        </li>
        <li>
          Here we're using the same
          function but on an array
          instead.
        </li>
        <li>
          This reuse is very valuable
          cause those tiny pure function
          contains our business logic.
          And that it stuff that you
          dont want to duplicate.
        </li>
      </ul>
    }
    lang="js"
    code={
      codeExamples.reusePromiseCodeWithMap
    }
    ranges={[
      {
        loc: [0, 8],
        title: 'Reuse business logic',
      },
    ]}
  />,
  <Slide
    notes={
      <ul>
        <li>
          Lets move on to compose.
        </li>
        <li>
          So far we’ve seen that both
          arrays and promises gives us
          good opportunities to
          structure our programs with
          small pure functions.
        </li>
        <li>
          But say we wanted to the same
          thing on some other value,
          that doesn't have a `.map` or
          `.then` method.
        </li>
      </ul>
    }
    transition={['fade']}
    bgColor="tertiary"
  >
    <Heading
      style={{
        textDecoration: 'line-through',
      }}
      size={6}
      textColor="primary"
    >
      Curry
    </Heading>
    <Heading
      style={{
        textDecoration: 'line-through',
      }}
      size={6}
      textColor="primary"
    >
      Data Last
    </Heading>
    <Heading
      size={1}
      textColor="primary"
    >
      Compose
    </Heading>
  </Slide>,
  <CodeSlide
    notes={
      <ul>
        <li>
          Quite readable, but what if we
          add just one more functions,
          numDoubledMinusOneToThePowerOfTwo?
        </li>
        <li>
          We can call manually and pass
          a long the result. It doesn't
          look to bad. But lots of parenthesis.
        </li>
      </ul>
    }
    lang="js"
    code={codeExamples.introCompose}
    ranges={[
      {
        loc: [0, 1],
        title:
          "Let's define some pure fns",
      },
      { loc: [1, 5] },
      { loc: [5, 8] },
      {
        loc: [9, 17],
        note:
          'How can we put these together?',
      },
      { loc: [18, 19] },
      { loc: [20, 25] },
    ]}
  />,
  <Slide
    notes={
      <ul>
        <li>
          Compose takes an infinite num
          of arg
        </li>
        <li>
          Each arg must be a function
        </li>
        <li>
          It will return a func waiting
          for the arg of the function to
          the most right expect
        </li>
        <li>
          When called it will call all
          function right to left
        </li>
      </ul>
    }
    transition={['fade']}
    bgColor="tertiary"
  >
    <Heading fit textColor="primary">
      This is what compose was born to
      do.
    </Heading>
  </Slide>,
  <CodeSlide
    notes={
      <ul>
        <li>
          We're taking advantage of our
          curried function
        </li>
        <li>
          Since it returns a function we
          can actually just return the
          compose func directly
        </li>
      </ul>
    }
    lang="js"
    code={codeExamples.compose}
    ranges={[
      {
        loc: [0, 5],
        title: (
          <span
            style={{
              background: 'wheat',
            }}
          >
            '🎼 '
          </span>
        ),
      },
      { loc: [5, 12] },
      {
        loc: [13, 17],
        note:
          'We can group for reuse or optimizations',
      },
      {
        loc: [18, 24],
      },
    ]}
  />,
  <CodeSlide
    notes={
      <ul>
        <li>
          Lets see if we can work with
          arrays.
        </li>
        <li>
          We want to use our
          transformation function on odd
          numbers and then add them
          together.
        </li>
      </ul>
    }
    lang="js"
    code={codeExamples.composeRamda}
    ranges={[
      {
        loc: [0, 6],
      },
      { loc: [6, 7] },
      { loc: [8, 13] },
      { loc: [14, 15] },
      {
        loc: [16, 17],
        note:
          'Transform odd numbers and add then sum those',
      },
      {
        loc: [16, 22],
      },
      {
        loc: [16, 17],
        note: 'Partially apply filter',
      },
      {
        loc: [15, 16],
        note: 'Partially apply map',
      },
      {
        loc: [14, 15],
        note: 'Partially apply map',
      },
      { loc: [13, 20] },
    ]}
  />,
]

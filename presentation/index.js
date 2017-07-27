// Import React
import React from 'react'

// Import Spectacle Core tags
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
import CurryDataLastCompose from './curryDataLastCompose'
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  lego: require('../assets/img/lego.gif'),
  immutable: require('../assets/img/immutable.gif'),
  adventure: require('../assets/img/adventure.gif'),
}

const codeExamples = {
  imPureFunction: require('../assets/code-examples/impure-function'),
  mutation: require('../assets/code-examples/mutation'),
  objectSpread: require('../assets/code-examples/objectSpread'),
  spreadNestedStructure: require('../assets/code-examples/spreadNestedStructure'),
  lensIntro: require('../assets/code-examples/lensIntro'),
  boxIntro: require('../assets/code-examples/boxIntro'),
  maybeIntro: require('../assets/code-examples/maybeIntro'),
  maybe: require('../assets/code-examples/maybe'),
  eitherIntro: require('../assets/code-examples/eitherIntro'),
  either: require('../assets/code-examples/either'),
}
preloader(images)

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: '#CECECE',
    tertiary: '#edcc30',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['zoom']}
          bgColor="primary"
        >
          <Heading
            fit
            caps
            lineHeight={1}
            textColor="secondary"
          >
            Functional programming in JS
          </Heading>
          <Text
            margin="20px 0 0"
            textColor="tertiary"
            size={1}
            bold
          >
            Joachim Bachstätter <br />
            <Link href="https://twitter.com/bachstatter">
              @bachstatter
            </Link>
          </Text>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            What's it all about?
          </Heading>
          <Image
            width={'100%'}
            height={'100%'}
            src={images.lego}
          />
        </Slide>
        <Slide
          notes={
            <p>
              Some goals in order of
              importance
            </p>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            fit
            textColor="primary"
          >
            Goals
          </Heading>
          <List ordered>
            <ListItem
              ordered
              textColor={'primary'}
            >
              <b>
                Moar small pure
                functions
              </b>
            </ListItem>
            <Appear>
              <ListItem
                textColor={'primary'}
              >
                Readable/ Understandable
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                textColor={'primary'}
              >
                Easy to modify
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                textColor={'primary'}
              >
                Easy to remove
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                textColor={'primary'}
              >
                Easy to reuse
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading
            size={6}
            textColor="secondary"
            caps
          >
            Things I aim to cover
          </Heading>
          <List>
            <ListItem>
              Pure functions
            </ListItem>
            <ListItem>
              Immutability
            </ListItem>
            <ListItem>
              Currying, Data Last &
              Compose
            </ListItem>
            <ListItem>
              Algebraic Data Type
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Heading
            fit
            textColor="primary"
            caps
          >
            Pure functions
          </Heading>
        </Slide>
        <Slide
          transition={['fade']}
          textColor="primary"
          bgColor="tertiary"
        >
          <List>
            <ListItem>
              Same input =>{' '}
              <b>always </b> same output
            </ListItem>
            <ListItem>
              No side effects
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          code={
            codeExamples.imPureFunction
          }
          ranges={[
            {
              loc: [0, 10],
              title: 'Side effects',
            },
          ]}
        />
        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={1}
            textColor="primary"
          >
            Benefits
          </Heading>
          <List textColor={'primary'}>
            <ListItem>
              Trust/Confidence
            </ListItem>
            <ListItem>
              Composability
            </ListItem>
            <ListItem>
              Testable
            </ListItem>
          </List>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                Immutability is also
                quite popular. Not when
                I something is popular
                its is heavily based on
                my won experiences. We
                all live in bubbles and
                my react/redux bubble
                might differ from yours.
              </li>
              <li>
                Anyway, when something
                is immutable it can’t be
                changed
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Heading
            fit
            textColor="primary"
            caps
          >
            immutability
          </Heading>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                Instead when you change
                an immutable object /
                array you get back a new
                version with the
                updates.
              </li>
              <li>
                This means the original
                object stays the same
                without any changes
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Image
            width={'100%'}
            height={'100%'}
            src={images.immutable}
          />
        </Slide>
        <CodeSlide
          lang="js"
          code={codeExamples.mutation}
          ranges={[
            { loc: [0, 4] },
            {
              loc: [4, 5],
              note:
                'We want another company!',
            },
            {
              loc: [4, 6],
              note: `But with another name`,
            },
            {
              loc: [6, 8],
              title: '😱',
            },
          ]}
        />
        <CodeSlide
          lang="js"
          code={
            codeExamples.objectSpread
          }
          ranges={[
            {
              loc: [0, 4],
              note: 'Same deal!',
            },
            {
              loc: [4, 8],
              note: 'Babel / Node 8 ',
            },
            {
              loc: [8, 13],
              note: 'ES2015/ Node 4',
            },
            {
              loc: [13, 16],
              title: '😎',
            },
          ]}
        />
        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={1}
            textColor="primary"
          >
            Cool, but..
          </Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={
            codeExamples.spreadNestedStructure
          }
          ranges={[
            {
              loc: [0, 10],
              note:
                'Lets update rating of bookRecommendation.',
            },
            { loc: [6, 7] },
            { loc: [11, 23] },
            { loc: [17, 18] },
          ]}
        />
        <Slide
          notes={
            'all good, different tradeoffs'
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={1}
            textColor="primary"
          >
            Help(ers)
          </Heading>
          <List textColor="primary">
            <ListItem>
              immutable-js
            </ListItem>
            <ListItem>
              seamless-immutable
            </ListItem>
            <ListItem>
              dot-prop-immutable
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={1}
            textColor="primary"
          >
            What can we learn from FP?
          </Heading>
        </Slide>
        <Slide
          notes={
            'Lenses lets you set focus on a specific prop in a nested object. Use both as a getter and setter.'
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={1}
            textColor="primary"
          >
            Lenses
          </Heading>
        </Slide>
        <CodeSlide
          notes={
            <ul>
              <li>
                Here we're gonna user
                Ramdas implementation of
                lenses. First thing we
                do is import Ramda.
              </li>
              <li>
                We still have the same
                nested object
              </li>
              <li>
                We create our lens by
                calling R.lenspath,
                which take an array the
                the path we want our
                lens to focus in on
              </li>
              <li>
                Ramda has a few
                functions that lets us
                use our lens. The first
                function we gonna use is
                R.set which lets us set
                the property our lens is
                focusing on.
              </li>
              <li>
                The first arg set takes
                if our lens. Then the
                value we want to set and
                finally our object.
              </li>
              <li>
                If called with a obj
                with different
                structure, it will
                create an object with
                the correct keys.
              </li>
              <li>
                The getter return
                undefined. If you pass
                it something with a
                different structure.
              </li>
              <li>
                Also is you pass it
                undefined/ null.
              </li>
            </ul>
          }
          lang="js"
          code={codeExamples.lensIntro}
          ranges={[
            {
              loc: [0, 1],
              note: 'Ramda Lenses.',
            },
            { loc: [1, 12] },
            { loc: [13, 14] },
            { loc: [14, 15] },
            { loc: [15, 16] },
            { loc: [16, 17] },
            { loc: [13, 18] },
            { loc: [19, 20] },
            { loc: [19, 24] },
            { loc: [25, 27] },
            { loc: [28, 30] },
          ]}
        />
        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={1}
            textColor="primary"
          >
            TODO Maybe talk about JS
            immutable array updates
          </Heading>
        </Slide>
        {CurryDataLastCompose()}
        <Slide
          notes={
            <ul>
              <li>
                Lets move on to compose.
              </li>
              <li>
                So far we’ve seen that
                both arrays and promises
                gives us good
                opportunities to
                structure our programs
                with small pure
                functions.
              </li>
              <li>
                But say we wanted to the
                same thing on some other
                value, that doesn't have
                a `.map` or `.then`
                method.
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            style={{
              textDecoration:
                'line-through',
            }}
            size={6}
            textColor="primary"
          >
            Pure function
          </Heading>
          <Heading
            style={{
              textDecoration:
                'line-through',
            }}
            size={6}
            textColor="primary"
          >
            Immutability
          </Heading>
          <Heading
            size={6}
            style={{
              textDecoration:
                'line-through',
            }}
            textColor="primary"
          >
            Currying, Data Last &
            Compose
          </Heading>
          <Heading
            size={1}
            textColor="primary"
          >
            Algebraic Data Types
          </Heading>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                final part boxes,
                patterns/ structures to
                write more small fns
              </li>
              <li>
                Goal to work with boxes
                as much as possible,
                using map. That we we
                can change behavior
                without changing
                business logic.
              </li>
              <li>
                So far only promises and
                array ( we saw how we
                reused business logic
                for those.)
              </li>
              <li>
                Before we move on, I'll
                give a warning for that
                some of the stuff I say
                might not be correct.
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading textColor="primary">
            📦
          </Heading>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                I'm still in the
                beginning of my journey
                into functional
                programing.
              </li>
              <li>
                Feel free to raise you
                hand with corrections
                that benefits us all
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Image
            width={'100%'}
            height={'100%'}
            src={images.adventure}
          />
        </Slide>
        <CodeSlide
          notes={
            <ul>
              <li>
                Nothing to exiting
              </li>
              <li>
                Basically another way to
                let us use map of stuff
                that doesn't have a map
                function
              </li>
            </ul>
          }
          lang="js"
          code={codeExamples.boxIntro}
          ranges={[
            {
              loc: [0, 1],
              title: '📦',
            },
            { loc: [0, 2] },
            { loc: [2, 3] },
            { loc: [2, 6] },
            { loc: [7, 10] },
          ]}
        />
        <Slide
          notes={
            <ul>
              <li>
                We dont have to come up
                with boxes our self
              </li>
              <li>
                There's boxes for null
                checks, error handling
                and for future values
              </li>
              <li>
                And the cool thing is
                that these boxes is
                based on mathematics
              </li>
              <li>
                A field called Category
                Theory
              </li>
              <li>
                All about how to compose
                these boxes together.
              </li>
              <li>
                Category theory calls
                boxes objects and
                functions like map
                arrows/ morphisms
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading textColor="primary">
            <Heading
              size={5}
              textColor="primary"
            >
              Null check -> Maybe
            </Heading>
            <Heading
              size={5}
              textColor="primary"
            >
              Error handling -> Either
            </Heading>
            <Heading
              size={5}
              textColor="primary"
            >
              Future values -> Task
            </Heading>
          </Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={codeExamples.maybeIntro}
          notes={
            <ul>
              <li>
                There are lots of maybe
                implementations. And
                eventho some might use
                different terminology
                all the concepts stays
                the same across the
                different libraries.
              </li>
              <li>
                For my example I'm gonna
                use monet
                implementation. We also
                gonna look at their
                implementation of
                Either..
              </li>
              <li>
                So what is a maybe. A
                maybe can be two
                different things, Some()
                or None()
              </li>
              <li>
                We use this to remove
                null pointer exception,
                no more undefined is not
                a function.
              </li>
              <li>
                Lets create our first
                maybe. We can use the
                `of` method and then we
                use our loving map fn to
                transform the value
                inside.{' '}
              </li>
              <li>
                And just like we're use
                to if the maybe is in a
                None state nothing will
                happen.
              </li>
            </ul>
          }
          ranges={[
            {
              loc: [0, 1],
              title: 'Maybe intro',
            },
            { loc: [2, 4] },
            { loc: [5, 9] },
          ]}
        />
        <CodeSlide
          lang="js"
          notes={
            <ul>
              <li>
                Still using monet and
                now we want ramda for
                some utility fn as well
              </li>
              <li>
                In these examples we
                gonna use a list of
                companies to play around
                with.
              </li>
              <li>
                Then we create a
                getCompany function
                which takes a name and
                find a company with that
                name
              </li>
              <li>
                But instead of returning
                the result of find
                directly, we're using
                Maybe.fromNull
              </li>
              <li>
                This means that or
                getCompany will return a
                Maybe. If find a company
                Some else None
              </li>
              <li>
                We call our function and
                save the result. One
                with Some one with None
              </li>
              <li>
                When none Nothing
                happens, & when we have
                value the map gets
                called.
              </li>
              <li>
                Calling two maps in a
                row means we can compose
                if we want.
              </li>
              <li>
                But we still have our
                values wrapped in a
                maybe. To extract the
                value we can use orSome
              </li>
              <li />
            </ul>
          }
          code={codeExamples.maybe}
          ranges={[
            {
              loc: [0, 2],
              title: 'Maybe in action',
            },
            { loc: [3, 7] },
            { loc: [7, 12] },
            { loc: [13, 17] },
            { loc: [18, 23] },
            { loc: [24, 28] },
            { loc: [29, 34] },
            { loc: [35, 39] },
            { loc: [40, 44] },
          ]}
        />
        <Slide
          notes={
            <ul>
              <li>
                Maybe is cool, but
                sometimes annoying
              </li>
              <li>
                Since None cant hold any
                value its not good for
                error handling
              </li>
              <li>
                We wouldn't have any
                error to display
              </li>
              <li>
                And thats when Either
                comes into play
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            style={{
              textDecoration:
                'line-through',
            }}
            size={6}
            textColor="primary"
          >
            Maybe
          </Heading>
          <Heading
            size={1}
            textColor="primary"
          >
            Either
          </Heading>
          <Heading
            size={4}
            textColor="primary"
          >
            Task
          </Heading>
        </Slide>
        <CodeSlide
          notes={
            <ul>
              <li>
                Either is similar to
                maybe that it can be in
                two states.
              </li>
              <li>
                But instead of Some and
                none it is Left or Right
              </li>
              <li>
                Left behaves like None.
                None of our map function
                will get run. The
                difference if that is
                can hold an error msg.
              </li>
              <li>
                And right represents
                success and behaves
                exactly like Some.
              </li>
              <li>
                We instantiate the the
                left or right depending
                on our operation is
                successful
              </li>
              <li>
                One way to check if our
                Either is successful by
                calling isRight or
                isLeft
              </li>
            </ul>
          }
          lang={'js'}
          code={
            codeExamples.eitherIntro
          }
          ranges={[
            {
              loc: [0, 1],
              title: 'Either intro',
            },
            { loc: [2, 4] },
            { loc: [5, 9] },
          ]}
        />
        <CodeSlide
          notes={
            <ul>
              <li>
                Lets look at a use case
                for Either. We import
                Either and ramda.
              </li>
              <li>
                Then the first thing we
                gonna do is to create a
                parseJson fn. This will
                take a json string Call
                JSON.parse and is
                successful return a
                Right otherwise a Left
              </li>
              <li>Then we create to const with JSON string. Where one of them have an error. Name is missing quotes.</li>
              <li>I also copied over our upperName fn</li>
              <li>First we call our parseJson with the valid json string</li>
              <li>Then we map over it upperName</li>
              <li>And finally instead if calling isRight or isLeft we're using Eithers cata method</li>
              <li>cata takes two functions, the one to the left will be called if there's an error and the one to the right on success </li>
              <li>In this case since the parsing was successful upperName will be called and we can render</li>
              <li>If we do the same thing with the invalid json upperName wont be called and we log out the error.</li>
            </ul>
          }
          lang={'js'}
          code={codeExamples.either}
          ranges={[
            {
              loc: [0, 2],
              title: 'Either in action',
            },
            { loc: [3, 13] },
            { loc: [14, 19] },
            { loc: [18, 19], note: 'Name is missing quotes' },
            { loc: [20, 24] },
            { loc: [25, 32] },
            { loc: [33, 40] },
          ]}
        />

        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Typography
          </Heading>
          <Heading
            size={1}
            textColor="secondary"
          >
            Heading 1
          </Heading>
          <Heading
            size={2}
            textColor="secondary"
          >
            Heading 2
          </Heading>
          <Heading
            size={3}
            textColor="secondary"
          >
            Heading 3
          </Heading>
          <Heading
            size={4}
            textColor="secondary"
          >
            Heading 4
          </Heading>
          <Heading
            size={5}
            textColor="secondary"
          >
            Heading 5
          </Heading>
          <Text
            size={6}
            textColor="secondary"
          >
            Standard text
          </Text>
        </Slide>
        <Slide
          notes={
            <p>
              Some goals in order of
              importance
            </p>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            fit
            textColor="primary"
          >
            Lets check our goals
          </Heading>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 25,
            }}
            size={5}
            textColor={'primary'}
          >
            <span
              style={{
                marginRight: 10,
              }}
            >
              ✅
            </span>{' '}
            Moar small pure functions
          </Text>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 25,
            }}
            size={5}
            textColor={'primary'}
          >
            <span
              style={{
                marginRight: 10,
              }}
            >
              ✅
            </span>{' '}
            Readable/ Understandable
          </Text>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 25,
            }}
            size={5}
            textColor={'primary'}
          >
            <span
              style={{
                marginRight: 10,
              }}
            >
              ✅
            </span>{' '}
            Easy to modify
          </Text>
          <Text
            style={{
              textAlign: 'left',
              marginTop: 25,
            }}
            size={5}
            textColor={'primary'}
          >
            <span
              style={{
                marginRight: 10,
              }}
            >
              ✅
            </span>{' '}
            Easy to reuse
          </Text>
        </Slide>
      </Deck>
    )
  }
}

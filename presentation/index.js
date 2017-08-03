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
  mutation: require('../assets/code-examples/mutation'),
  objectSpread: require('../assets/code-examples/objectSpread'),
  spreadNestedStructure: require('../assets/code-examples/spreadNestedStructure'),
  lensIntro: require('../assets/code-examples/lensIntro'),
  maybeIntro: require('../assets/code-examples/maybeIntro'),
  maybe: require('../assets/code-examples/maybe'),
  eitherIntro: require('../assets/code-examples/eitherIntro'),
  either: require('../assets/code-examples/either'),
  futures: require('../assets/code-examples/futures'),
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
          notes={
            <p>
              Some of the concepts will
              probably be familiar to
              you already but hopefully
              I say something
              interesting for everybody.
            </p>
          }
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
          notes={
            <p>
              Our main goal when writing
              in a functional style, is
              to have small pieces and
              put them together and hope
              that together they form an
              application.
            </p>
          }
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
              But lets define some more
              clear goals
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
            Stuff I plan to talk about.
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
              Algebraic Data Types
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          textColor="primary"
          bgColor="tertiary"
          notes={
            <p>
              A pure function is a
              function that when called
              with the same input always
              return the same output. It
              should also not have any
              side effects.
            </p>
          }
        >
          <Heading
            fit
            textColor="primary"
            caps
          >
            Pure functions
          </Heading>
          <List>
            <ListItem>
              Same input =>
              <b> always </b> same
              output
            </ListItem>
            <ListItem>
              No side effects
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes={
            <ul>
              <li>
                Benefits of writing with
                a style that favours
                pure functions is that
                you get more trust
                confidence.
              </li>
              <li>
                You know what the
                functions return and you
                know that it wont cause
                any problems.
              </li>
              <li>
                Its also easy to compose
                these function, which we
                gonna see more about
                later in this talk.
              </li>
            </ul>
          }
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
          transition={['fade']}
          bgColor="tertiary"
          notes={
            <ul>
              <li>
                Immutability is just
                like pure functions a
                fairly popular concept.
                Especially in the react
                redux bubble that I find
                myself in. Anyway when
                something is immutable
                it means it cant be
                changed.
              </li>
              <li>
                Anyway, when something
                is immutable it can’t be
                changed
              </li>
            </ul>
          }
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
            size={1}
            textColor="primary"
          >
            Immutability
          </Heading>
          <Heading
            size={6}
            textColor="primary"
          >
            Currying, Data Last &
            Compose
          </Heading>
          <Heading
            size={6}
            textColor="primary"
          >
            Algebraic Data Types
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
          notes={
            <ul>
              <li>
                Lets look at some code
                examples to see how we
                can make immutable
                updates
              </li>
            </ul>
          }
          code={
            codeExamples.objectSpread
          }
          ranges={[
            { loc: [0, 4] },
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
            <ul>
              <li>
                Normalize data structure
              </li>
              <li>Use a library</li>
              <li>
                All good, different
                tradeoffs
              </li>
            </ul>
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
            size={6}
            style={{
              textDecoration:
                'line-through',
            }}
            textColor="primary"
          >
            Immutability
          </Heading>
          <Heading
            size={2}
            textColor="primary"
          >
            Currying, Data Last &
            Compose
          </Heading>
          <Heading
            size={6}
            textColor="primary"
          >
            Algebraic Data Types
          </Heading>
        </Slide>
        {CurryDataLastCompose()}
        <Slide
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
              Future values -> Futures
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
                Instead of returning
                result of find we're
                using Maybe.fromNull
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
            { loc: [18, 22] },
            { loc: [23, 27] },
            { loc: [28, 32] },
            { loc: [33, 38] },
            { loc: [39, 44] },
            { loc: [44, 50] },
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
            Futures
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
                Then the first thing we
                gonna do is to create a
                parseJson fn. This will
                take a json string Call
                JSON.parse and is
                successful return a
                Right otherwise a Left
              </li>
              <li>
                Then we create to const
                with JSON string. Where
                one of them have an
                error. Name is missing
                quotes.
              </li>
              <li>
                I also copied over our
                upperName fn
              </li>
              <li>
                Call parseJSON and map
                upperName
              </li>
              <li>
                Finally: Cata, cata
                takes two functions, the
                one to the left will be
                called if there's an
                error and the one to the
                right on success.
              </li>
              <li>
                In this case since the
                parsing was successful
                upperName will be called
                and we can render
              </li>
              <li>
                If we do the same thing
                with the invalid json
                upperName wont be called
                and we log out the
                error.
              </li>
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
            {
              loc: [18, 19],
              note:
                'Name is missing quotes',
            },
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
            style={{
              textDecoration:
                'line-through',
            }}
            size={6}
            textColor="primary"
          >
            Either
          </Heading>
          <Heading
            size={1}
            textColor="primary"
          >
            Futures
          </Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes={
            <ul>
              <li>
                A Future is just like a
                Promise an async
                abstraction
              </li>
              <li>
                Main difference, Futures
                lazy. When create a
                Futures nothing happens.
                When you create a
                promises it fires off
                directly. A Future
                represent the
                computation and a
                promise the result of
                that computation.
              </li>
              <li>
                Make app more pure. The
                function will always
                return the same thing.
                Outside caller firing
                off side effects.
              </li>
              <li>
                Type error and failed
                network request they
                both gonna end up in the
                .catch. Futures does not
                catch type error and
                other unexpected errors.
                An expected error such
                as 404 will end up in
                the failure branch.
              </li>

              <li>
                It also doesn't
                automatically flatten.
                Impossible to have a
                promises holding a
                promise, inner resolve
                automatically. Often ok
                but hard to type.
              </li>
            </ul>
          }
        >
          <Heading
            size={1}
            textColor="primary"
            caps
          >
            Futures
          </Heading>
          <List>
            <ListItem
              ordered
              textColor={'primary'}
            >
              Lazy
            </ListItem>
            <Appear>
              <ListItem
                ordered
                textColor={'primary'}
              >
                Expected vs unexpected
                errors
              </ListItem>
            </Appear>
            <Appear>
              <ListItem
                ordered
                textColor={'primary'}
              >
                No automatic resolving
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          notes={
            <ul>
              <li>
                encaseP takes a function
                returning a promise and
                return a Future instead.
              </li>
              <li>
                Create a URL constant
                and a name lens. Goal
                first name from github
              </li>
              <li>
                We use our new axiosGet
                function to make a GET
                request to githubs url
              </li>
              <li>.then -> .map</li>
              <li>
                Nothing happen until
                fork
              </li>
              <li>
                Fork just like Either
                takes first an error fn
                and then a success fn.
              </li>
              <li>
                The request successful
                first name logged.
              </li>
              <li>
                .map never called.
                console.error
              </li>
              <li>
                On the otherhand if we
                create a reference
                error, that will not end
                up in the failure
                branch. Instead it will
                throw making our
                debugger stop or log log
                out nice stacktraces in
                dev. Or making our app
                restart if we are in
                prod.
              </li>
              <li>
                Cant have a nested
                promise. Hard to type.
                Sometimes you might want
                that.
              </li>
            </ul>
          }
          code={codeExamples.futures}
          ranges={[
            {
              loc: [0, 3],
              title: 'Futures',
            },
            { loc: [4, 7] },
            { loc: [8, 10] },
            { loc: [11, 15] },
            { loc: [16, 18] },
            { loc: [19, 22] },
            { loc: [23, 26] },
            { loc: [26, 31] },
            { loc: [32, 37] },
            { loc: [37, 45] },
            { loc: [39, 40] },
          ]}
        />

        <Slide
          notes={
            <ul>
              <li>
                And I think this is the
                really cool part. When
                you learn one of these
                concets you cna use them
                on different data types.
                You dont have to learn
                one api for arrays and
                one for promises. And
                even cooler that that.
                Almost all fp languages
                uses this structure. So
                this knowlogde should
                give you a head start if
                you start looking at
                Elm, Reason Purescript
                or even Haskell
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            fit
            textColor="primary"
          >
            Learn once write everywhere
          </Heading>
        </Slide>
        <Slide
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading
            fit
            textColor="primary"
          >
            Thanks
          </Heading>
        </Slide>
      </Deck>
    )
  }
}

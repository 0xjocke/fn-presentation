// Import React
import React from 'react';

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
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import CurryDataLastCompose from './curryDataLastCompose';
// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  lego: require('../assets/img/lego.gif'),
  immutable: require('../assets/img/immutable.gif'),
  adventure: require('../assets/img/adventure.gif'),
};

const codeExamples = {
  imPureFunction: require('../assets/code-examples/impure-function'),
  mutation: require('../assets/code-examples/mutation'),
  objectSpread: require('../assets/code-examples/objectSpread'),
  spreadNestedStructure: require('../assets/code-examples/spreadNestedStructure'),
  lensIntro: require('../assets/code-examples/lensIntro'),
  boxIntro: require('../assets/code-examples/boxIntro'),
  caseForMaybe: require('../assets/code-examples/caseForMaybe'),
  maybeIntro: require('../assets/code-examples/maybeIntro'),
  maybe: require('../assets/code-examples/maybe'),
};
preloader(images);

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
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            Functional programming in JS
          </Heading>
          <Text margin="20px 0 0" textColor="tertiary" size={1} bold>
            Joachim Bachstätter <br />
            <Link href="https://twitter.com/bachstatter"> @bachstatter</Link>
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            What's it all about?
          </Heading>
          <Image width={'100%'} height={'100%'} src={images.lego} />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Things I aim to cover
          </Heading>
          <List>
            <ListItem>Pure functions</ListItem>
            <ListItem>Immutability</ListItem>
            <ListItem>Currying and data last</ListItem>
            <ListItem>Compose</ListItem>
            <ListItem>Algebraic Data Type</ListItem>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading fit textColor="primary" caps>
            Pure functions
          </Heading>
        </Slide>
        <Slide transition={['fade']} textColor="primary" bgColor="tertiary">
          <List>
            <ListItem>
              Same input => <b>always </b> same output
            </ListItem>
            <ListItem>No side effects</ListItem>
          </List>
        </Slide>
        <CodeSlide
          lang="js"
          code={codeExamples.imPureFunction}
          ranges={[{ loc: [0, 10], title: 'Side effects' }]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Benefits
          </Heading>
          <List textColor={'primary'}>
            <ListItem>Trust/Confidence</ListItem>
            <ListItem>Composability</ListItem>
            <ListItem>Testable</ListItem>
          </List>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                Immutabillity is also quite popular. Not when I something is
                popular its is heavily based on my won experiences. We all live
                in bubbles and my react/redux bubble might differ from yours.
              </li>
              <li>Anyway, when something is immutable it can’t be changed</li>
            </ul>
          }
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Heading fit textColor="primary" caps>
            immutability
          </Heading>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                Instead when you change an immutable object / array you get back
                a new version with the updates.
              </li>
              <li>
                This means the original object stays the same without any
                changes
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Image width={'100%'} height={'100%'} src={images.immutable} />
        </Slide>
        <CodeSlide
          lang="js"
          code={codeExamples.mutation}
          ranges={[
            { loc: [0, 4] },
            { loc: [4, 5], note: 'We want another company!' },
            { loc: [4, 6], note: `But with another name` },
            { loc: [6, 8], title: '😱' },
          ]}
        />
        <CodeSlide
          lang="js"
          code={codeExamples.objectSpread}
          ranges={[
            { loc: [0, 4], note: 'Same deal!' },
            { loc: [4, 8], note: 'Babel / Node 8 ' },
            { loc: [8, 13], note: 'ES2015/ Node 4' },
            { loc: [13, 16], title: '😎' },
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Cool, but..
          </Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={codeExamples.spreadNestedStructure}
          ranges={[
            { loc: [0, 10], note: 'Lets update rating of bookRecommendation.' },
            { loc: [6, 7] },
            { loc: [11, 23] },
            { loc: [17, 18] },
          ]}
        />
        <Slide
          notes={'all good, different tradeoffs'}
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading size={1} textColor="primary">
            Help(ers)
          </Heading>
          <List textColor="primary">
            <ListItem>immutable-js</ListItem>
            <ListItem>seamless-immutable</ListItem>
            <ListItem>dot-prop-immutable</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
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
          <Heading size={1} textColor="primary">
            Lenses
          </Heading>
        </Slide>
        <CodeSlide
          notes={
            <ul>
              <li>
                Helpers like lodash, heavily focused on letting you write code
                in a functional way
              </li>
              <li>
                If called with a obj with different structure, it will create
                and object with the correct keys.
              </li>
              <li>
                The getter return undefined. If you pass it something with a
                different structe..{' '}
              </li>
              <li>Also is you pass it undefined/ null. </li>
            </ul>
          }
          lang="js"
          code={codeExamples.lensIntro}
          ranges={[
            { loc: [0, 1], note: 'Ramda Lenses.' },
            { loc: [1, 12] },
            { loc: [13, 18] },
            { loc: [19, 21] },
            { loc: [21, 23] },
            { loc: [24, 26] },
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            TODO Maybe talk about JS immutable array updates
          </Heading>
        </Slide>
        {CurryDataLastCompose()}

        <Slide
          notes={
            <ul>
              <li>
                final part boxes, patterns/ structures to write more small fns
              </li>
              <li>
                Goal to work with boxes as much as possible, using map. That we
                we can change behavior without changing business logic.
              </li>
              <li>
                So far only promises and array ( we saw how we reused business
                logic for those.)
              </li>
              <li>
                Before we move on, I'll give a warning for that some of the
                stuff I say might not be correct.{' '}
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading textColor="primary">📦</Heading>
        </Slide>
        <Slide
          notes={
            <ul>
              <li>
                I'm still in the beginning of my journey into fucntional
                programing.
              </li>
              <li>
                Feel free to raise you hand with corrections that benefits us
                all
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="secondary"
          textColor="primary"
        >
          <Image width={'100%'} height={'100%'} src={images.adventure} />
        </Slide>
        <Slide
          notes={
            <ul>
              <li>We dont have to come up with boxes our self</li>
              <li>
                There's boxes for null checks, error handling and for future
                values
              </li>
              <li>
                And the cool thing is that these boxes is based on mathematics
              </li>
              <li>A field called Category Theory</li>
              <li>All about how to compose these boxes together.</li>
              <li>
                Category theory calls boxes objects and functions like map
                arrows/ morphisms
              </li>
            </ul>
          }
          transition={['fade']}
          bgColor="tertiary"
        >
          <Heading textColor="primary">
            <Heading size={5} textColor="primary">
              Null check -> Maybe
            </Heading>
            <Heading size={5} textColor="primary">
              Error handling -> Either
            </Heading>
            <Heading size={5} textColor="primary">
              Future values -> Task
            </Heading>
          </Heading>
        </Slide>
        <CodeSlide
          notes={
            <ul>
              <li>Nothing to exiting</li>
              <li>
                Basically another way to let us use map of stuff that doesn't
                have a map function
              </li>
            </ul>
          }
          lang="js"
          code={codeExamples.boxIntro}
          ranges={[
            { loc: [0, 1], title: '📦' },
            { loc: [0, 2] },
            { loc: [2, 3] },
            { loc: [2, 6] },
            { loc: [7, 10] },
          ]}
        />
        <CodeSlide
          notes={
            <ul>
              <li>We have a function that return a number most of the time</li>
              <li>
                But not all the time. So every time we or a another developer.
                Wants to use this function we have to be sure to rembember if
                check if its null.
              </li>
              <li>
                A type system def tries to solve this issue. But using maybe
                also does that.
              </li>
              <li>
                If our geNUmbers function returned a maybe number instead.
              </li>
              <li>
                The caller wouldn't be able to access the value without
                unwrapping the maybe.{' '}
              </li>
            </ul>
          }
          lang="js"
          code={codeExamples.caseForMaybe}
          ranges={[
            { loc: [0, 1], title: 'The case for maybe' },
            { loc: [0, 2] },
            { loc: [2, 3] },
            { loc: [2, 6] },
            { loc: [7, 10] },
          ]}
        />
        <CodeSlide
          lang="js"
          code={codeExamples.maybeIntro}
          ranges={[
            { loc: [0, 1], title: 'Maybe intro' },
            { loc: [0, 2] },
            { loc: [2, 3] },
            { loc: [2, 6] },
            { loc: [7, 10] },
          ]}
        />
        <CodeSlide
          lang="js"
          code={codeExamples.maybe}
          ranges={[
            { loc: [0, 1], title: 'maybe in action' },
            { loc: [0, 2] },
            { loc: [2, 3] },
            { loc: [2, 6] },
            { loc: [7, 10] },
          ]}
        />

        <Slide transition={['fade']} bgColor="tertiary">
          <Text size={6} textColor="secondary">
            Moving on. Hopefully some found that interesting. Now how else can
            we leverage the power on map and compose. Well there is a ADT
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}

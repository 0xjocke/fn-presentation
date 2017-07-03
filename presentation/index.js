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
import CurryDataLastCompose from './curryDataLastCompose'
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
};

const codeExamples = {
  imPureFunction: require('../assets/code-examples/impure-function'),
  mutation: require('../assets/code-examples/mutation'),
  objectSpread: require('../assets/code-examples/objectSpread'),
  spreadNestedStructure: require('../assets/code-examples/spreadNestedStructure'),
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
            <ListItem>Abstract Data Type</ListItem>
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
          ranges={[
            { loc: [0, 270], title: 'Side effects' },
            { loc: [0, 4] },
            { loc: [1, 2], note: 'No good!' },
            { loc: [5, 10], note: 'A more real life example' },
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading fit>
            <Code bgColor={'transparent'} textColor="primary">
              (props, state) => view
            </Code>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">Benefits</Heading>
          <List textColor={'primary'}>
            <ListItem>Trust/Confidence</ListItem>
            <ListItem>Composability</ListItem>
            <ListItem>Testable</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading fit textColor="primary" caps>
            immutability
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image width={'100%'} height={'100%'} src={images.immutable} />
        </Slide>
        <CodeSlide
          lang="js"
          code={codeExamples.mutation}
          ranges={[
            { loc: [0, 1] },
            { loc: [0, 2], note: 'We want another foo!' },
            { loc: [0, 3], note: `But this foo's bar show be two` },
            { loc: [0, 5], title: '😱' },
          ]}
        />
        <CodeSlide
          lang="js"
          code={codeExamples.objectSpread}
          ranges={[
            { loc: [0, 1], note: 'Same deal!' },
            { loc: [0, 2], note: 'Babel / Node 8 ' },
            { loc: [0, 3], note: 'ES2015/ Node 4' },
            { loc: [0, 7], title: '😎' },
          ]}
        />
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">Cool, but..</Heading>
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
          <Heading size={1} textColor="primary">Help(ers)</Heading>
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
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            TODO code slide
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            TODO Maybe talk about JS immutable array updates
          </Heading>
        </Slide>
        {CurryDataLastCompose()}

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
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

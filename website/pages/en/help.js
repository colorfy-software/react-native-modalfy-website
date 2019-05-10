/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const translate = require('../../server/translate.js').translate;

class Help extends React.Component {
  render() {
    const supportLinks = [
      {
        title: <translate>Browse the docs</translate>,
        content: (
          <translate>
            Find what you're looking for in our detailed documentation and
            guides.\n\n- Learn how to [get
            started](/docs/en/getting-started.html) with React Native Modalfy.\n- Look
            at the full [API Reference](/docs/en/api-reference.html).
          </translate>
        ),
      },
      {
        title: <translate>Join the community</translate>,
        content: (
          <translate>
            Ask questions and find answers from other users like you.\n\n-
            Many members of the community use Stack Overflow. Read through the
            [existing
            questions](https://stackoverflow.com/questions/tagged/react-native-modalfy) tagged
            with **react-native-modalfy** or [ask your
            own](https://stackoverflow.com/questions/ask)!
          </translate>
        ),
      },
      {
        title: <translate>Stay up to date</translate>,
        content: (
          <translate>
            Find out what's new with React Native Modalfy.\n\n- Subscribe to the
            [React Native Modalfy blog](/blog/).\n- Look at the
            [changelog](https://github.com/colorfy-software/react-native-modalfy/blob/master/CHANGELOG.md).
          </translate>
        ),
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1><translate>Need help?</translate></h1>
            </header>
            <p>
              <translate>
                React Native Modalfy is worked on by colorfy's team.
                Feel free to reach out to us for any inquiry.
              </translate>
            </p>
            <GridBlock contents={supportLinks} layout="threeColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

Help.defaultProps = {
  language: 'en',
};

module.exports = Help;

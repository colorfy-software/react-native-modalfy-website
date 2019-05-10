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

class Contributing extends React.Component {
  render() {
    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1><translate>The Contributor Guide</translate></h1>
            </header>

            <p>
              <translate>
                If you're here because you want to help improve React Native Modalfy, first of all: thank you, we really appreciate it!
              </translate>
            </p>
            <p>
              <translate>Here are a few ways to contribute to the project:</translate>
            </p>

            <ul>
              <li><translate>Helping with issues</translate></li>
              <li><translate>Reporting bugs</translate></li>
              <li><translate>Fixing bugs</translate></li>
              <li><translate>Improving the doc</translate></li>
              <li><translate>Sending pull requests</translate></li>
              <li><translate>Suggesting features</translate></li>
            </ul>  

            <p>
              <translate>
                This guide will evolve alongside the project. To get started, just head to the GitHub repo we're waiting for you!
              </translate>
            </p>
          </div>
        </Container>
      </div>
    );
  }
}

Contributing.defaultProps = {
  language: 'en',
};

module.exports = Contributing;

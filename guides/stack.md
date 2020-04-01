---
title: Creating a stack
---

# Creating a stack

You'll need to use 2 things to get up and running with React Native Modalfy. First, `ModalProvider`, which is going to wrap your whole application in order to be able to display your modals on top of everything. Then we have `createModalStack`, we'll use to create the stack `ModalProvider` needs to work as expected.

## Setup the provider

Simply find your app root's component and put its current content inside `ModalProvider` as so:

```javascript
// App.js in a new react native project

import React from 'react'
import { Text, View } from 'react-native'
import { ModalProvider } from 'react-native-modalfy'

class App extends React.Component {
  render() {
    return (
      <ModalProvider>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
      </ModalProvider>
    )
  }
}

export default App
```

You can be working on a more complex application with a lot of providers already. No worries to have here: React Native Modalfy can work wherever you put it in your app root component's `render` function:

```javascript
// Existing project's root component

import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import { ModalProvider } from 'react-native-modalfy'

import Navigation from '@navigation'
import reduxStore from '@redux'
import { client } from '@graphql'

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={reduxStore}>
          <ModalProvider>
            <Navigation />
          </ModalProvider>
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App
```

If you run the previous examples, you'd get a crash from the library. That's because `ModalProvider` is missing a stack of modals: let's fix that.

## Create the stack

For this step we'll use `createModalStack` and pass its output to `ModalProvider` through the only prop the component accepts: `stack`. You can pass 2 arguments to `createModalStack`: **a modal configuration object** \(mandatory\) and the **default options object** \(optional\):

```javascript
import React from 'react'
import { ModalProvider } from 'react-native-modalfy'

import Navigation from '@navigation'
import { ErrorModal } from '@components/Modals'

const modalConfig = { ErrorModal }
const defaultOptions = { backdropOpacity: 0.6 }

const stack = createModalStack(modalConfig, defaultOptions)

class App extends React.Component {
  render() {
    return (
      <ModalProvider stack={stack}>
        <Navigation />
      </ModalProvider>
    )
  }
}

export default App
```

In this example, `ErrorModal` is a regular React component we're using as our 1st modal. React Native Modalfy will register it under the key `'ErrorModal'`. Given we're working with normal JavaScript objects here, you can change that key by simply changing the `modalConfig` key, ie: `const modalConfig = { MyCustomErrorModalName: ErrorModal }`.

{% hint style="info" %}
We only covered the simplest way of setting up your modal stack here. Feel free to check out the [createModalStack](../api/create-modal-stack.md) API reference to have more in-depth explanations of `createModalStack` mechanics.
{% endhint %}

From here you'll finally have a fully functional modal system, ready to be used and we'll see how in the following section.


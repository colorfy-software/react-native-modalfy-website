---
title: Opening & closing
---

# Opening & closing

As soon as your modal stack is setup, you can start using React Native Modalfy from wherever you want -in your code. You'll have 2 different ways to do so, depending on your context: either if you're inside a modal component or anywhere else in the code.

## From a modal component

Each component you'll put inside the `modalConfig` object you pass to `createModalStack` will receive a `modal` prop. From there, amongst other things we'll cover later \(if you can't wait check out [Modal prop](https://github.com/colorfy-software/react-native-modalfy-website/tree/ba1aacf00d590bad4c078b8a776e82da019b2201/guides/modal-prop.md) section\), you'll have access to `openModal` and `closeModal` functions. That's it!

```javascript
import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorModal extends React.Component {
  render() {
    return (
      <View>
        <Text>An error occured!</Text>
        <Button onPress={closeModal} title="OK" />
        <Button
          onPress={() => openModal('ErrorModal')}
          title="Let's open another modal!"
        />
      </View>
    )
  }
}

export default ErrorModal
```

You'll notice that in order to open a modal, React Native Modalfy uses the keys we put inside `modalConfig`. So if your config looks like:

```javascript
import { ErrorModal, MessageSentModal } from '@components/Modals'

const modalConfig = {
  NoConnection: ErrorModal,
  APITimeout: ErrorModal,
  TokenExpired: ErrorModal,
  MessageSent: MessageSentModal,
}
```

we can call `openModal('NoConnection')`, `openModal('MessageSent')`, etc.

## From anywhere in your code

This use case is probably more common thant the 1st one: you're in a screen component and you want to open a modal from there. To do so, we'll use `withModal` higher-order component to add the same `modal` we just saw to your component props:

```javascript
import React from 'react'
import { Button, Text, View } from 'react-native'

import { sendFakeMessage } from '@utils'

class Message extends React.Component {

  _sendMessage = () => {
    const { modal: { openModal } } = this.props
    sendFakeMessage()
      .then(() => openModal('MessageSent'))
      .catch(error => openModal('Error', { origin: 'message', error }))
  }

  render() {
    return (
      <View>
        <Text>Just press send!</Text>
        <Button onPress={this._sendMessage} title="Send" />
      </View>
    )
  }
}

export default Message
```

> Have a look at [Modal prop](https://github.com/colorfy-software/react-native-modalfy-website/tree/ba1aacf00d590bad4c078b8a776e82da019b2201/guides/modal-prop.md) API reference to see all the things you can perform with `openModal` and have a complete overview of what does `modal` bring with it.


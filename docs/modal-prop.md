---
id: modal-prop
title: Modal prop reference
sidebar_label: Modal prop
---

Every modal component you added in your modal stack (see [`createModalStack`](create-modal-stack.md)) receives the `modal` prop automatically:

* `this.props.modal`
  * `currentModal`: name of the current displayed modal if there's one,
  * `openModal`: open a specific modal,
  * `closeModal`: close a modal,
  * `getParams`: get a specific modal params with fallback,
  * `params`: current modal's params

Be aware that only components in you modal stack do receive this prop. If you're looking for how to access the `modal` prop from any component, head to [`withModal`](with-modal.md) HOC section.

## API reference

### `currentModal` - Get the currently displayed modal's name

```js
// type currentModal = ?ModalName
const { currentModal }  = this.props.modal
```

Returns the name of the current modal, `null` if none is currently displayed or if you're displaying several modals, the name of the one on top of the stack (currently shown to the user).

> Note: The "name of the current modal" refers to the key you used for that specific modal in the modal configuration object you used in [`createModalStack`](create-nodal-statck).

### `openModal` - Open a modal

```js
// type currentModal = (modalName: ModalName, params?: Object) => void
const { openModal } = this.props.modal
```

Use this to open any modal you've setup.

```js
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

### `closeModal` - close a modal

```js
// type closeModal = () => void,
const { closeModal }  = this.props.modal
```

This functions closes a modal. Depending on your modal stack configuration it will either: close the first modal in your stack or clear the whole stack (see [createModalStack](create-modal-stack.md)).

```js
import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorModal extends React.Component {
  render() {
    const { closeModal } = this.props.modal
    return (
      <View>
        <Text>An error occured!</Text>
        <Button onPress={closeModal} title="OK" />
      </View>
    )
  }
}

export default ErrorModal
```

### `getParams` - get a specific modal params

```js
// type getParams = (modalName: ModalName, fallback?: any) => any
const { getParams }  = this.props.modal
```

<!-- One of the two ways to access a modal params. This function lets you query the params you setup for a specific modal, with an optional fallback option if needed. The fallback - as well as `params` - can be any type of data (even though using objects might be the most common thing to do). -->

```js
import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorModal extends React.Component {
  render() {
    const { getParams } = this.props.modal
    const error = getParams("Error", { message: "An error occurred!" })
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    )
  }
}

export default ErrorModal
```

> Note: If you're inside a modal component, you'd probably want to use `params` instead. `getParams` shines when you want to access a specific modal params outside of its component.

### `params` - current modal's params

```js
// type params = any
const { params }  = this.props.modal
```

```js
import React from 'react'
import { Button, Text, View } from 'react-native'

class WelcomeBackModal extends React.Component {
  render() {
    const { closeModal, params } = this.props.modal
    return (
      <View>
        <Text>Welcome back {params.userName}!</Text>
        <Text>Just wanted to say hello =)</Text>
        <Button onPress={closeModal} title="Thanks!" />
      </View>
    )
  }
}

export default WelcomeBackModal
```

This is the other way to access a modal's params. Here you'll directly have access to the data you passed.

> Note: If you're outside a modal component (aka you used `withModal`) you won't have any `params` key in `this.props.modal`. Prefer using `getParams` if you really need that info.

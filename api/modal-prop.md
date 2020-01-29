---
title: Modal prop reference
---

# Modal prop

Every modal component you added in your modal stack \(see [`createModalStack`](create-modal-stack.md)\) receives the `modal` prop automatically:

* `this.props.modal`
  * `currentModal`: name of the current displayed modal if there's one
  * `openModal`: open a specific modal
  * `closeModal`: close a modal
  * `closeModals`: close every instance of a given modal
  * `closeAllModals`: close all opened modals
  * `addListener`: subscribe to updates to modal lifecycle
  * `removeAllListeners`: remove all modal listeners
  * `params`: current modal's params
  * `getParams`: get current's modal params with fallback

Be aware that only components in you modal stack do receive this prop. If you're looking for how to access the `modal` prop from any component, head to [`withModal`](with-modal.md)/[`useModal`](usemodal.md) sections.

## API reference

### `currentModal` - Get the currently displayed modal's name

```javascript
// type CurrentModal = ?ModalName
const { currentModal }  = this.props.modal
```

Returns the name of the current modal, `null` if none is currently displayed or if you're displaying several modals, the name of the one on top of the stack \(currently shown to the user\).

{% hint style="info" %}
Note: The "name of the current modal" refers to the key you used for that specific modal in the modal configuration object you used in [`createModalStack`](https://github.com/colorfy-software/react-native-modalfy-website/tree/ba1aacf00d590bad4c078b8a776e82da019b2201/api/create-nodal-statck/README.md).
{% endhint %}

### `openModal` - Open a modal

```javascript
// type OpenModal = (modalName: ModalName, params?: Object) => void
const { openModal } = this.props.modal
```

Use this to open any modal you've setup.

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

  // ...
}

export default Message
```

### `closeModal` - close a modal

```javascript
// type CloseModal = (modalName?: string) => void,
const { closeModal }  = this.props.modal
```

This function closes a modal. Depending on your modal stack configuration it will either: close the first modal in your stack or clear the whole stack \(see [createModalStack](create-modal-stack.md)\).

```javascript
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

### `closeModals` - close every instance of a given modal

```javascript
// type CloseModals = ModalName => void
const { closeModals }  = this.props.modal
```

React Native Modalfy workflow allows you to use the same modal component several times. Moreover, it also let you call and display the same modal several times.

Let's say that for some reason you have to display several error modals to your user, if they perform the action needed to fix everything: you don't want them to have to close all the modals one by one. Similarly, it'd be nice if you didn't have to programmatically close all of them: that's what `closeModals` is here for.

You'll just have to pass as an argument the name of the modal you'd like to close and all its instances will be deleted.

```javascript
import React from 'react'
import { Text, View } from 'react-native'

class ErrorModal extends React.Component {

  _onErrorsFixed = () => {
    // Will close every opened modal named 'Error'
    this.props.modal.closeModals('Error')
  }
  
  // ...
}

export default ErrorModal
```

### `closeAllModals` - close all opened modals

```javascript
// type CloseAllModal = () => void,
const { closeAllModals }  = this.props.modal
```

This function will close every single opened modal, clearing the whole stack.

```javascript
import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorModal extends React.Component {
  render() {
    const { closeAllModals } = this.props.modal
    return (
      <View>
        <Text>An error occured!</Text>
        <Button onPress={closeAllModals} title="OK" />
      </View>
    )
  }
}

export default ErrorModal
```

### `addListener` - subscribe to updates to modal lifecycle

```javascript
// type EventName = 'onAnimate'
// type EventCallback = (animatedValue?: AnimatedValue) => void
// type EventSubscription = { remove: () => boolean }

// type AddListener = (eventName: EventName, callback: EventCallback) => EventSubscription

const { addListener }  = this.props.modal
```

As the name suggest, `addListener` allows you to hook listeners to your current modal. For now, only `onAnimate` is supported as a valid `EventName`. If you need to perform any animation at the same time as your modal, this function is what you'll need.

```javascript
import React from 'react'
import { Text, View } from 'react-native'

class InfoModal extends React.Component {
  componentDidMount() {
    const { modal } = this.props
    this.modalListenerID = modal.addListener('onAnimate', this._handleAnimation)
  }

  componentWillUnmount() {
    if (this.modalListenerID) this.modalListenerID.remove()
  }

  // Will be called as soon as InfoModal is being animated
  _handleAnimation = animatedValue => {
    console.log(`✨ InfoModal animatedValue:`, animatedValue)
  }

  // ...
}

export default InfoModal
```

{% hint style="danger" %}
Note: `addListener` returns an `EventSubscription` object, in which you'll find a `remove()` method to use as soon as you'll no longer to listen to your modal updates.
{% endhint %}

{% hint style="info" %}
If you're looking for a specific listener `EventName` that's not implemented yet: feel free to [submit an issue on the repo](https://github.com/colorfy-software/react-native-modalfy/issues/new)
{% endhint %}

### `removeAllListeners` - remove all modal listeners

```javascript
// type RemoevAllListeners = () => void

const { removeAllListeners }  = this.props.modal
```

As seen in the previous section, `addListener` returns an object with a `remove()` function in it. However if you have a lot of listeners subscribed to the same modal component, calling `listenerA.remove()`, `listernerB.remove()`, `listernerC.remove()` isn't ideal. That's what `removeAllListeners` is here for: just call it once and all the modal listeners will be removed.

```javascript
import React from 'react'
import { Text, View } from 'react-native'

class InfoModal extends React.Component {
  componentDidMount() {
    this.props.modal.addListener('onAnimate', this._handleAnimation)
  }

  componentWillUnmount() {
    this.props.modal.removeAllListeners()
  }
  
   _handleAnimation = animatedValue => {
    console.log(`✨ InfoModal animatedValue:`, animatedValue)
  }

  // ...
}

export default InfoModal
```

### `params` - current modal's params

```javascript
// type Params = any
const { params }  = this.props.modal
```

```javascript
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

{% hint style="danger" %}
Note: If you're outside a modal component \(aka you used `withModal/useModal`\) you won't have any `params` key in `this.props.modal.`
{% endhint %}

### `getParams` - get current modal's params with fallback

```javascript
// type GetParams = fallback?: any => any
const { getParams }  = this.props.modal
```

```javascript
import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorModal extends React.Component {
  render() {
    const { getParams } = this.props.modal
    
    // If modal.params.error isn't a thing,
    // it will fallback to { message: "An error occurred!" }
    const error = getParams({ message: "An error occurred!" })
    return (
      <View>
        <Text>{error.message}</Text>
      </View>
    )
  }
}

export default ErrorModal
```

{% hint style="info" %}
Note: `getParams` is really useful when you're not sure if your params content will be there for any reason \(coming from an API, output of an async function, etc\). 
{% endhint %}


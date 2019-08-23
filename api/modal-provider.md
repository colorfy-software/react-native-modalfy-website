---
title: ModalProvider
---

# ModalProvider

This is the component you'll use to pass your modals stack to React Native Modalfy. Place `ModalProvider` at the root component of your app and put all the components you had inside of it.

```javascript
import React from 'react'
import { Text, View } from 'react-native'
import { ModalProvider } from 'react-native-modalfy'

class App extends React.Component {
  render() {
    return (
      <ModalProvider stack={/* put your stack here*/}>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
      </ModalProvider>
    )
  }
}

export default App
```

The only prop the component expects is `stack`, covered in [`createModalStack`](create-modal-stack.md).

{% hint style="info" %}
Note: `ModalProvider` wraps its `children` inside a `View` component so feel free to put as many siblings as you want inside of it \(no need to wrap them inside a `View/Fragment` before passing the content to `ModalProvider`\).
{% endhint %}


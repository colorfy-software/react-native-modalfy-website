---
id: params
title: Passing params
---

Thanks to React, we can reuse the same component over and over again. You might want to do the same thing with your modals: calling different modals (using different keys then), but rendering the same React component under the hood. Being able to know in which context that component was called is a major key to success, hence the `params`!

They are a two-step-use tool:

1. Passing params to a modal by putting them in an object as `modal.openModal` second parameter: `openModal('Error', { /* put params here */})`
2. Accessing the params in your modal component: `modal.params`.

```js
import React from 'react'
import { Button, Text, View } from 'react-native'

class ErrorModal extends React.Component {
  render() {
    const { modal: { closeModal, params } } = this.props
    return (
      <View>
        <Text>An error occured!</Text>
        <Text>{params.errorMessage}</Text>
        <Button onPress={closeModal} title="OK" />
      </View>
    )
  }
}

export default ErrorModal
```

You also have access to `modal.getParams` you can use as so: `modal.getParams(modalName, defaultValue)`, with the `defaultValue` being optional. However, you'll mainly use `params` given that you have it at your disposal directly inside your component props.

`modal.getParams` is mainly meant to be used inside a component you enhanced via `withModal`, so that you could have access to a modal params outside of its component.


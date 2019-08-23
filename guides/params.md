---
title: Passing params
---

# Passing params

Thanks to React, we can reuse the same component over and over again. You might want to do the same thing with your modals: calling different modals, but rendering the same React component under the hood. Being able to know in which context that component was called is a major key to success, hence the `params`!

They are a two-step-use tool:

1. Passing params to a modal by putting them in an object as `modal.openModal` second parameter: `openModal('Error', { /* put params here */})`
2. Accessing the params in your modal component: `modal.params`.

```javascript
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


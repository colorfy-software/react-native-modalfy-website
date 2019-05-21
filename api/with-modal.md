---
title: withModal
---

# withModal

`withModal` is a HOC \([Higher Order Component](https://reactjs.org/docs/higher-order-components.html)\) which passes the `modal` prop into a wrapped component. The function receives a component and outputs another one with the new prop. It's useful when you don't have access to the `modal` prop into the component, or don't want to pass it in case of a deeply nested child.

## API reference

```javascript
import React, { Component } from 'react'
import { Button, Text } from 'react-native'
import { withModal } from '@colorfy-software/react-native-modalfy'

class ProfileScreen extends Component {
  render() {
    return (
      <View>
        <Text>Welcome!</Text>
        <Button
          title="Edit"
          onPress={() => this.props.modal.openModal('EditProfile')}
        />
      </View>
    )
  }
}

export default withModal(ProfileScreen)
```

Using `withModal` will give you access to:

* `this.props.modal`
  * `currentModal`: name of the current displayed modal if there's one,
  * `openModal`: open a specific modal,
  * `closeModal`: close a modal,
  * `getParams`: get a specific modal params with fallback

as seen in [Modal prop](modal-prop.md#api-reference).


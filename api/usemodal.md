# useModal

Same as [`withModal`](with-modal.md) , `useModal` gives you access to the `modal` prop outside of a modal component. You'll use it if you want to take benefits or React's new hotness: [hooks](https://reactjs.org/blog/2019/02/06/react-v16.8.0.html)!

## API reference

```javascript
import React, { Component } from 'react'
import { Button, Text } from 'react-native'
import { useModal } from 'react-native-modalfy'

const ProfileScreen = () => {
  const { openModal } = useModal()
  return (
    <View>
      <Text>Welcome!</Text>
      <Button
        title="Edit"
        onPress={() => openModal('EditProfile')}
      />
    </View>
  )
}

export default ProfileScreen
```

Using `useModal` will give you access to an object containing:

* `this.props.modal`
  * `currentModal`: name of the current displayed modal if there's one
  * `openModal`: open a specific modal
  * `closeModal`: close a modal
  * `closeModals`: close every instance of a given modal
  * `closeAllModals`: close all opened modals

as seen in [Modal prop](modal-prop.md#api-reference).

{% hint style="danger" %}
Note: Hooks require React 16.8.0+ which means you'll need to be on React Native 0.59.0+ for `useModal`.
{% endhint %}


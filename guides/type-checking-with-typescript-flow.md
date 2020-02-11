# Type checking with TypeScript/Flow

React Native Modalfy has type definitions for both TypeScript & Flow projects. The library itself uses Flow types for now. So if you do too: you get type checking out of the box, you're good to go.   
For TypeScript projects, all the types you need are exposed by the library: let's see how to use them together.

## Type checking `ModalProvider` / `createModalStack` 

We don't need to do anything here: the library automatically covers these!

{% hint style="info" %}
Note: In `createModalStack` case, you can type the 2 arguments if you want to, through `ModalStackConfig` and `ModalStackOptions`.
{% endhint %}

## **Type checking the `modal` prop**

As we've seen in the [Opening & closing](usage.md) guide, there are 2 ways to access the `modal` prop: either from a modal component \(provided by the library itself\) or anywhere else in our code \(via `useModal`/`withModal` \).

### From a modal component

Given that this component is an _item_ of the _modal stack_, we'll need to type the `modal` prop with `ModalStackItemProp` as so:

```typescript
import React from 'react'
import { ModalStackItemProp } from 'react-native-modalfy'

interface Props {
  modal: ModalStackItemProp
}

class MyModal extends React.Component<Props> {
  // ...
}
```

{% hint style="info" %}
Note: If we decide to provide some [options](../api/create-modal-stack.md#options) from here through `static modalOptions,` we can also type check it: `static modalOptions: ModalStackOptions = {}.`
{% endhint %}

### From anywhere else in the code

This time, `ModalProp` is the interface we'll need:

```typescript
import React from 'react'
import { ModalProp, withModal } from 'react-native-modalfy'

interface Props {
  modal: ModalStackItemProp
}

const MyComponent = ({ modal }: Props): JSX.Element => (
  // ...
)

export default withModal(MyComponent)
```

{% hint style="info" %}
Note: There's no need to do this if you're using the `useModal` hook as the library already applies the correct type here.
{% endhint %}

{% hint style="info" %}
Note: We're using a different interface here as `withModal` do not give you access to the exact same `modal` prop as the one from within a modal component. Feel free to have a look at the [declaration file](https://github.com/colorfy-software/react-native-modalfy/blob/master/index.d.ts#L181-L207) if needed.
{% endhint %}

## Type checking `static modalOptions`

Besides the default modal options passed to `createModalStack()`, another way to define a modal's options is to used `static modalOptions` if you're inside a class. Its type is also provided as so:

```typescript
import React from 'react'
import { ModalStackItemProp, ModalStackOptions } from 'react-native-modalfy'

interface Props {
  modal: ModalStackItemProp
}

class MyModalComponent extends React.Component<Props> {
 static modalOptions: ModalStackOptions = {
    containerStyle: {
      borderWidth: 5,
      borderColor: 'rebeccapurple'
    },
  }
  
  // ...
}


export default MyModalComponent
```

{% hint style="info" %}
Note: In `createModalStack` case, you can type the 2 arguments if you want to, through `ModalStackConfig` and `ModalStackOptions`.
{% endhint %}


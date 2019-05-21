---
title: createModalStack
---

This is probably the core feature of the library (especially [transitionOptions](create-modal-stack.md#transitionoptions) 😉). `createModalStack` is a function that's going to turn your config into a usable stack.

## API Reference

```js
createModalStack(Config, Options)
```

### Config

The modal configs is an object in which you match a modal name with a modal config. Based on these configs, React Native Modalfy will know what to render and how.

```js
createModalStack({
  // Every component you'd want to add will look like this,
  // (with this `NoConnection`  being the string you'll use in `openModal`)
  NoConnection: {
    modal: NoConnectionModal,
    animateInConfig: {
      easing: Easing.inOut(Easing.exp),
      duration: 900,
    },
    animateOutConfig: {
      easing: Easing.inOut(Easing.exp),
      duration: 900,
    },
    position: 'bottom',
    transitionOptions: animatedValue => ({
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [vh, 0, 0],
          }),
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0.9],
          }),
        },
      ],
    }),
  },
});
```

> Note: If you want to use the default options, you can also use `createModalStack` as so: `createModalStack({ Error, Success })` for instance (with `Error`, `Success` being your modal components). Therefor, if you opt for the "detailed" version of the config object, all the keys are optional except `modal`.

#### animateInConfig

```flow
type animateInConfig = Animated.TimingAnimationConfig
```

Animation in configuration object (only `easing` and `duration`). Defaults to: `animateInConfig: { easing: Easing.inOut(Easing.exp), duration: 450 }`.


#### animateOutConfig

```flow
type animateOutConfig = Animated.TimingAnimationConfig
```

Animation out configuration object (only `easing` and `duration`). Defaults to: `animateOutConfig: { easing: Easing.inOut(Easing.exp), duration: 450 }`.

#### modal

```flow
type modal = React$Element<*>
```

React component that will be rendered when you'll open the modal.

#### position

```flow
type position = 'top' | 'center' | 'bottom'
```

Vertical alignment of the modal component. Defaults to `'center'`.

#### transitionOptions

```flow
type transitionOptions = Animated.AnimatedValue => {
  [key: string]:
    | Animated.AnimatedInterpolation
    | Array<{ [key: string]: Animated.AnimatedInterpolation }>,
}
```

Set transitions based on the animated value React Native Modalfy uses under the hood. Based on the animated value you'll receive you'll be able to setup custom interpolations that will be apply to your `modal` component.

Note that **the `inputRange` corresponds to the modal position in your stack**! `0` will translate to _"the modal is not rendered"_, `1` to _"this modal is on top of the stack/the only item in the stack"_, `2` to _"this modal is the 2nd item in the stack"_, etc. Coupled with [`animateInConfig`](create-modal-stack.md#animateinconfig) & [`animateOutConfig`](create-modal-stack.md#animateoutconfig), you really have a fine-grained control over your modals animation states! Check out [our examples](https://github.com/colorfy-software/react-native-modalfy/tree/master/examples) to see what's possible with React Native Modalfy.

> Note: The object returned by `transitionOptions` function must contain keys that work with `useNativeDriver: true`.

### Options

The modal options is an object in which you'll setup options that'll be share amongst items inside your modal config.

```js
  createModalStack(Config, {
    animateInConfig: {
      easing: Easing.inOut(Easing.exp),
      duration: 900,
    },
    animateOutConfig: {
      easing: Easing.inOut(Easing.exp),
      duration: 900,
    },
    backdropOpacity: 0.9,
    backButtonBehavior: 'clear',
    position: 'bottom',
    transitionOptions: animatedValue => ({
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [vh, 0, 0],
          }),
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, 1, 0.9],
          }),
        },
      ],
    }),
  },
)
```

[`animateInConfig`](create-modal-stack.md#animateinconfig), [`animateOutConfig`](create-modal-stack.md#animateoutconfig), [`position`](create-modal-stack.md#position), [`transitionOptions`](create-modal-stack.md#transitionoptions) are exactly the same as seen in [Config](create-modal-stack.md#config) section above.

#### backdropOpacity

```flow
type backdropOpacity = number
```

Number between `0` and `1` that defines the backdrop opacity. Defaults to `0.6`.

#### backButtonBehavior

```flow
type backButtonBehavior = 'clear' | 'pop' | 'none',
```

Behavior you'd like to see when a user pressed the back button on Android:
* `'clear'` means that you want the whole stack to be cleared, whatever the amount of modals opened
* `'pop'` means that you only want the modal at the top of the stack to be removed
*  `'none'` means that you don't want anything to happened, ie: user has to make an action inside that modal before you programmatically remove it via `closeModal`.

Defaults to `'pop'`.

> Note: Each key in this object has a default value and can be override either in the `modalConfig` object or directly in the modal component file through `static modalOptions`, ie: `static modalOptions = { position: 'bottom' }`.





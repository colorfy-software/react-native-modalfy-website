---
id: getting-started
title: Getting started
---

React Native Modalfy concept came from a need we felt at [colorfy](https://colorfy.me). Some of our apps required a very specific management of modals, with sometimes the need to display and hide a lot of them. Another requirement we had was to be able to fine-tune the animations.

Unfortunately after trying some great alternatives like [React Native's own Modal](https://facebook.github.io/react-native/docs/modal#docsNav) or [React Native Community's Modal](https://github.com/react-native-community/react-native-modal), they didn't really fit our needs; as we ended up with really long files for screens where the "modals logic" was getting complex.

That motivated us to opt for compile time focused API. After reading this documentation you'll realize that [React Navigation](https://reactnavigation.org) has been our main source of inspiration for it. If you think about it: modals are simply another form of "navigation between screens". React Navigation being the navigation library we use at colorfy (and incidentally one of the most used React Native navigation libraries), taking inspiration from there API looked like a good choice.

> Note: Given that React Native Modalfy uses the new React Context API added in React 16.3.0 ([but you should use v16.3.1+](https://twitter.com/dan_abramov/status/981333357874196482)), we'll require you to use at least `react-native@^0.55.0`.



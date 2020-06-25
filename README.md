# Getting started

React Native Modalfy concept came from a need we felt at [colorfy](https://colorfy.me). Some of our apps required a very specific use of modals, with sometimes the necessity of displaying and hiding a lot of them, quite often.

Unfortunately, after trying some great solutions like React Native's own [Modal](https://reactnative.dev/docs/modal) component or [@react-native-community/react-native-modal](https://github.com/react-native-community/react-native-modal), they didn't fit our needs; as we ended up with really long files where the modals logic was getting too complex. That motivated us to opt for a homemade "_compile time focused_" API. 

From that Modalfy promise took shape. We'll be working to allow you to do 3 things:

**1. Write your modals once, call them from anywhere in your app.  
2. Display several modals at once, stack as many as you like.  
3. Complete control over animations & transitions between each modal in the stack.**

After reading this documentation you'll realize that [React Navigation](https://reactnavigation.org) has been our main source of inspiration for this library. **So huge props to all the contributors for its simple yet performant API!**

If you think about it: modals are simply another form of "navigating between screens". React Navigation being the navigation library we use at colorfy \(and incidentally one of the most used in the React Native ecosystem\), taking inspiration from their API looked like a natural choice.

{% hint style="danger" %}
Given that React Native Modalfy uses the new React Context & Hooks APIs added respectively in React 16.3.0 and React 16.8.0, **we'll require you to use at least `react-native@^0.59.0`**\(that ships with React 16.8.3\).
{% endhint %}

## Try it now

If you want to experience the library by yourself and then come back afterwards, there is a demo app [available on Expo](https://snack.expo.io/@charles.m/react-native-modalfy)!

![](.gitbook/assets/screenshot-2020-05-13-at-12.21.45.png)




# Subscribing to events

Once in a while you might want to perform some actions along with the ones applied to your modals. One example could be animating the modal and something else at the same time. But in order to do so, you'd need to have access to the `animatedValue` React Native Modalfy uses under the hood. Use cases like this are the reason why we decided to provide a way to hook to the library internal events, thanks to `modal.addListener`.

...

{% hint style="warning" %}
`onAnimate` is the only event we support for now. If there is another one you'd like to have, please: [let us know](https://github.com/colorfy-software/react-native-modalfy/issues/new)!
{% endhint %}


# React Native Animated Otp Input

**@anhquan291/react-native-animated-otp-input** is a tiny library which provides an elegant UI with smooth Animation for the end user to input one time passcode (OTP). It also handles the input suggestion on iOS when the OTP SMS is received.

## Contributing
If you’d like to contribute, I encourage you to fork this repository and improve it for the community.


## Installation

**You need to have already installed the following packages:**

- [react-native-reanimated (>= 3.0.0)](https://docs.swmansion.com/react-native-reanimated/docs/installation)

Open a Terminal in your project's folder and install the library using `yarn`:

```sh
yarn add react-native-animated-otp-input
```

or with `npm`:

```sh
npm install react-native-animated-otp-input
```

## Usage

```jsx
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import OtpInput from 'react-native-animated-otp-input';

const OTPInput = () => {
  return (
    <View style={styles.container}>
      <OtpInput
        otpCount={5}
        autoFocus={false}
        onCodeFilled={(code: number) => {
          Alert.alert('Notification', `OTP is ${code}`);
        }}
        onCodeChanged={(codes: number) => {
          console.log({ codes });
        }}
      />
    </View>
  );
}
```

## Params

| Parameter               | required | Description                                                                                     |
| ----------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| pinCount                | YES      | Number of digits in the component, maxium is 6                                                  |
| containerStyle          | NO       | The style of the input field container                                                          |
| inputStyle              | NO       | The style of the input field                                                                    |
| focusColor              | NO       | The color the input field which is focused                                                      |
| autoFocus               | NO       | Auto activate the input and bring up the keyboard when component is loaded                      |
| onCodeChanged           | NO       | Callback when the digits are changed                                                            |
| onCodeFilled            | NO       | Callback when the last digit is entered                                                         |
| editable                | NO       | Set editable for inputs                                                                         |
| rest                    | NO       | The other text input props                                                                      |
| enteringAnimated        | NO       | The entering animation using reanimated layout                                                  |
| exitingAnimated         | NO       | The exiting animation using reanimated layout                                                   |
| rest                    | NO       | The other text input props                                                                      |


## Roadmap

- [ ] Add unit tests
- [ ] Add auto fill otp on Android


## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)

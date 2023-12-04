import { type StyleProp, type TextInputProps, type TextStyle, type ViewStyle } from 'react-native';
import { LinearTransition } from 'react-native-reanimated';

export interface IOtpInput extends TextInputProps {
  /**
   * Digits of pins in the OTP
   */
  otpCount: number;
  /**
   * Style of the input container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style of the input fields
   */
  inputStyle?: StyleProp<TextStyle>;
  /**
   * Style of text for input fields
   */
  textStyle?: StyleProp<TextStyle>;
  /**
   * Color of border color when focused
   */
  focusColor?: string;
  /**
   * If keyboard is automatically brought up when OTP is loaded.
   */
  autoFocus?: boolean;
  /**
   * Set editable for inputs
   */
  editable?: boolean;
  /**
   * Callback function
   * Trigger when all text input fields are fulfill
   */
  onCodeFilled?: (code: number) => void;
  /**
   * Callback function
   * Trigger when a field of the OTP is changed
   */
  onCodeChanged?: (codes: number) => void;
  /**
   * Entering animation using reanimated layout
   */
  enteringAnimated?: typeof LinearTransition;
  /**
   * Exiting animation using reanimated layout
   */
  exitingAnimated?: typeof LinearTransition;
}

export interface IOtpContext extends IOtpInput {
  inputRef: React.MutableRefObject<any[]>;
  otpValue: string[];
  onPress: () => void;
  onFocusNext: (value: string, index: number) => void;
  onFocusPrevious: (key: string, index: number) => void;
  setFocus: React.Dispatch<React.SetStateAction<number>>;
  setOtpValue: React.Dispatch<React.SetStateAction<string[]>>;
  focus: number;
  autoFocus: boolean;
  currentIndex: number;
  rest?: TextInputProps;
}

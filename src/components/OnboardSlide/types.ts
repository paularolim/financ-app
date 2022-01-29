export interface OnboardSlideProps {
  title: string;
  text: string;
  path: string;
  index?: string;
  onPressNext?: () => void;
  onSkip?: () => void;
  onDone?: () => void;
  textColor?: 'light' | 'dark';
}

export interface TextProps {
  color: 'light' | 'dark';
}

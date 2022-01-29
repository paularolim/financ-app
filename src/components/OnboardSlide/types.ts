export interface OnboardSlideProps {
  title: string;
  text: string;
  path: string;
  index: string;
  onPressNext: () => void;
  onSkip: () => void;
}

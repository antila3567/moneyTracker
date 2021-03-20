import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  primary: '#194868',
  secondary: '#FF615F',
  black: '#000',
  white: '#fff',
  gray: 'gray',
  lightGray: '#d3d3d3',
  blue: '#42B0FF',
  yellow: 'FFD573',
  blueLight: '#95A988',
  purple: '#8e44ad',
  red: '#FF0000',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  mainTitle: 50,
  title1: 30,
  title2: 22,
  title3: 16,
  title4: 14,
  text1: 30,
  text2: 20,
  text3: 16,
  text4: 14,

  width,
  height,
};

const appTheme = { COLORS, SIZES };

export default appTheme;

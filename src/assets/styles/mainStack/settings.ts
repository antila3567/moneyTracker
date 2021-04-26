import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  listItem: {
    marginTop: 10,
  },
  textIcon: {
    color: '#fff',
  },
  btnBg: {
    backgroundColor: '#000',
  },
  btnBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defText: {
    fontFamily: 'serif',
    color: '#000',
  },
  defText2: {
    fontFamily: 'serif',
    opacity: 0.6,
    color: '#000',
  },
  infoBlock: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export const darkTheme = StyleSheet.create({
  defText: {
    fontFamily: 'serif',
    color: '#d3d3d3',
  },
  defText2: {
    fontFamily: 'serif',
    opacity: 0.6,
    color: '#d3d3d3',
  },
});

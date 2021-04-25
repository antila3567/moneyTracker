import { StyleSheet, Dimensions } from 'react-native';

export const lightTheme = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: Dimensions.get('screen').width / 1.2,
    borderRadius: 16,
    paddingHorizontal: 40,
    paddingVertical: 30,
  },
  closeBtn: {
    textAlign: 'right',
    fontSize: 40,
  },
  card: {
    backgroundColor: '#F0FFFF',
    marginVertical: 10,
    padding: 20,
    elevation: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const darkTheme = StyleSheet.create({
  card: {
    backgroundColor: '#d3d3d3',
    marginVertical: 10,
    padding: 20,
    elevation: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

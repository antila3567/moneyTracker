import { StyleSheet } from 'react-native';

export const lightTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
    height: 70,
    elevation: 10,
  },
  calendar: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'#00BFFF',
    paddingHorizontal: 10,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: '#00BFFF',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#000',
    fontFamily: 'serif',
  },
  chooseDay: {
    fontSize: 17,
    marginLeft: 5,
    color: '#000',
    fontFamily: 'serif',
  },
  iconCalendar: {
    color: '#000',
  },
  blockIcons: {
    width: 30,
    height: 30,
  },
  blockList: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  blockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F0FFFF',
    width: 'auto',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    elevation: 5,
  },
  blockName: {
    marginLeft: 5,
    width: '80%',
    fontFamily: 'serif',
  },
  scrollWrap: {
    height: 130,
  },
  showBlock: {
    flexDirection: 'row',
  },
  arrowBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  arrowCircle: {
    backgroundColor: '#00BFFF',
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  arrowBtn: {
    width: 20,
    height: 15,
  },
  pieCircle: {
    position: 'absolute',
    top: '32%',
    width: '100%',
    paddingLeft: 5,
  },
  pieText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  flatList: {
    paddingHorizontal: 10,
  },
  flatCircle: {
    borderWidth: 1,
    marginTop: 10,
    width: 105,
    height: 105,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F0FFFF',
  },
  circleInfoBlock: {
    position: 'absolute',
  },
  flatTitle: {
    textAlign: 'center',
    width: 100,
    fontFamily: 'serif',
  },
  currency: {
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 12,
  },
});

export const darkTheme = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#141414',
    height: 70,
    elevation: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
    color: '#d3d3d3',
    fontFamily: 'serif',
  },
  calendar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 2,
    borderRightWidth: 0,
    borderColor: '#d3d3d3',
  },
  chooseDay: {
    fontSize: 18,
    marginLeft: 5,
    color: '#d3d3d3',
    fontFamily: 'serif',
  },
  iconCalendar: {
    color: '#d3d3d3',
  },
});

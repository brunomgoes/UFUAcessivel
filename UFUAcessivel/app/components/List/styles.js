import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 16,
    color: '$darkText',
  },
  separator: {
    marginLeft: 20,
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
  },
  checkBox: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
});

export default styles;
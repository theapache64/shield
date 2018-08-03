import { StyleSheet } from 'react-native';
import { materialColors } from '../../../../guerilla/res/MaterialColors';

export const styles = StyleSheet.create({
  vCounterNode: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    margin: 5,
    backgroundColor: materialColors.GREY[50],
    elevation: 4,
    borderRadius: 10
  },

  tCount: {
    fontWeight: 'bold',
    fontSize: 35
  }
});

import { StyleSheet } from 'react-native';
import { materialColors } from '../../../../guerilla/res/MaterialColors';

export const styles = StyleSheet.create({
  toGridMenuItem: {
    flex: 1,
    padding: 5
  },
  vGridMenuItem: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: materialColors.GREY[50],
    elevation: 4,
    borderRadius: 5
  }
});

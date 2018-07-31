import { StyleSheet } from 'react-native';
import { materialColors } from '../../guerilla/res/MaterialColors';

export const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: materialColors.GREEN[500],
    padding: 50
  },

  sliShield: {
    marginBottom: 10
  }
});

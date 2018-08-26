import { Guerilla } from '../../guerilla/Guerilla';
import { materialColors } from '../../guerilla/res/MaterialColors';
import { StyleSheet } from '../../guerilla/utils/StyleSheet';

export const styles = StyleSheet.create({
  vTab: {
    padding: 15,
    backgroundColor: materialColors.GREEN[500],
    borderBottomColor: materialColors.GREEN[500],
    borderBottomWidth: 5,
  },
  tTabTitle: {
    fontSize: 15,
    color: '#FFF'
  },
  vActiveTab: {
    borderBottomColor: materialColors.GREEN[700]
  }
});

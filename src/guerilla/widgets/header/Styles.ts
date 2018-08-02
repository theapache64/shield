import { StyleSheet } from 'react-native';
import { Guerilla } from '../../Guerilla';

const colorPrimary = Guerilla.getInstance().getColorPrimary();
export const styles = StyleSheet.create({
  vHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: 58,
    justifyContent: 'space-between',
    backgroundColor: colorPrimary
  },
  tTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Guerilla.getInstance().getHeaderTitleColor()
  },

  sliRight: {

  }
});

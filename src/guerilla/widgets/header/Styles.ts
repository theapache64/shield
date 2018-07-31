import { StyleSheet } from 'react-native';
import { Guerilla } from '../../Guerilla';

const guerilla = Guerilla.getInstance();

export const styles = StyleSheet.create({
  vHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    height: 58,
    justifyContent: 'space-between',
    backgroundColor: guerilla.getColorPrimary()
  },
  tTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: guerilla.getHeaderTitleColor()
  },

  sliRight: {
    color: 
  }
});

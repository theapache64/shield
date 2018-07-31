import { StyleSheet } from 'react-native';
import { Guerilla } from '../../Guerilla';

export const styles = StyleSheet.create({
  vHeader: {
    width: '100%',
    height: 58,
    backgroundColor: Guerilla.getInstance().getColorPrimary()
  }
});

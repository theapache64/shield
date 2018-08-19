import { NavigationActions, NavigationScreenProp, StackActions } from 'react-navigation';

export class StackActionsUtils {
  constructor() {
  }
  
  /**
   * Clear current stack and load given screenName to top
   * @param {string} screenName
   * @param {NavigationScreenProp<any>} navigation
   */
  static resetTo(screenName: string, navigation: NavigationScreenProp<any>) : void {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: screenName,
        }),
      ],
    });
    
    navigation.dispatch(resetAction);
  }
}

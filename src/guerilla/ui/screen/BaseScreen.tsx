import { BaseComponent } from '../BaseComponent';
import { NavigationScreenProp } from 'react-navigation';
import { Alert } from 'react-native';

/**
 * Extends all screens, contains no UI related actions. Just util functions.
 *
 * @export
 * @class BaseScreen
 * @extends {BaseComponent<P, S>}
 * @template P
 * @template S
 */
export interface BaseScreenProps<NP> {
  navigation: NavigationScreenProp<any, NP>;
}
export class BaseScreen<P= {}, S= {}, NP= {}>
  extends BaseComponent<P & BaseScreenProps<NP>, S> {

}

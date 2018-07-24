import { BaseComponent } from './BaseComponent';
import { NavigationScreenProp } from 'react-navigation';

/**
 * Extends all screens, contains no UI related actions. Just util functions.
 *
 * @export
 * @class BaseScreen
 * @extends {BaseComponent<P, S>}
 * @template P
 * @template S
 */
export interface BaseScreenProps {
  navigation: NavigationScreenProp<any, any>;
}
export class BaseScreen<P= {}, S= {}> extends BaseComponent<P & BaseScreenProps, S> {

}

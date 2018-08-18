import { PureComponent } from 'react';
import { Alert } from 'react-native';

/**
 * Extends all custom components
 *
 * @export
 * @class BaseComponent
 * @extends {PureComponent<P, S>}
 * @template P
 * @template S
 */
export class BaseComponent<P= {}, S= {}> extends PureComponent<P, S> {
  getProp<K extends keyof P>(key: K): any {
    return this.props[key];
  }

  showError(message: string): void {
    Alert.alert('Error', message);
  }

}

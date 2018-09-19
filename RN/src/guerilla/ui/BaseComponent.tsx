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

  protected getPropName = (name: keyof P): keyof P => name;
  protected getStateName = (name: keyof S): keyof S => name;

  protected changeState =
    <TKey extends keyof S>(stateKey: TKey, newValue: S[TKey]): void => {

      if (stateKey) {
        // @ts-ignore
        this.setState({
          [stateKey]: newValue,
        });
      } else {
        console.warn('called changeState but stateKey not passed');
      }

    }

}

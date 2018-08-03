import { PureComponent } from 'react';

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
}

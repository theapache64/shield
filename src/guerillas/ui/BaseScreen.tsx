import { BaseComponent } from './BaseComponent';

/**
 * Extends all screens, contains no UI related actions. Just util functions.
 *
 * @export
 * @class BaseScreen
 * @extends {BaseComponent<P, S>}
 * @template P
 * @template S
 */
export class BaseScreen<P= {}, S= {}> extends BaseComponent<P, S> {

}

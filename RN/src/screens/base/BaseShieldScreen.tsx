import { default as React } from 'react';
import { BaseStyledScreen } from '../../guerilla/ui/screen/BaseStyledScreen';

export abstract class BaseShieldScreen<P= {}, S= {}> extends BaseStyledScreen<P, S> {
  abstract renderShieldScreen(): React.ReactElement<any>;

  renderStyledScreen(): React.ReactElement<any> {
    return this.renderShieldScreen();
  }

}

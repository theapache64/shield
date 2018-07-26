import { default as React } from 'react';

import { materialColors } from '../../guerillas/res/MaterialColors';
import { BaseStyledScreen } from '../../guerillas/ui/screen/BaseStyledScreen';

export abstract class BaseShieldScreen<P= {}, S= {}> extends BaseStyledScreen<P, S> {
  primaryColor: string = materialColors.GREEN[500];
  primaryColorDark: string = materialColors.GREEN[700];
  abstract renderShieldScreen(): React.ReactElement<any>;

  renderStyledScreen(): React.ReactElement<any> {
    return this.renderShieldScreen();
  }

}

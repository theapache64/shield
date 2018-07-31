import { default as React } from 'react';
import { BaseNetworkScreen } from '../../guerilla/ui/screen/BaseNetworkScreen';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { BaseShieldScreen } from './BaseShieldScreen';
import { materialColors } from '../../guerilla/res/MaterialColors';

export abstract class BaseNetworkShieldScreen<NR extends BaseAPIResponse, P = {}, S= {}, NP= {}>
  extends BaseNetworkScreen<NR, P, S, NP> {
  primaryColor: string = materialColors.GREEN[500];
  primaryColorDark: string = materialColors.GREEN[700];

  renderNetworkScreen(response: NR) {
    return this.renderNetworkShieldScreen(response);
  }

  abstract renderNetworkShieldScreen(response: NR): any;
}

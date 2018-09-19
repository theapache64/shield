import { BaseNetworkScreen } from '../../guerilla/ui/screen/BaseNetworkScreen';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';
import { ReactElement } from 'react';

export abstract class BaseNetworkShieldScreen<NR extends BaseAPIResponse, P = {}, S= {}, NP= {}>
  extends BaseNetworkScreen<NR, P, S, NP> {

  renderNetworkScreen(response: NR): ReactElement<any> {
    return this.renderNetworkShieldScreen(response);
  }

  abstract renderNetworkShieldScreen(response: NR): any;
}

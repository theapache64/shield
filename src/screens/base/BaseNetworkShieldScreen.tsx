import { BaseNetworkScreen } from '../../guerilla/ui/screen/BaseNetworkScreen';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';

export abstract class BaseNetworkShieldScreen<NR extends BaseAPIResponse, P = {}, S= {}, NP= {}>
  extends BaseNetworkScreen<NR, P, S, NP> {

  renderNetworkScreen(response: NR) {
    return this.renderNetworkShieldScreen(response);
  }

  abstract renderNetworkShieldScreen(response: NR): any;
}

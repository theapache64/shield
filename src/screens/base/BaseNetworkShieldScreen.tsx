import { default as React, PureComponent } from 'react';
import { View, Text } from 'react-native';
import { BaseNetworkScreen } from '../../guerillas/ui/screen/BaseNetworkScreen';
import { BaseAPIResponse } from '../../guerillas/utils/api/BaseAPIResponse';
import { NetworkResponse } from '../../guerillas/utils/api/NetworkResponse';

export abstract class BaseNetworkShieldScreen<NR extends BaseAPIResponse, P = {}, S= {}, NP= {}>
  extends BaseNetworkScreen<NR, P, S, NP> {

  load(): void {
    throw new Error('Method not implemented.');
  }

  getResponseType() {
    throw new Error('Method not implemented.');
  }

  renderNetworkScreen(response: NR) {
    throw new Error('Method not implemented.');
  }

  getResponse(): NetworkResponse<NR> {
    throw new Error('Method not implemented.');
  }

  renderStyledScreen(): React.ReactElement<any> {
    throw new Error('Method not implemented.');
  }

  primaryColor: string;
  primaryColorDark: string;
}

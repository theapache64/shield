import { plainToClass } from 'class-transformer';
import { default as React, ReactElement } from 'react';
import { View } from 'react-native';

import { BaseAPIResponse } from '../../utils/api/BaseAPIResponse';
import { NetworkResponse } from '../../utils/api/NetworkResponse';
import { NetworkProgressOverlay } from '../NetworkProgressOverlay';
import { BaseStyledScreen } from './BaseStyledScreen';

export abstract class BaseNetworkScreen<NR extends BaseAPIResponse, P = {}, S= {}, NP= {}>
  extends BaseStyledScreen<P, S, NP> {
  renderStyledScreen(): ReactElement<any> {

    let response = null;

    if (this.getResponse().isSuccess && !this.getResponse().response.error) {
      // tslint:disable-next-line:max-line-length
      response = plainToClass<NR, Object>(this.getResponseType(), this.getResponse().response);
    }

    return (
      <View
        flex={1}
      >
        {this.renderNetworkScreen(response)}
        <NetworkProgressOverlay
          response={this.getResponse()}
          onRetryPressed={this.onRetry}
        />
      </View >
    );
  }

  onRetry = () => {
    this.load();
  }

  abstract load(): void;
  abstract getResponseType(): any;
  abstract renderNetworkScreen(response: NR): any;
  abstract getResponse(): NetworkResponse<NR>;
}

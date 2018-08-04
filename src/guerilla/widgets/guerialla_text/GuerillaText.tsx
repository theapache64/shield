import { default as React, PureComponent, ReactElement } from 'react';
import { Text, TextProps } from 'react-native';

type fonts = 'Roboto-Light' | 'Roboto-Regular' | 'Roboto-Medium';

interface Props extends TextProps {
  fontFamily?: fonts;
  color?: string;
}

interface States {

}

export class GuerillaText extends PureComponent<Props, States> {

  static defaultProps = {
    fontFamily: 'Roboto-Regular'
  };

  render(): ReactElement<any> {
    const { style, fontFamily, color, ...otherProps } = this.props;
    return (
      <Text
        {...otherProps}
        style={[{ fontFamily, color }, style]}
      >
        {this.props.children}
      </Text>
    );
  }
}

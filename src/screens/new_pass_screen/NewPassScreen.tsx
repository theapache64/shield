import { default as React, PureComponent, ReactElement } from 'react';
import { View } from 'react-native';
import { GuerillaText } from '../../guerilla/widgets/guerialla_text/GuerillaText';
import { connect } from 'react-redux';

interface Props {
  title: string;
}

interface States {

}

class NewPassScreen extends PureComponent<Props, States> {
  render(): ReactElement<Props> {
    return (
      <View>
        <GuerillaText>NewPassScreen</GuerillaText>
      </View >
    );
  }
}

export const newPassScreen = connect(
  mapStateToProps,
)(NewPassScreen);

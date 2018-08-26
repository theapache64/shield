import { default as React, PureComponent, ReactElement } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

import { Guard, Pass } from '../../../../api/responses/GetPassesResponse';
import { GuerillaText } from '../../../../guerilla/widgets/guerialla_text/GuerillaText';
import { styles } from './Styles';
import { PassNode } from './PassNode';
import { materialColors } from '../../../../guerilla/res/MaterialColors';

interface Props {
  pass: Pass;
  onRevokePassPressed: (pass: Pass) => void;
}

interface States {

}

export class IssuedPass extends PureComponent<Props, States> {

  onRevokePassPressed = () => {
    this.props.onRevokePassPressed(this.props.pass);
  }

  render(): ReactElement<any> {
    return (
      <View style={styles.vContainer}>

        {/* Guard Name */}
        <PassNode
          icon={'mustache'}
          text={this.props.pass.guard.name}
        />

        {/* Serial No */}
        <PassNode
          icon={'tag'}
          text={this.props.pass.id}
        />

        {/* Revoke Button */}
        <TouchableOpacity
          onPress={this.onRevokePassPressed}
        >
          <GuerillaText
            style={{ padding: 8, textAlign: 'center' }}
            color={materialColors.GREY[800]}
            fontFamily={'Roboto-Medium'}
          >
            REVOKE
          </GuerillaText>
        </TouchableOpacity>

      </View >
    );
  }
}

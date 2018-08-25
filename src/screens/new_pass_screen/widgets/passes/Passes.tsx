import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { UIPass } from './Pass';
import { Validateable } from '../../../../guerilla/utils/InputValidator';
import { Pass } from '../../../../models/Pass';

interface Props {
  count: number;
}

interface States {

}

export class Passes extends PureComponent<Props, States> implements Validateable {

  private passes: ReactElement<any>[];
  private uiPassRefs: React.RefObject<UIPass>[] = [];

  constructor(props: Props) {
    super(props);

    this.passes = this.genPasses();
  }

  getPasses(): Pass[] {
    const passes: Pass[] = [];
    for (const uiPass of this.uiPassRefs) {
      passes.push(uiPass.current.getPass());
    }
    return passes;
  }

  validate(): boolean {
    let isAllValid: boolean = true;
    for (const pass of this.uiPassRefs) {
      isAllValid = pass.current.validate() && isAllValid;
    }
    return isAllValid;
  }

  render(): ReactElement<any> {
    return (
      <View >
        {this.passes}
      </View >
    );
  }

  private genPasses = (): ReactElement<any>[] => {
    const passes: ReactElement<any>[] = [];
    for (let i = 0; i < this.props.count; i += 1) {
      const ref = React.createRef<UIPass>();
      passes.push(<UIPass ref={ref} key={i} />);
      this.uiPassRefs.push(ref);
    }
    return passes;
  }

}

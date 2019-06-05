import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    boxShadow: 'none',
  },
};

interface Props {
  value: string;
  onChange?: any;
  classes?: any;
}

class Filter extends React.Component<Props> {
  render() {
    const { value, onChange, classes } = this.props;
    return (
      <ToggleButtonGroup
        classes={{ root: classes.root }}
        exclusive
        value={value || 'ALL'}
        onChange={onChange}
      >
        <ToggleButton value={'ALL'}>ALL</ToggleButton>
        <ToggleButton value={'IN'}>IN</ToggleButton>
        <ToggleButton value={'OUT'}>OUT</ToggleButton>
      </ToggleButtonGroup>
    );
  }
}

export default withStyles(styles)(Filter);

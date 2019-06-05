import * as React from 'react';
import { withStyles } from '@material-ui/styles';
import Popover from '@material-ui/core/Popover';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Ledger as LedgerIcon,
  Key as KeyIcon,
  Keypair as KeypairIcon,
  AddCircle as AddIcon,
  Download as DownloadIcon,
  Token1 as TokenIcon,
  Book as BookIcon,
} from '@emeraldplatform/ui-icons';
import Button from '../common/Button';

const styles2 = (theme?: any) => ( {
  buttonText: {
    paddingRight: 0,
  },
});

interface Props {
  addToken?: any;
  generate?: any;
  importJson?: any;
  importLedger?: any;
  importPrivateKey?: any;
  importMnemonic?: any;
  createMnemonic?: any;
  addressBook?: any;
  t?: any;
  style?: any;
  classes?: any;
}

interface State {
  open: boolean;
  anchorEl?: any;
}

class DashboardMenu extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  openMenu = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleAddToken = () => {
    this.setState({
      open: false,
    });
    if (this.props.addToken) {
      this.props.addToken();
    }
  };

  render() {
    const {
      generate, importJson, importLedger, importPrivateKey, importMnemonic, createMnemonic, addressBook,
    } = this.props;
    const {
      style, classes,
    } = this.props;
    const t = this.props.t || ((str: string) => (str));
    return (
      <div style={ style }>
        <Button
          variant="text"
          primary
          onClick={this.openMenu}
          classes={{ text: classes.buttonText }}
          style={{hoverColor: 'transparent'}}
          label={t('list.popupMenuLabel')}
          icon={<AddIcon/>}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          onClose={this.handleRequestClose}
        >
          <List>
            <ListItem button onClick={importLedger}>
              <ListItemIcon>
                <LedgerIcon />
              </ListItemIcon>
              <ListItemText primary="Ledger Nano S" secondary="Use Ledger hardware key to manage signatures" />
            </ListItem>
            <ListItem button onClick={ generate }>
              <ListItemIcon>
                <KeypairIcon />
              </ListItemIcon>
              <ListItemText primary={t('add.generate.title')} secondary={t('add.generate.subtitle')} />
            </ListItem>
            <ListItem button onClick={ createMnemonic }>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary={t('add.mnemonic.title')} secondary={t('add.mnemonic.subtitle')} />
            </ListItem>
            <ListItem button onClick={ importJson }>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary={t('add.import.title')} secondary={t('add.import.subtitle')} />
            </ListItem>
            <ListItem button onClick={importPrivateKey}>
              <ListItemIcon>
                <KeyIcon />
              </ListItemIcon>
              <ListItemText primary={ t('add.importPrivateKey.title') } secondary={ t('add.importPrivateKey.subtitle') } />
            </ListItem>
            <ListItem button onClick={ importMnemonic }>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              <ListItemText primary={ t('add.importMnemonic.title') } secondary={ t('add.importMnemonic.subtitle') } />
            </ListItem>
            <ListItem button onClick={ this.handleAddToken }>
              <ListItemIcon>
                <TokenIcon />
              </ListItemIcon>
              <ListItemText primary={ t('add.token.title') } secondary={ t('add.token.subtitle') } />
            </ListItem>
            <ListItem button onClick={ addressBook }>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Address Book" secondary="View and edit contacts" />
            </ListItem>
          </List>
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles2)(DashboardMenu);

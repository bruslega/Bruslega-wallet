import { IApi } from '@emeraldwallet/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/styles';
import * as React from 'react';
import AddrListItem from './AddrListItem';
import { styles } from './styles';
import { LedgerAddress, Selectable } from './types';

interface Props {
  addresses?: Array<LedgerAddress & Selectable>;
  setSelectedAddr?: any;
  classes?: any;
  accounts?: any;
  blockchain?: string;
  api: IApi;
}

function isAlreadyAdded (addr: LedgerAddress, accounts: any) {
  let alreadyAdded = false;
  try {
    const addrId = (addr.address || '---R').toLowerCase();
    alreadyAdded = accounts.some((a) => a.get('id', '---L').toLowerCase() === addrId);
  } catch (e) {
  }
  return alreadyAdded;
}

/**
 * AddrList allows select only one address
 * */
class AddrList extends React.Component<Props> {
  public handleAddrSelection = (value) => {
    if (this.props.setSelectedAddr) {
        this.props.setSelectedAddr(value);
      }
  }

  public render () {
    const { classes, accounts, blockchain, api } = this.props;
    const addresses = this.props.addresses || [];

    return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.wideStyle}>ADDRESS</TableCell>
              <TableCell className={classes.mediumStyle}>HD PATH</TableCell>
              <TableCell className={classes.mediumStyle}>BALANCE</TableCell>
              <TableCell className={classes.shortStyle}>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { addresses.map((addr) => <AddrListItem
              onSelected={this.handleAddrSelection}
              key={addr.hdpath}
              alreadyAdded={isAlreadyAdded(addr, accounts)}
              addr={addr}
              blockchain={blockchain}
              api={api}
            />)}
          </TableBody>
        </Table>
      );
  }
}

export default withStyles(styles)(AddrList);

export enum Commands {
  GET_VERSION = 'get-version',
  GET_APP_SETTINGS = 'get-settings',
  SET_TERMS = 'terms',

  // Address Book
  GET_ADDR_BOOK_ITEMS = 'get-addr-book-items',
  ADD_ADDR_BOOK_ITEM = 'add-addr-book-item',
  DELETE_ADDR_BOOK_ITEM = 'delete-addr-book-item',

  // Transaction history
  PERSIST_TX_HISTORY = 'persist-tx-history',
  LOAD_TX_HISTORY = 'load-tx-history',

  ERC20_GET_BALANCE = 'get-erc20-balance',
  GET_GAS_PRICE = 'get-gas-price',

  ACCOUNT_IMPORT_ETHEREUM_JSON = 'import-json',
  ACCOUNT_IMPORT_PRIVATE_KEY = 'import-private-key',

  // Wallets
  VAULT_GET_WALLETS = 'get-vault-wallets',
  VAULT_CREATE_WALLET = 'create-wallet',
  VAULT_GET_WALLET = 'get-vault-wallet',
  VAULT_UPDATE_WALLET = 'vault-update-wallet'
}

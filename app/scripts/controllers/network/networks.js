'use strict'
var networks = function () {}

const {
  CLASSIC,
  CLASSIC_CODE,
  CALLISTO,
  CALLISTO_CODE,
  LEEP,
  LEEP_CODE,
  LEEPTEST,
  LEEPTEST_CODE,
} = require('./enums')

networks.networkList = {
  [CLASSIC]: {
    'chainId': CLASSIC_CODE,
    'ticker': 'ETC',
    blockExplorerTx: function (hash) { return `https://gastracker.io/tx/${hash}` },
    blockExplorerAddr: function (address) { return `https://gastracker.io/addr/${address}` },
    blockExplorerToken: function (token, address) { return `https://gastracker.io/token/${token}/${address}` },
    'service': 'Ethereum Commonwealth',
    'rpcUrl': 'https://etc-geth.0xinfra.com',
    'exchanges': ['ShapeShift'],
    'buyUrl': '',
  },
  [CALLISTO]: {
    'chainId': CALLISTO_CODE,
    'ticker': 'CLO',
    blockExplorerTx: function (hash) { return `https://explorer2.callisto.network/tx/${hash}` },
    blockExplorerAddr: function (address) { return `https://explorer2.callisto.network/addr/${address}` },
    // blockExplorerToken: function (token, address) { return `https://gastracker.io/token/${token}/${address}` },
    'service': 'Callisto Network',
    'rpcUrl': 'https://clo-geth.0xinfra.com',
    'exchanges': ['ShapeShift'],
    'buyUrl': '',
  },
  [LEEP]: {
    'chainId': LEEP_CODE,
    'ticker': 'LEEP',
    'blockExplorerTx': 'https://explorer.callisto.network/tx/[[txHash]]',
    'blockExplorerAddr': 'https://explorer.callisto.network/account/[[address]]',
    'blockExplorerToken': 'https://gastracker.io/token/[[tokenAddress]]/[[address]]',
    'service': 'Leep Network',
    'rpcUrl': 'https://clo-geth.0xinfra.com',
    'exchanges': ['ShapeShift'],
    'buyUrl': '',
  },
  [LEEPTEST]: {
    'chainId': LEEPTEST_CODE,
    'ticker': 'LEEP',
    'blockExplorerTx': 'https://explorer.callisto.network/tx/[[txHash]]',
    'blockExplorerAddr': 'https://explorer.callisto.network/account/[[address]]',
    'blockExplorerToken': 'https://gastracker.io/token/[[tokenAddress]]/[[address]]',
    'service': 'Leep Test Network',
    'rpcUrl': 'https://clo-geth.0xinfra.com',
    'exchanges': ['ShapeShift'],
    'buyUrl': '',
  },
}

module.exports = networks

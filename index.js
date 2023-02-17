export const networks = [
    {
      "chainId": 1,
      "name": "mainnet",
      "platform": "ethereum",
      "contract": "0x0000000000000000000000000000000000000000",
      "rpc": "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      "ws": "wss://mainnet.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      "symbol": "ETH",
      "decimals": 18
    },
    {
      "chainId": 4,
      "name": "rinkeby",
      "platform": "ethereum",
      "contract": "0xFa7B87c407D6c564D4393f7C5DdFD934aA85C61a",
      "rpc": "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      "ws": "wss://rinkeby.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      "symbol": "ETH",
      "decimals": 18,
      "isTestnet": true
    },
    {
      "chainId": 1337,
      "name": "ganache",
      "platform": "ethereum",
      "contract": "0x13c68Cd42632931c6c7fb746a288657f5B413251",
      "rpc": "http://host.docker.internal:7545",
      "ws": 'ws://127.0.0.1:7545',
      "symbol": "ETH",
      "decimals": 18,
      "isTestnet": true
    },
    {
      "chainId": 1313161554,
      "name": "Aurora Mainnet",
      "platform": "aurora",
      "contract": "0x0000000000000000000000000000000000000000",
      "rpc": "https://mainnet.aurora.dev",
      "ws": "wss://mainnet.aurora.dev/ws",
      "symbol": "ETH",
      "decimals": 18
    },
    {
        "chainId": 5,
        "name": "Goerli",
        "platform": "ethereum",
        "contract": "0xCDd35EcF5788CE9678A30A09d6E27bd4f1B41cd9",
        "rpc": "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        "ws": "wss://goerli.infura.io/ws/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        "symbol": "ETH",
        "decimals": 18,
        "isTestnet": true
    }
]
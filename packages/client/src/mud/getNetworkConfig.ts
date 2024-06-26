/*
 * Network specific configuration for the client.
 * By default connect to the anvil test network.
 *
 */

import { getBurnerPrivateKey } from "@latticexyz/common";
import { getChain, getWorldFromChainId } from "./utils";

export async function getNetworkConfig() {
  const params = new URLSearchParams(window.location.search);

  const chainId = Number(params.get("chainId") || params.get("chainid") || import.meta.env.VITE_CHAIN_ID || 31337);
  const chain = getChain(chainId);

  if (import.meta.env.PROD) {
    chain.rpcUrls = {
      default: {
        http: [
          "https://miner.testnet-chain.linfra.xyz"
        ],
        webSocket: [
          "wss://miner.testnet-chain.linfra.xyz"
        ]
      },
      public: {
        http: [
          "https://miner.testnet-chain.linfra.xyz"
        ],
        webSocket: [
          "wss://miner.testnet-chain.linfra.xyz"
        ]
      }
    }
  }

  /*
   * Get the address of the World. If you want to use a
   * different address than the one in worlds.json,
   * provide it as worldAddress in the query string.
   */
  const world = getWorldFromChainId(chain.id);

  const worldAddress = params.get("worldAddress") || world?.address;
  if (!worldAddress) {
    throw new Error(`No world address found for chain ${chainId}. Did you run \`mud deploy\`?`);
  }

  /*
   * MUD clients use events to synchronize the database, meaning
   * they need to look as far back as when the World was started.
   * The block number for the World start can be specified either
   * on the URL (as initialBlockNumber) or in the worlds.json
   * file. If neither has it, it starts at the first block, zero.
   */
  const initialBlockNumber = params.has("initialBlockNumber")
    ? Number(params.get("initialBlockNumber"))
    : world?.blockNumber ?? -1; // -1 will attempt to find the block number from RPC

  let indexerUrl = chain.indexerUrl;
  if (params.has("disableIndexer")) indexerUrl = undefined;

  return {
    provider: {
      chainId,
      jsonRpcUrl: params.get("rpc") ?? chain.rpcUrls.default.http[0],
      wsRpcUrl: params.get("wsRpc") ?? chain.rpcUrls.default.webSocket?.[0],
    },
    privateKey: getBurnerPrivateKey(),
    useBurner: params.has("useBurner"),
    chainId,
    faucetServiceUrl: params.get("faucet") ?? chain.faucetUrl,
    worldAddress,
    initialBlockNumber,
    disableCache: import.meta.env.PROD,
    chain,
    indexerUrl,
  };
}

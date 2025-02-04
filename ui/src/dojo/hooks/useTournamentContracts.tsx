import { useDojoSystem } from "@/dojo/hooks/useDojoSystem";
import { useDojo } from "@/context/dojo";
import { ChainId } from "@/dojo/config";

interface ContractAddresses {
  tournamentAddress: string;
}

export function useTournamentContracts(): ContractAddresses {
  const { selectedChainConfig } = useDojo();

  const isMainnet = selectedChainConfig.chainId === ChainId.SN_MAIN;

  const TOURNAMENT_SYSTEM_NAME = isMainnet ? "Tournament" : "tournament_mock";

  const tournamentAddress = useDojoSystem(
    TOURNAMENT_SYSTEM_NAME
  ).contractAddress;

  return {
    tournamentAddress,
  };
}

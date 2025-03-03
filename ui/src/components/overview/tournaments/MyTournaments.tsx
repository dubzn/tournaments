// import { useMemo } from "react";
// import {
//   useGetLiveTournamentsQuery,
//   useGetTournamentDetailsInListQuery,
// } from "@/dojo/hooks/useSdkQueries";
// import { bigintToHex, indexAddress } from "@/lib/utils";
// import { Tournament } from "@/generated/models.gen";
// import { TournamentCard } from "@/components/overview/TournamanentCard";
// import { addAddressPadding } from "starknet";
// import EmptyResults from "@/components/overview/tournaments/EmptyResults";
// import NoAccount from "@/components/overview/tournaments/NoAccount";
// import { useAccount } from "@starknet-react/core";
// import { useGetAccountTokenIds } from "@/dojo/hooks/useSqlQueries";

// interface MyTournamentsProps {
//   gameFilters: string[];
// }

const MyTournaments = () => {
  // const { address } = useAccount();

  // const queryAddress = useMemo(() => {
  //   if (!address || address === "0x0") return null;
  //   return indexAddress(address);
  // }, [address]);

  // const { data: ownedTokens } = useGetAccountTokenIds(queryAddress ?? "0x0", [
  //   "0x32ffff023e926e396e56e3a5cb3ce6ef68cb6f620e95dc38db12781fbc9425f",
  // ]);

  // const ownedTokenIds = useMemo(() => {
  //   return ownedTokens
  //     ?.map((token) => {
  //       const parts = token.token_id?.split(":");
  //       return parts?.[1] ?? null;
  //     })
  //     .filter(Boolean);
  // }, [ownedTokens]);

  // console.log(queryAddress, ownedTokenIds);

  // const hexTimestamp = useMemo(
  //   () => bigintToHex(BigInt(new Date().getTime()) / 1000n),
  //   []
  // );

  // const { entities: tournamentEntities } = useGetLiveTournamentsQuery(
  //   hexTimestamp,
  //   12,
  //   0
  // );

  // const formattedTournaments = (tournamentEntities ?? []).map(
  //   (tournament) => tournament?.Tournament! as unknown as Tournament
  // );

  // const filteredTournaments = useMemo(() => {
  //   if (gameFilters.length === 0) return formattedTournaments;

  //   return formattedTournaments.filter((tournament) => {
  //     // Get the game address from the tournament
  //     const tournamentGameAddress = addAddressPadding(
  //       tournament.game_config.address
  //     );

  //     // Check if any of the selected game filters match the tournament's game
  //     return gameFilters.some((gameAddress) => {
  //       return gameAddress === tournamentGameAddress;
  //     });
  //   });
  // }, [formattedTournaments, gameFilters]);

  // const prizeTournamentIds = filteredTournaments.map((tournament) =>
  //   addAddressPadding(bigintToHex(BigInt(tournament.id)))
  // );

  // useGetTournamentDetailsInListQuery(prizeTournamentIds);

  return (
    <>
      {/* {address ? (
        filteredTournaments.length > 0 ? (
          filteredTournaments.map((tournament, index) => (
            <TournamentCard
              key={index}
              tournament={tournament}
              index={index}
              status="live"
              prizes={[]}
              entryCount={0}
            />
          ))
        ) : (
          <EmptyResults gameFilters={gameFilters} />
        )
      ) : (
        <NoAccount />
      )} */}
    </>
  );
};

export default MyTournaments;

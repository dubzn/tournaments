import { CONTROLLER } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { getGames } from "@/assets/games";
import { useConnectToSelectedChain } from "@/dojo/hooks/useChain";

const NoAccount = () => {
  const { connect } = useConnectToSelectedChain();
  return (
    <div className="col-span-3 flex flex-col items-center justify-center gap-6 py-20">
      <div className="flex flex-col items-center gap-4">
        <span className="text-retro-green-dark opacity-50 w-20 h-20">
          <CONTROLLER />
        </span>
        <h3 className="text-2xl font-astronaut text-center">
          No Account Connected
        </h3>
        <p className="text-retro-green-dark text-center max-w-md">
          {"Connect your account to view your tournaments."}
        </p>
      </div>

      <Button onClick={() => connect()} className="flex items-center gap-2">
        Connect Account
      </Button>
    </div>
  );
};

export default NoAccount;

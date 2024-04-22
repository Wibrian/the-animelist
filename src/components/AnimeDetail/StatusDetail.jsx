import { ChartBar, Trophy, TrendUp, UsersThree } from "@phosphor-icons/react/dist/ssr";
import StatusData from "./StatusData";

export default function StatusDetail({ anime }) {
  return (
    <div className="stats stats-vertical md:stats-horizontal shadow bg-neutral rounded">
      <StatusData
        icon={<ChartBar size={32} weight="bold" />}
        statTitle={"SCORE"}
        statValue={anime.data?.score === null ? "N/A" : anime.data.score}
        statDesc={`By ${anime.data?.scored_by === null ? "N/A" : anime.data.scored_by.toLocaleString()} Users`}
      />
      <StatusData
        icon={<Trophy size={32} weight="bold" />}
        statTitle={"RANKED"}
        statValue={`#${anime.data?.rank === null ? "N/A" : anime.data?.rank.toLocaleString()}`}
        statDesc={"Top Anime"}
      />
      <StatusData
        icon={<TrendUp size={32} weight="bold" />}
        statTitle={"POPULARITY"}
        statValue={`#${anime.data.popularity.toLocaleString()}`}
        statDesc={"Top Popular"}
      />
      <StatusData
        icon={<UsersThree size={32} weight="bold" />}
        statTitle={"MEMBERS"}
        statValue={`${anime.data.members.toLocaleString()}`}
        statDesc={"Added To List"}
      />
    </div>
  );
}

import { FC, Fragment } from "react";
import { ItemKind } from "../enums/ItemKind";
import { Channel } from "../interfaces/Channel";
import { Item } from "../interfaces/Item";
import { PLaylist } from "../interfaces/Playlist";
import { Video } from "../interfaces/Video";
import ChannelItem from "./ChannelItem";
import PlaylistItem from "./PlaylistItem";
import VideoItem from "./VideoItem";

interface ResultListProps {
  results: Item[];
}

const ResultList: FC<ResultListProps> = ({ results }) => {
  const renderResults = (): JSX.Element[] =>
    results.map((item) => {
      switch (item.id.kind) {
        case ItemKind.video:
          return <VideoItem key={item.id.videoId} video={item as Video} />;
        case ItemKind.channel:
          return (
            <ChannelItem key={item.id.channelId} channel={item as Channel} />
          );
        case ItemKind.playlist:
          return (
            <PlaylistItem
              key={item.id.playlistId}
              playlist={item as PLaylist}
            />
          );

        default:
          return <Fragment />;
      }
    });

  return <div>{renderResults()}</div>;
};

export default ResultList;

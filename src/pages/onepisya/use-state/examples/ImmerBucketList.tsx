/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-27 02:53:49
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:37:06
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-state/examples/ImmerBucketList.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useImmer } from 'use-immer';

// let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

type Artwork = {
  id: number;
  title: string;
  seen: boolean;
};

function ItemList({
  artworks,
  onToggle,
}: {
  artworks: Artwork[];
  onToggle: (artworkId: Artwork['id'], nextSeen: Artwork['seen']) => void;
}) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function BucketList() {
  const [list, updateList] = useImmer(initialList);

  function handleToggle(artworkId: Artwork['id'], nextSeen: Artwork['seen']) {
    updateList((draft) => {
      const artwork: Artwork | undefined = draft.find((a) => a.id === artworkId);
      if (artwork) artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={list} onToggle={handleToggle} />
    </>
  );
}

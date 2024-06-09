/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 03:37:32
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:30:48
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/map/index.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { useEffect, useRef, useState } from 'react';
import { MapWidget } from './map-widget';

function Map({ zoomLevel }: { zoomLevel: number }) {
  const containerRef: React.MutableRefObject<HTMLDivElement | string | null> = useRef(null);
  const mapRef: React.MutableRefObject<MapWidget | null> = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current as HTMLDivElement);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return (
    <div
      style={{ width: 200, height: 200 }}
      ref={containerRef as React.MutableRefObject<HTMLDivElement>}
    />
  );
}

export default function App() {
  const [zoomLevel, setZoomLevel] = useState(0);
  const plus = () => {
    if (zoomLevel < 20) {
      setZoomLevel(zoomLevel + 1);
    } else {
      alert('zoom level cannot be more than 20');
    }
  };
  const minus = () => {
    if (zoomLevel > 0) {
      setZoomLevel(zoomLevel - 1);
    } else {
      alert('zoom level cannot be less than 0');
    }
  };
  return (
    <>
      Zoom level: {zoomLevel}x
      <button type="button" onClick={plus}>
        +
      </button>
      <button type="button" onClick={minus}>
        -
      </button>
      <hr />
      <Map zoomLevel={zoomLevel} />
    </>
  );
}

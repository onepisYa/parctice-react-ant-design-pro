/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-05-30 03:40:53
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-05-30 03:47:17
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/use-effect/examples/map/map-widget.ts
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export class MapWidget {
  map: L.Map;
  constructor(domNode: string | HTMLElement) {
    this.map = L.map(domNode, {
      zoomControl: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false,
      scrollWheelZoom: false,
      zoomAnimation: false,
      touchZoom: false,
      zoomSnap: 0.1,
    });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(this.map);
    this.map.setView([0, 0], 0);
  }
  setZoom(level: number) {
    this.map.setZoom(level);
  }
}

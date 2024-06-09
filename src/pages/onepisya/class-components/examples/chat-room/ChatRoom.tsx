/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 16:49:39
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:23:33
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/chat-room/ChatRoom.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Component } from 'react';
import type { Connection } from './chat';
import { createConnection } from './chat';

export type ChatRoomProps = { roomId: string };
export type ChatRoomState = { serverUrl: string; connection: Connection | null; roomId: string };

export default class ChatRoom extends Component<ChatRoomProps, ChatRoomState> {
  state = {
    serverUrl: 'https://localhost:1234',
    connection: null,
    roomId: '',
  };
  connection: Connection | null = createConnection(this.state.serverUrl, this.props.roomId);

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps: ChatRoomProps, prevState: ChatRoomState) {
    if (this.props.roomId !== prevProps.roomId || this.state.serverUrl !== prevState.serverUrl) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(this.state.serverUrl, this.props.roomId);
    this.connection.connect();
  }

  destroyConnection() {
    if (this.connection) {
      this.connection.disconnect();
    }
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={this.state.serverUrl}
            onChange={(e) => {
              this.setState({
                serverUrl: e.target.value,
              });
            }}
          />
        </label>
        <h1>欢迎来到 {this.props.roomId} 聊天室！</h1>
      </>
    );
  }
}

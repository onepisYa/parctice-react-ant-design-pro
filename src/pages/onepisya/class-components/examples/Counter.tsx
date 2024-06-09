/*
 * Copyright (c) 2024 by onepisYa pis1@qq.com , All Rights Reserved.
 * @Date: 2024-06-09 16:41:00
 * @LastEditors: onepisYa pis1@qq.com
 * @LastEditTime: 2024-06-09 19:21:09
 * @FilePath: /parctice-react-ant-design-pro/src/pages/onepisya/class-components/examples/Counter.tsx
 * 路漫漫其修远兮，吾将上下而求索。
 * @Description:
 */
import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'Taylor',
    age: 42,
  };

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    return (
      <>
        <div className="space-y-3">
          <input value={this.state.name} className="block" onChange={this.handleNameChange} />
          <button type="button" onClick={this.handleAgeChange}>
            Increment age
          </button>
          <p>
            Hello, {this.state.name}. You are {this.state.age}.
          </p>
        </div>
      </>
    );
  }
}

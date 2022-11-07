import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  //初始化用户数组
  state = { users: [] };
  //父组件定义的 方法，获取子组件传递过来的
  saveUsers = (users) => {
    //将获取到的数据保存
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <Search getUsers={this.saveUsers} />
        <List usersArr={users} />
      </div>
    );
  }
}

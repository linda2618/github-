import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";

export default class App extends Component {
  //初始化状态
  state = {
    users: [], //users初始化为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: false, //存储请求相关的错误信息
  };
  //更新APP的state
  updateAppState = (stateObj) => {
    this.setState(stateObj);
  };

  //父组件定义的 方法，获取子组件传递过来的
  // saveUsers = (users) => {
  //   //将获取到的数据保存
  //   this.setState({ users });
  // };
  // changeIsFirst = () => {

  // },
  // changeIsLoading = () => {

  // },
  // saveErr = () => {

  // }

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        {/* <Search getUsers={this.saveUsers} /> */}
        <List {...this.state} />
        {/* <List usersArr={users} /> */}
      </div>
    );
  }
}

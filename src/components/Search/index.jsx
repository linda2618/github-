import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    //获取用户的输入(来纳许解构赋值+ 重命名)
    const {
      keyWordElement: { value: keyWord },
    } = this;
    //((1).发送请求前通知App更新状态
    this.props.updateAppState({ isFirst: false, isLoading: true });
    // console.log(keyWord);
    //发送网络请求
    axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(
      (res) => {
        // console.log(res.data.items);
        // res.data.items.map(usersObj => {
        //   this.props.getUsers(usersObj)
        // })

        //((2).请求成功后 通知App更新状态
        this.props.updateAppState({
          isLoading: false,
          users: res.data.items,
        });
        // this.props.getUsers(res.data.items)
      },
      (error) => {
        this.props.updateAppState({ isLoading: false, err: error.message });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => {
              this.keyWordElement = c;
            }}
            type="text"
            placeholder="输入关键字点击搜索"
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

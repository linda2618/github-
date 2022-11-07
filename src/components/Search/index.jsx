import React, { Component } from "react";
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    //获取用户的输入(来纳许解构赋值+ 重命名)
    const {keyWordElement: {value: keyWord}} = this
    console.log(keyWord);
    //发送网络请求
    axios.get(`http://localhost:3000/api/search/users?q=${keyWord}`).then(res => {
      // console.log(res.data.items);
      // res.data.items.map(usersObj => {
      //   this.props.getUsers(usersObj)
      // })
      this.props.getUsers(res.data.items)
    },
    error => {
      console.log('失败了！',error);
    }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => {this.keyWordElement = c}} type="text" placeholder="输入关键字点击搜索" />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}

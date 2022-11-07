import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { usersArr } = this.props;
    return (
      <div className="row">
        {usersArr.map((usersObj) => {
          return (
            <div className="card" key={usersObj.id}>
              <a
                href={usersObj.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="avatar"
                  src={usersObj.avatar_url}
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{usersObj.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

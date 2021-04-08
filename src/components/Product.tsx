import React, { Component } from 'react'

interface ProductProps {
  id: number;
  title: string;
  description: string;
  url: string;
  votes: number;
  submittedAvatarUrl: string;
  productImageUrl: string;
  onVote: Function;
}

export default class Product extends Component<ProductProps> {

  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} alt="Code" />
        </div>
        <div className="middle aligned content">
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {this.props.votes}
          </div>
          <div className="description">
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="extra">
            <span>Publié par: </span>
            <img src={this.props.submittedAvatarUrl} alt="Avatar" className="ui avatar image" />
          </div>
        </div>
      </div>
    )
  }
}

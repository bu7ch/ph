import React, { Component } from 'react'
import Product from './Product'
import * as Data from '../data'

interface ProductListState {
  products: any[]
}

export default class ProductList extends Component<{}, ProductListState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.setState({
      products: Data.products
    })
  }

  handleProductUpVote = (productId: number) => {
    const nextProducts = this.state.products.map(product => {
      if (product.id === productId) {
        return Object.assign({}, product, { votes: product.votes + 1 })
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts
    })
  }

  render() {
    const products = this.state.products
      .sort((a, b) => b.votes - a.votes)
      .map(product => {
        return <Product
          key={`product-${product.id}`}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submittedAvatarUrl={product.submittedAvatarUrl}
          productImageUrl={product.productImageUrl}
          onVote={this.handleProductUpVote} />
      })

    return (
      <div className="ui unstackable items">
        {products}
      </div>
    )
  }
}

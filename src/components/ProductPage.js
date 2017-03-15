import React, { Component } from 'react'

export default class ProductPage extends Component {
  render() {
    const params = { ...this.props.match.params }

    return(
      <div className="row">
        <div className="col-md-6">
          <img src="http://lorempixel.com/512/307/nature/"></img>
        </div>
        <div className="col-md-6">
          <h3>{params.productName}</h3>
          <a href="product ">Add to cart</a>
          <hr/>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada elit et purus suscipit accumsan. Vestibulum vitae mi orci. Nam ullamcorper lorem fermentum metus ornare, quis elementum augue efficitur. Proin elementum, nisl nec congue rhoncus, dolor ante malesuada risus, nec laoreet nulla lectus eget magna. In mauris neque, convallis vitae neque ac, semper consequat enim. Sed bibendum leo vel dolor pretium, eget faucibus eros molestie. Praesent rutrum aliquam nibh. Vivamus eu eros vitae justo consequat auctor et vel arcu.
          </div>
        </div>
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
          <form className="" action="index " method="post">
            <div className="">
              <label>Upload file</label>
              <br/>
              <input type="file" name="" value=""></input>
            </div>
            <div className="">
              <label>Description</label>
              <br/>
              <textarea type="file" name="" value="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada elit et purus suscipit accumsan. Vestibulum vitae mi orci. Nam ullamcorper lorem fermentum metus ornare, quis elementum augue efficitur. Proin elementum, nisl nec congue rhoncus, dolor ante malesuada risus, nec laoreet nulla lectus eget magna. In mauris neque, convallis vitae neque ac, semper consequat enim. Sed bibendum leo vel dolor pretium, eget faucibus eros molestie. Praesent rutrum aliquam nibh. Vivamus eu eros vitae justo consequat auctor et vel arcu.</textarea>
            </div>
            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

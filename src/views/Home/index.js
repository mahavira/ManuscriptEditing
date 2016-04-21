import React, {Component} from 'react'
import style from './index.scss'
import LeftSide from './LeftSide/index'
import RightSide from './RightSide/index'
import Middle from './Middle/index'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {style: {}, text: '正文...'}
  }

  handleChange(text) {
    console.log(0)
    this.setState({text: text});
  }

  //插入
  addComponent(component) {
    this.setState({text: this.state.text + component.content});
  }

  render() {
    return (
      <section className={style.container}>
        <LeftSide addComponent={this.addComponent.bind(this)}/>
        <Middle text={this.state.text} handleChange={this.handleChange.bind(this)}/>
        <RightSide/>
      </section>
    )
  }
}

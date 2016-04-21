/**
 * Created by linmingxiong on 16/4/20.
 */
import React, {Component} from 'react'
import style from './index'
import AppBar from 'material-ui/lib/app-bar';

export default class Header extends Component {
  render() {
    return (
      <AppBar
        id="header"
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}

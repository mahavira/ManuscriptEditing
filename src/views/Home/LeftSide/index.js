import React, {Component} from 'react'
import style from './index.scss'
import api from '../../../api';
import RaisedButton from 'material-ui/lib/raised-button';
import $ from 'jquery'
require('perfect-scrollbar/jquery')($);

const css = {
  RaisedButton: {
    color: '#fff',
    minWidth: 60,
    marginRight: 5,
    marginBottom: 5
  },
  RaisedButtonLabel: {}
}
export default class LeftSide extends Component {
  constructor() {
    super()
    this.state = {
      components: [],
      isLoading: false
    }
    this.mounted = true;
  }

  get parameter() {
    return {page: 1}
  }

  loadComponent() {
    if (this.state.isLoading) {
      return;
    }
    this.setState({isLoading: true})

    api.get('components', this.parameter).then((res)=> {
      if (!this.mounted)
        return false;
      if (Object.prototype.toString.call(res) == "[object String]")
        res = JSON.parse(res);
      this.setState({isLoading: false, components: res})
      $('.left-side .scroll-content').perfectScrollbar('update');
    }, ()=> {
      if (!this.mounted)
        return false;
      this.setState({isLoading: false})
    })
  }

  componentDidMount() {
    this.loadComponent()

    var resize= ()=>{
      var height = $(window).height() - $('#header').outerHeight() - $('.left-side .tab-content .header').outerHeight();
      $('.left-side .scroll-content').height(height).perfectScrollbar({suppressScrollX: false});
    }
    $(window).resize(resize)
    resize()
  }

  render() {
    return (
      <div className={style['left-side']}>
        <div className={style['left-nav']}>
          <ul>
            <li className={style.active}><a href="javascript:;">组件</a></li>
            <li><a href="javascript:;">模板</a></li>
            <li><a href="javascript:;">收藏夹</a></li>
            <li><a href="javascript:;">剪贴板</a></li>
          </ul>
        </div>
        <div className={style['tab-content']}>
          <div className={style.header}>
            <RaisedButton primary={true} label="标题" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="提示" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="分隔" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="卡片" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="关注" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="微名片" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="中国风" style={css.RaisedButton}/>
            <RaisedButton primary={true} label="布局" style={css.RaisedButton}/>
          </div>
          <div className={style.components+' scroll-content'}>
            <ul className={style.componentsBox}>
              {this.state.components.map((component, k)=>
                <li key={k} className={style.item} name={component.name}
                    dangerouslySetInnerHTML={{__html: component.content}}
                    onClick={()=>this.props.addComponent(component)}>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


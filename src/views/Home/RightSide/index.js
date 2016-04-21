import React, {Component} from 'react'
import style from './index.scss'
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AutoComplete from 'material-ui/lib/auto-complete';
import $ from 'jquery'
require('perfect-scrollbar/jquery')($);

export default class RightSide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ['12345', '23456', '34567']
    };
  }

  componentDidMount() {
    var resize= ()=>{
      var height = $(window).height() - $('#header').outerHeight() - 55 * 2;
      $('.right-side .scroll-content').height(height).perfectScrollbar({suppressScrollX: false});
    }
    $(window).resize(resize)
    resize()
  }

  render() {
    return (
      <div className={style['right-side']}>
        <Tabs initialSelectedIndex={0}>
          <Tab label="我的图库">
          </Tab>
          <Tab label="系统图库">
          </Tab>
          <Tab
            label="网络图库">
          </Tab>
        </Tabs>

        <div className={style['tab-content']}>
          <AutoComplete
            hintText="关键词"
            fullWidth={true}
            dataSource={this.state.dataSource}
          />
          <div className='scroll-content'>
            <ul>
              <li><img src="./public/1744604790.jpg"/></li>
              <li><img src="./public/daren-en.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-en.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-na.jpg"/></li>
              <li><img src="./public/daren-vi.jpg"/></li>
              <li><img src="./public/3469543.jpg"/></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

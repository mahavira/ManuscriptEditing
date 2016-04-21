import React, {Component} from 'react'
import style from './index.scss'

import MediumEditor from 'medium-editor'
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import $ from 'jquery'
require('perfect-scrollbar/jquery')($);
const css = {
  marginRight: 20
};
export default class RightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {style: {}}
  }

  componentDidMount() {
    this.medium = new MediumEditor(document.getElementById('editor'), {});
    this.medium.subscribe('editableInput', function (e) {

    });



    var resize= ()=>{
      var height = $(window).height() - $('#header').outerHeight() - 15;
      $('.middle .scroll-content').height(height).perfectScrollbar({suppressScrollX: false});
    }
    $(window).resize(resize)
    resize()
  }

  render() {
    return (
      <div className={style.middle}>
        <div className='scroll-content'>
          <div className={style.editor}>
            <div id="editor" dangerouslySetInnerHTML={{ __html: this.props.text} }></div>
          </div>
        </div>
        <div className={style.more}>
          <FloatingActionButton style={css}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </div>
    )
  }
}



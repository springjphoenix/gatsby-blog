import React from "react"
import styled, { injectGlobal } from 'styled-components';

import SideBar from '../components/LeftCol';
import Footer from '../components/Footer';

require('prismjs/themes/prism-solarizedlight.css')

injectGlobal`
  @font-face {
    font-family: 'iconfont';  /* project id 410056 */
    src: url('/fonts/iconfont.eot');
    src: url('/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
    url('/fonts/iconfont.woff') format('woff'),
    url('/fonts/iconfont.ttf') format('truetype'),
    url('/fonts/iconfont.svg#iconfont') format('svg');
  }
  .iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    margin: 0;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: #eaeaea;
    color: #1a1a1a;
    font-family: lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.75;
  }

  ul {
    list-style-type: none;
  }

  a {
    background: transparent;
    text-decoration: none;
    color: #08c;
  }
  * {
    box-sizing: border-box;
  }
`

const RightCol = styled.div`
    position: absolute;
    right: 0;
    min-height: 100%;
    background: #eaeaea;
    left: 300px;
    width: auto;
`

class DefaultLayout extends React.Component {
  render() {
    return (
      <div>
        <SideBar />
        <RightCol>
          {this.props.children()}
          <Footer />
        </RightCol>
      </div>
    )
  }
}

export default DefaultLayout

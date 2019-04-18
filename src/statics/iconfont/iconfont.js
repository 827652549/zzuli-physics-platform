import { createGlobalStyle } from 'styled-components';
export const IconSytle =createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1555496454905'); /* IE9 */
  src: url('./iconfont.eot?t=1555496454905#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1555496454905') format('woff'),
  url('./iconfont.ttf?t=1555496454905') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1555496454905#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before {
  content: "\\e851";
}

.icon-xiazai45:before {
  content: "\\e61a";
}

.icon-guanyu:before {
  content: "\\e6a1";
}

.icon-lianxiwomen:before {
  content: "\\e60e";
}

.icon-icon-:before {
  content: "\\e60b";
}

.icon-bi1:before {
  content: "\\e612";
}

.icon-denglu:before {
  content: "\\e6f0";
}

.icon-yemian:before {
  content: "\\e600";
}

.icon-bofangshipin:before {
  content: "\\e643";
}

.icon-icon_Aa:before {
  content: "\\e6e9";
}





`;

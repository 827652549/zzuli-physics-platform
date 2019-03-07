import styled from 'styled-components';

export const Style =styled.span`

/*轮播图的属性*/
.ant-carousel .slick-slide {
    text-align: center;
    height: 260px;
    background: #364d79;
    overflow: hidden;
    padding: 0 20px;
}

.ant-carousel .slick-slide h1 {
    margin-top: 5%;
    color: #fff;
}

@media screen and (min-width:321px) and (max-width:375px){h1{font-size:11px}}
@media screen and (min-width:376px) and (max-width:414px){h1{font-size:12px}}
@media screen and (min-width:415px) and (max-width:639px){h1{font-size:15px}}
@media screen and (min-width:640px) and (max-width:719px){h1{font-size:20px}}
@media screen and (min-width:720px) and (max-width:749px){h1{font-size:22.5px}}
@media screen and (min-width:750px) and (max-width:799px){h1{font-size:23.5px}}
@media screen and (min-width:800px){h1{font-size:25px}}

#components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, .2);
    margin: 16px 24px 16px 0;
    float: left;
}

.list {
    margin: 10px;
    padding: 5px;
    font-size: 15px;
    color:rgba(0, 0, 0, 0.65);
}
.list span:hover {
    cursor: pointer;
    color: #1891ff;
}

.spinner {
    margin: 100px auto;
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
}

.spinner > div {
    background-color: #69c0ff;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
}

.spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
    0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
    20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
    0%, 40%, 100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }  20% {
           transform: scaleY(1.0);
           -webkit-transform: scaleY(1.0);
       }
}
#link{
    color:rgba(0,0,0,0.65);
}
`;

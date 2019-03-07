import React, {Component} from 'react';
import {
    SearchInfoItem,
    SearchInfoList,
    SearchInfoTitle,
    SearchInfoSwitch,
    HeaderWrapper,
    Logo,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    Style
} from "./style";
import {CSSTransition} from 'react-transition-group';//动画效果只需要包裹CSStransition标签设置属性即可
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import { Row, Col} from "antd";


class Header extends Component {
    getListArea = () => {
        const {focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage, mouseIn} = this.props;
        const newList = list.toJS();
        const pageList = [];


        for (let i = (page - 1) * 10; i < page * 10; i++) {
            if (newList[i] !== undefined)//这句代码排除了不满10个的组会多展示空组件的问题
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
        }


        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <span ref={(icon) => {
                                this.spinIcon = icon
                            }} className="iconfont spin">&#xe851;</span>
                            换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const {focused, hindleInputFocus, hindleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Style>
                    <Row>

                        <Col xs={1} lg={1} xl={1}>
                        </Col>
                        <Col xs={0} lg={0} xl={5}>
                            <div style={{height:'50px'}}>
                                <Link to={'/'} className="aLink navigation-link">
                                    <Logo/>
                                </Link>
                            </div>

                        </Col>
                        <Col xs={4} lg={3} xl={2}>
                                <NavItem className={'left active'}>
                                    <Link to={'/'} className="aLink navigation-link">
                                        首页
                                    </Link>
                                </NavItem>
                        </Col>
                        <Col xs={4} lg={3} xl={2}>
                            <NavItem className={'left'}>
                                <Link to={'/about'} className="aLink navigation-link">
                                    关于
                                </Link>
                            </NavItem>
                        </Col>
                        <Col xs={4} lg={3} xl={2}>
                            <NavItem className={'left'}>
                                <Link to={'/callUs'} className="aLink navigation-link">
                                    联系我们
                                </Link>
                            </NavItem>
                        </Col>
                        <Col xs={1} lg={1}></Col>
                        <Col xs={0} lg={4} xl={5}>
                            <SearchWrapper>
                                <CSSTransition
                                    //控制入场和出场动画
                                    in={focused}
                                    timeout={200}
                                    classNames='slide'
                                >
                                    <NavSearch
                                        className={focused ? 'focused' : ''}
                                        onFocus={() => hindleInputFocus(list)}
                                        onBlur={hindleInputBlur}
                                    >
                                    </NavSearch>
                                </CSSTransition>
                                <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</span>
                                {this.getListArea()}
                            </SearchWrapper>
                        </Col>
                        <Col xs={6} lg={6} xl={5}>

                        </Col>
                        <Col xs={4} lg={3} xl={2}>
                            <NavItem className={'left'}>
                                <Link to={'/'} className="aLink navigation-link">
                                    登录
                                </Link>
                            </NavItem>
                        </Col>




                    </Row>
                       {/* <Link to={'/'}>
                            <Logo/>
                        </Link>
                        <Nav>
                            <NavItem className={'left active'}>
                                <Link to={'/'} className="aLink navigation-link">
                                首页
                                </Link>
                            </NavItem>
                            <NavItem className={'left'}>
                                <Link to={'/about'} className="aLink navigation-link">
                                    关于
                                </Link>
                                </NavItem>
                            <NavItem className={'left'}>
                                <Link to={'/callUs'} className="aLink navigation-link">
                                    联系我们
                                </Link>
                                </NavItem>
                            <NavItem className={'right'}>
                                <Link to={'/'} className="aLink navigation-link">
                                    登录
                                </Link>
                            </NavItem>
                            <NavItem className={'right'}>
                                <Link to={'/'} className="aLink navigation-link">
                                    注册
                                </Link>
                            </NavItem>
                            <SearchWrapper>
                                <CSSTransition
                                    //控制入场和出场动画
                                    in={focused}
                                    timeout={200}
                                    classNames='slide'
                                >
                                    <NavSearch
                                        className={focused ? 'focused' : ''}
                                        onFocus={() => hindleInputFocus(list)}
                                        onBlur={hindleInputBlur}
                                    >
                                    </NavSearch>
                                </CSSTransition>
                                <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</span>
                                {this.getListArea()}
                            </SearchWrapper>

                        </Nav>
                        <Addition>
                            <Button className={'writting'}>
                                <span className="iconfont">&#xe612;</span>
                                欢迎使用</Button>
                        </Addition>*/}


                </Style>
            </HeaderWrapper>
        )
    }
}


//传入的是store的state
const mapStateToProps = (state) => {
    return {
        //两种写法，规则参考immutable.js的官网
        // focused:state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        hindleInputFocus(list) {
            if (list.size === 0)
                dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        hindleInputBlur() {
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreators.handleMouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.handleMouseLeave())
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if (page < totalPage)
                dispatch(actionCreators.changePageList(page + 1));
            else
                dispatch(actionCreators.changePageList(1));

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
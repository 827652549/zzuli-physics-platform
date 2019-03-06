import React, {Component} from 'react';
import {TopicWrapper, TopicItem} from '../style';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item) => {
                        return (
                            <Link key={item.get('id')} to={'/detail'}>
                                <TopicItem>
                                    <img className={'topic-pic'}
                                         src={item.get('imgUrl')}
                                         alt={item.get('title')}/>
                                    {item.get('title')}
                                </TopicItem>
                            </Link>
                        )
                    })
                }


            </TopicWrapper>
        )
    }
}

const mapState = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapState, null)(Topic);


/**
 * Created by wangqiangli on 2017/11/12.
 */
import React from 'react';

class SecondPage extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div>这是第二个页面</div>
        );
    }
}

export default SecondPage;
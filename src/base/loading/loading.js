import React from 'react'
import './loading.scss'

const Loading = (props) => {
    const { text } = props;
    return (
        <div className="loading-box">
            <div className="loading">
                <div>
                    <span className="odd" />
                    <span className="double" />
                    <span className="odd" />
                    <span className="double" />
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
};
Loading.defaultProps = {
    text: '正在加载中...'
};
export default Loading
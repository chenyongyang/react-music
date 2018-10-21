import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './dot.scss'

const Dot = (props) => {
    const { data, currentIndex } = props;
    return (
        <div className="dots">
            {
                data.length > 0 && data.map((item, index) => (
                    <span className={classNames('dot', { on: index === currentIndex })} key={index}>{item}</span>
                ))
            }
        </div>
    )
};
Dot.propTypes = {
    data: PropTypes.array.isRequired,
    currentIndex: PropTypes.number
};
export default Dot
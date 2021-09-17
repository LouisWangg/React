import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    //it's used so that component won't be keep updated unnecessarily
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    
    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} cancelOrder={this.props.canceled} />
                <div className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
};

export default Modal;
import React, { Component } from 'react';
import styles from './calendar.module.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    clickHandlerAdd = () => {
        this.setState({ count: this.state.count + this.props.stepNumber });
    }

    clickHandlerSub = () => {
        if (this.state.count === 0) {
            return;
        }
        this.setState({ count: this.state.count - this.props.stepNumber });
    }

    showBtn = () => {
        if (this.state.count > 0) {
            return (<button className={styles.btn} onClick={this.clickHandlerSub}>Subtraction!</button>);
        }
    }

    render() {
        const { count } = this.state;
        return (
            <div className={styles.container}>
                <section className={styles.colorDisplay}>
                    <h1>Counter = {this.state.count}</h1>
                    <h2>Step = {this.props.stepNumber}</h2>
                </section>
                <div><button className={styles.btn} onClick={this.clickHandlerAdd}>Add!</button>{this.showBtn()}</div>
                <p className={styles.colorDisplay}>Количество единиц добавляемых к счётчику = {this.props.stepNumber}</p>
            </div>
        );
    }
}

export default Counter;


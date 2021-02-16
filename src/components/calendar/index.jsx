import React, { Component } from 'react';
import styles from './calendar.module.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, };
    }

    clickHadlerAdd = () => {
        const { count } = this.state;
        const newState = { count: count + this.props.stepNumber };
        this.setState(newState);
    }

    clickHadlerDeb = () => {
        const { count } = this.state;
        const newState = { count: count - this.props.stepNumber };
        if (this.state.count === 0) {
            return;
        }
        this.setState(newState);
    }

    showBtn = () => {
        if (this.state.count > 0) {
            return this.clickHadlerDeb;
        }
        return this.clickHadlerAdd
    }

    render() {
        const { count } = this.state;
        return (
            <div className={styles.container}>
                <section>
                    <h1>Counter = {this.state.count}</h1>
                    <h2>{this.props.stepNumber} </h2>

                </section>
                <button className={styles.btn} onClick={this.clickHadlerAdd}>Add!</button>
                <button className={styles.btn} onClick={this.clickHadlerDeb}>Deb!</button>
                <div>
                    <p>Количество единиц добавляемых к счётчику = 1</p>
                </div>
            </div>
        );
    }
}



export default Counter;


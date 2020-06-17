import React, { Component } from 'react'
import css from './header.module.css'


export default class Header extends Component {
    handleInputChange = (event) => {
        const newInput = event.target.value
        this.props.onChangeFilter(newInput)
    }

    render() {
        const { filter } = this.props;
        return (
            <div className={css.container}>
                <h1>CÁLCULO DE RENDIMENTOS</h1>
                <input
                placeholder="Informe seu salário"
                type="number"
                value={filter}
                onChange= {this.handleInputChange}/>
            </div>
        )
    }
}

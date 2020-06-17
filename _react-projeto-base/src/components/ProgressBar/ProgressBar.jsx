import React, { Component } from 'react'
import css from './progressbar.module.css'


export default class ProgressBar extends Component {
    render() {
        const {inss, irrf, liquido} = this.props
        return (
            <div className={css.bar}>
                <div style={{width:`${liquido}%`, backgroundColor:'#26a69a', height: '40px'}}></div>
                <div style={{width:`${inss *100}%`, backgroundColor:'#ff5722', height: '40px'}}></div>
                <div style={{width:`${irrf * 100}%`, backgroundColor:'#7c4dff', height: '40px'}}></div>
            </div>
        )
    }
}

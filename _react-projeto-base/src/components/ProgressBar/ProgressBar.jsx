import React, { Component } from 'react'
import css from './progressbar.module.css'


export default class ProgressBar extends Component {
    render() {
        const {inss, irrf, liquido} = this.props
        return (
            <div className={css.bar}>
                <div style={{width:`${liquido}%`, backgroundColor:'#4db6ac', height: '40px'}}></div>
                <div style={{width:`${inss}%`, backgroundColor:'#ff5722', height: '40px'}}></div>
                <div style={{width:`${irrf}%`, backgroundColor:'#7c4dff', height: '40px'}}></div>
            </div>
        )
    }
}

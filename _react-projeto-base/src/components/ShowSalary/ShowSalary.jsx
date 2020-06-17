import React, { Component } from 'react'
import { formatNumber, format } from '../../helpers/formatHelpers'
import css from './showsalary.module.css'

export default class ShowSalary extends Component {
    render() {
        const {percentINSS, descINSS, baseINSS, percentIRRF, descIRRF, baseIRRF, salarioLiquido, percentLiquid} = this.props
        return (
            <div>
              <table className={css.tableView}>
              <tbody>
              <tr>
                    <th style={{color: '#ff5722'}}>FAIXA SALARIAL INSS</th>
                    <th style={{color: '#ff5722'}}>DESCONTO INSS</th>
              </tr>
              <tr>
                    <td>{baseINSS}</td>
                    <td>{`${formatNumber(descINSS)} (${format(percentINSS * 100)}%)`}</td>
              </tr>
                <tr>
                    <th style={{color: '#7c4dff'}}>FAIXA SALARIAL IRRF</th>
                    <th style={{color: '#7c4dff'}}> DESCONTO DO IRRF</th>
                </tr>
              <tr>
                    <td>{baseIRRF}</td>
                    <td>{`${formatNumber(descIRRF)} (${format(percentIRRF * 100)}%)`}</td>
              </tr>
              <tr>
                    <th scope="row" style={{color:'#26a69a'}}>SALÁRIO LIQUIDO</th>
                    <td>{`${formatNumber(salarioLiquido)} (${format(percentLiquid)}%)`}</td>
              </tr>
              </tbody>
          </table>  
            </div>
        )
    }
}


/**
 * percentINSS={percentINSS} 
        descINSS={descINSS}
        baseINSS={baseINSS}
        percentIRRF={percentIRRF}
        descIRRF={descIRRF}
        baseIRRF={baseIRRF}
        salarioLiquido = {salarioLiquido}
 */
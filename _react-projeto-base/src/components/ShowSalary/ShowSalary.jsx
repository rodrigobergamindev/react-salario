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
                    <th>FAIXA SALARIAL INSS</th>
                    <th>DESCONTO INSS</th>
              </tr>
              <tr>
                    <td>{baseINSS}</td>
                    <td>{`${formatNumber(descINSS)} (${format(percentINSS * 100)}%)`}</td>
              </tr>
                <tr>
                    <th>FAIXA SALARIAL IRRF</th>
                    <th> DESCONTO DO IRRF</th>
                </tr>
              <tr>
                    <td>{baseIRRF}</td>
                    <td>{`${formatNumber(descIRRF)} (${format(percentIRRF * 100)}%)`}</td>
              </tr>
              <tr>
                    <th scope="row">SALÁRIO LIQUIDO</th>
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
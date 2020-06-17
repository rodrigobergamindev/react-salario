import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './viewirrf.module.css'

export default class ViewIRRF extends Component {
    render() {
        const { baseIRRF, descIRRF, percent} = this.props
        return (
            <div className={css.container}>
          <table>
              <tbody>
              <tr>
                  <th className={css.viewIRRF}>FAIXA SALARIAL IRRF</th>
                  <th className={css.viewIRRF}>DESCONTO IRRF</th>
              </tr>
              <tr>
                <td>{formatNumber(baseIRRF)}</td>
                <td>{`${formatNumber(descIRRF)} (${percent}%)`}</td>
              </tr>
              </tbody>
          </table>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './viewirrf.module.css'

export default class ViewIRRF extends Component {
    render() {
        const { baseIRRF, descIRRF} = this.props
        return (
            <div className={css.view}>
          <table>
              <tr>
                  <th>BASE SALARIAL IRRF</th>
                  <th>DESCONTO IRRF</th>
              </tr>
              <tr>
                <td>{formatNumber(baseIRRF)}</td>
                <td>{formatNumber(descIRRF)}</td>
              </tr>
          </table>
            </div>
        )
    }
}

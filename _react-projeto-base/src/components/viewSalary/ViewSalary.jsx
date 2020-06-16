import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './viewsalary.module.css'

export default class ViewSalary extends Component {
    render() {
        const { salarioLiquido } = this.props
        return (
            <div className={css.view}>
            <table>
              <tr>
                  <th>SALÁRIO LÍQUIDO</th>
              </tr>
              <tr>
                <td>{formatNumber(salarioLiquido)}</td>
              </tr>
          </table>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './viewsalary.module.css'

export default class ViewSalary extends Component {
    render() {
        const { salarioLiquido, percent } = this.props
        return (
            <div className={css.container}>
            <table>
                <tbody>
              <tr>
                  <th className={css.viewSalary}>SALÁRIO LÍQUIDO</th>
              </tr>
              <tr>
                <td>{formatNumber(salarioLiquido)}</td>
              </tr>
              </tbody>
          </table>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './viewinss.module.css'

export default class ViewINSS extends Component {
    render() {
        const { baseINSS, descINSS, percent } = this.props
        return (
            <div className={css.view}>
          <table className={css.content}>
              <tbody>
              <tr>
                  <th className={css.viewINSS}>FAIXA SALARIAL INSS</th>
                  <th className={css.viewINSS}>DESCONTO INSS</th>
              </tr>
              <tr>
                <td>{formatNumber(baseINSS)}</td>
                <td>{`${formatNumber(descINSS)} (${percent}%)`}</td>
              </tr>
              </tbody>
          </table>
            </div>
        )
    }
}

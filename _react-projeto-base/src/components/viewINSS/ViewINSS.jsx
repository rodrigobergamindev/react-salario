import React, { Component } from 'react'
import { formatNumber } from '../../helpers/formatHelpers';
import css from './viewinss.module.css'

export default class ViewINSS extends Component {
    render() {
        const { baseINSS, descINSS } = this.props
        return (
            <div className={css.view}>
          <table className={css.content}>
              <tr>
                  <th>BASE SALARIAL INSS</th>
                  <th>DESCONTO INSS</th>
              </tr>
              <tr>
                <td>{formatNumber(baseINSS)}</td>
                <td>{formatNumber(descINSS)}</td>
              </tr>
          </table>
            </div>
        )
    }
}

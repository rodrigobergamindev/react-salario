import React, { Component } from 'react';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import ShowSalary from './components/ShowSalary/ShowSalary';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      faixaINSS: 0,
      descINSS: 0,
      faixaIRRF: 0,
      descIRRF: 0,
      percentINSS: 0,
      percentIRRF: 0,
      salarioLiquido: 0,
      percentLiquid: 0,
      filter: '',
    }
  }

  handleChangeFilter = (newInput) => {
    const salary = Number.isNaN(parseFloat(newInput)) === true ? 0 : parseFloat(newInput)
    this.setState({
      filter: newInput
    })
    this.calculate(salary)
  }

  calculate = (salary) => {
    const percentINSS = 
    salary === 0 ? 0 :
    salary <= 1045 ? 0.075 : 
    salary <= 2089.60 ? 0.09 : 
    salary <= 3134.40 ? 0.12 : 0.14

    const faixaINSS =
    salary === 0 ? 0 :
    salary <= 1045 ? 'R$ 1045' : 
    salary <= 2089.60 ? 'R$ 1045,01 a R$ 2089,60' : 
    salary <= 3134.40 ? 'R$ 2089.61 a R$ 3134.40' : 
    salary <= 6101.06 ? 'R$ 3134.41 a R$ 6101.06' : 
    salary > 6101.06 ? 'Maior que R$ 6101.06' : ''
    
    const descINSS = 
    percentINSS <= 0.075 ? salary * percentINSS : 
    salary <= 2089.60 ? (1045 * 0.075) + (salary - 1045.01) * percentINSS : 
    salary <= 3134.40 ? (1045 * 0.075) + ((2089.60 - 1045) * 0.09) + (salary - 2089.60) * percentINSS :
    salary <= 6101.06 ? (1045 * 0.075) + ((2089.60 - 1045) * 0.09) + ((3134.40 - 2089.60) * 0.12) + (salary - 3134.40) * percentINSS : 713.10

    const salarioParcial = salary - descINSS

    const percentIRRF =
    salarioParcial <= 1903.98 ? 0 : 
    salarioParcial <= 2826.65 ? 0.075 : 
    salarioParcial <= 3751.05 ? 0.15 : 
    salarioParcial <= 4664.68 ? 0.225 : 
    salarioParcial > 4664.68 ?  0.275 : 0

    const descIRRF = 
    salarioParcial <= 1903.98 ? 0 : 
    salarioParcial <= 2826.65 ? (salarioParcial * percentIRRF) - 142.80 : 
    salarioParcial <= 3751.05 ? (salarioParcial * percentIRRF) - 354.80 : 
    salarioParcial <= 4664.68 ? (salarioParcial * percentIRRF) - 636.13 : 
    salarioParcial > 4664.68 ? (salarioParcial * percentIRRF) - 869.36 : salarioParcial

    const faixaIRRF = 
    salarioParcial === 0 ? 0 :
    salarioParcial <= 1903.98 ? 'Até R$ 1.903,98':
    salarioParcial <= 2826.65 ? 'R$ 1.903,99 a R$ 2.826,65': 
    salarioParcial <= 3751.05 ? 'R$ 2.826,66 a R$ 3.751,05': 
    salarioParcial <= 4664.68 ? 'R$ 3.751,06 a R$ 4.664,68': 
    salarioParcial > 4664.68 ? 'Acima de R$ 4.664,69': ''
    
    const salarioLiquido = salarioParcial === descIRRF ? salarioParcial : salarioParcial - descIRRF

    const salarioBruto = salarioLiquido + descIRRF + descINSS

    const percentLiquid = salarioLiquido === 0 ? salarioParcial * 100 : (salarioLiquido * 100) / salarioBruto
    
    this.setState({
      faixaINSS,
      descINSS,
      faixaIRRF,
      descIRRF,
      percentINSS,
      percentIRRF,
      salarioLiquido,
      percentLiquid,
    })


  }
  render() {

    const {faixaINSS,descINSS,faixaIRRF,descIRRF,salarioLiquido, filter, percentINSS, percentIRRF, percentLiquid} = this.state

    return ( 
      <div className="container">
        <Header
        filter = {filter}
        onChangeFilter = {this.handleChangeFilter}
        />

        <ProgressBar inss={percentINSS} irrf={percentIRRF} liquido={percentLiquid}/>
        <ShowSalary 
        percentINSS={percentINSS} 
        descINSS={descINSS}
        baseINSS={faixaINSS}
        percentIRRF={percentIRRF}
        descIRRF={descIRRF}
        baseIRRF={faixaIRRF}
        salarioLiquido = {salarioLiquido}
        percentLiquid = {percentLiquid}
        />


      </div>
    )
  }
}

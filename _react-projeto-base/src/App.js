import React, { Component } from 'react';
import Header from './components/Headers/Headers';
import ViewINSS from './components/viewINSS/ViewINSS';
import ViewIRRF from './components/viewIRRF/ViewIRRF';
import ViewSalary from './components/viewSalary/ViewSalary';


export default class App extends Component {
  constructor() {
    super()

    this.state = {
      baseINSS: 0,
      descINSS: 0,
      baseIRRF: 0,
      descIRRF: 0,
      salarioLiquido: 0,
      filter: ''
    }
  }

  handleChangeFilter = (newInput) => {
    const salary = parseFloat(newInput)

    this.setState({
      filter: newInput
    })
    
    const salaryINSS = this.calculateINSS(salary)
    const irrf = this.calculateIRRF(salaryINSS)
    
  }

  calculateINSS = (salary) => {
    const primeiraFaixa = 78.38
    const segundaFaixa = 94.01
    const terceiraFaixa = 125.38


   if(salary === 1045) {
     const baseINSS = 1045
     const salaryWithINSS = 1045
    
     this.setState({
      baseINSS,
      descINSS: primeiraFaixa
    })

    return salaryWithINSS

   }else if(salary > 1045 && salary <= 2089.60){

      const baseINSS = 1045.01
      const descINSS = ((salary - 1045) * 0.09) + primeiraFaixa 
      const salaryWithINSS = salary - descINSS
      
      this.setState({
        baseINSS,
        descINSS
      })

      return salaryWithINSS

   }else if(salary > 2089.60 && salary <= 3134.40){
      const baseINSS = 2089.61
      const descINSS = ((salary - 2089.60) * 0.12) + primeiraFaixa + segundaFaixa
      const salaryWithINSS = salary - descINSS
      
      this.setState({
        baseINSS,
        descINSS
      })

      return salaryWithINSS

   }else if(salary > 3134.40 && salary <= 6101.06){
    const baseINSS = 3134.41
    const descINSS =  ((salary - 3134.40) * 0.14) + primeiraFaixa + segundaFaixa + terceiraFaixa 
    const salaryWithINSS = salary - descINSS
    
    this.setState({
      baseINSS,
      descINSS
    })
    return salaryWithINSS

   }else if(salary > 6101.06){
    const baseINSS = 6101.06
    const descINSS = 713.10
    const salaryWithINSS = salary - descINSS
    
    this.setState({
      baseINSS,
      descINSS
    })
    return salaryWithINSS
    
   }else {
    const baseINSS = 0
    const descINSS = 0
    
    this.setState({
      baseINSS,
      descINSS
    })
    return 0
   }
  }

  calculateIRRF = (salary) => {
    
    if(salary < 1903.99){
      this.setState({
        baseIRRF: 0,
        descIRRF: 0,
        salarioLiquido: salary
      })
      
    }else if(salary > 1903.98 && salary <= 2826.65){
      const parcelaDedutivel = 142.80
      const baseIRRF = 1903.99
      const descIRRF = (salary * 0.075) - parcelaDedutivel
      const salarioLiquido = salary - descIRRF

      this.setState({
        baseIRRF,
        descIRRF,
        salarioLiquido
      })

    }else if(salary > 2826.65 && salary <= 3751.05 ){
      const parcelaDedutivel = 354.80
      const baseIRRF = 2826.65
      const descIRRF = (salary * 0.15) - parcelaDedutivel
      const salarioLiquido = salary - descIRRF

      this.setState({
        baseIRRF,
        descIRRF,
        salarioLiquido
      })

    }else if(salary > 3751.05 && salary <= 4664.68) {
      const parcelaDedutivel = 636.13
      const baseIRRF = 3751.05
      const descIRRF = (salary * 0.225) - parcelaDedutivel
      const salarioLiquido = salary - descIRRF

      this.setState({
        baseIRRF,
        descIRRF,
        salarioLiquido
      })
    }else if(salary > 4664.68){
      const parcelaDedutivel = 869.36
      const baseIRRF = 4664.68
      const descIRRF = (salary * 0.275) - parcelaDedutivel
      const salarioLiquido = salary - descIRRF

      this.setState({
        baseIRRF,
        descIRRF,
        salarioLiquido
      })
    }else{
      const baseIRRF = 0
      const descIRRF = 0
      const salarioLiquido = salary

      this.setState({
        baseIRRF,
        descIRRF,
        salarioLiquido
      })
    }

  }

  render() {

    const {baseINSS,descINSS,baseIRRF,descIRRF,salarioLiquido, filter} = this.state

    return ( 
      <div className="container">
        <Header
        filter = {filter}
        onChangeFilter = {this.handleChangeFilter}
        />

      
        <ViewINSS 
        descINSS={descINSS}
        baseINSS={baseINSS}
        />

      <ViewIRRF
      descIRRF={descIRRF}
      baseIRRF={baseIRRF}
      />

      <ViewSalary
       salarioLiquido = {salarioLiquido}
       />


      </div>
    )
  }
}

import React from 'react'
import Test from './Test'
import { Test2FinalResults, executeTest2 } from "../../problems/test2"
import { Test1FinalResults, executeTest1 } from "../../problems/test1"

describe('<Test />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Test />)
  })
  it('value must be equal to awnser problem1', () => {
    executeTest1();

    let test1Data: Array<any> = (Test1FinalResults as Array<object>);
    test1Data.map((element:any) =>{
      let strResult = (element.result[0] != undefined ? element.result[0] : "")  + " " + (element.result[1] != undefined ? element.result[1] : "");
      let strAwnser = (element.awnser[0] != undefined ? element.awnser[0] : "")  + " " + (element.awnser[1] != undefined ? element.awnser[1] : "");
      expect(strResult).to.equal(strAwnser);
    })
  })
  it('value must be equal to awnser problem2', () => {
    executeTest2();
    let test2Data: Array<any> = (Test2FinalResults as Array<object>);
    test2Data.map((element:any) =>{
      let strResult = (element.result[0] != undefined ? element.result[0] : "")  + " " + (element.result[1] != undefined ? element.result[1] : "");;
      let strAwnser = (element.awnser[0] != undefined ? element.awnser[0] : "")  + " " + (element.awnser[1] != undefined ? element.awnser[1] : "");
      expect(strResult).to.equal(strAwnser);
  })
  })
})
import React from 'react'
import { Test2FinalResults, executeTest2 } from "../../problems/test2"
import { Test1FinalResults, executeTest1 } from "../../problems/test1"
import Problem from './Problem';

const Test = () => {
    let test2Data: Array<any> = (Test2FinalResults as Array<object>);
    let test1Data: Array<any> = (Test1FinalResults as Array<object>);
    executeTest1();
    executeTest2();
    // console.log(Test1FinalResults, "Test1FinalResults")
    // console.log(Test2FinalResults, "Test2FinalResults")
  return (
    <>
    <div className='flex justify-center'>
        <div className='w-10/12 flex justify-around'>
            <Problem problem={test1Data} />
            <Problem problem={test2Data} />
        </div>
    </div>
    </>
  )
}

export default Test
import React from 'react'

const Problem = (props: any) => {
  return (
    <div>
        {props.problem.map((element:any, index:number, arr:Array<object>):any =>{
            return <>
                <div className=''>
                    <div className='my-2 text-xl font-bold'>Example: {index+1}</div>
                    <div className=''>{`Result: [${element.result}]`}</div>
                    <div className=''>{`Awnser: [${element.awnser}]`}</div>
                </div>
            </>
        })}
    </div>
  )
}

export default Problem
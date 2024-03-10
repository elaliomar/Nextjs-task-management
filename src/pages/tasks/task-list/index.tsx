import React,{useState,MouseEventHandler,useEffect} from 'react'
import InputTask from '@/components/Tasks/InputTask'
import Tabs from '@/components/Tasks/Tabs/Tabs'
import Layout from '@/components/Layout/Layout'


const TaskList = () => {
  
  return (
    <>
    <Layout>
      <Tabs/>
    </Layout>
    <InputTask/>
  </>
  )
}

export default TaskList
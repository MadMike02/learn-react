import React from 'react'
import Tas from './Tas'

const Tasks = ({ task,ondel,ontog }) => {
  return (
    <>
        {task.map((task) => {return <Tas key={task.id} task={task} ondelete={ondel} ontoggle={ontog}></Tas>})}
    </>
  )
}

export default Tasks
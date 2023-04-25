import {FaTimes} from 'react-icons/fa'

const Tas = ({ task,ondelete,ontoggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : '' }`}>
        <h3 onClick={() => {ontoggle(task.id)}}>
            {task.text}{' '}
            <FaTimes style={{color:'red',cursor:'pointer'}} onClick={() => {ondelete(task.id)}}/>
        </h3>
        <p>{task.date}</p>
    </div>
  )
}

export default Tas
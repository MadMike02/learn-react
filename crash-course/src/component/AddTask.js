import { useState } from "react"

const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('')
    const [date,setday] = useState('')
    const [reminder,setreminder] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        if(!text)
        {
            alert('Pleade add a task')
            return
        }

        onAdd({ text, date, reminder })

        setText('')
        setday('')
        setreminder(false)
    }


  return (
    <form className='add-form' onSubmit={submitForm}>
        <div className="form-control">
            <label>Task</label>
            <input type='text' placeholder="Add Task" value={text} onChange={(e) => {setText(e.target.value)}}/>
        </div>
        <div className="form-control">
            <label>Day & Time</label>
            <input type='text' placeholder="Add Date and Time" value={date} onChange={(e) => {setday(e.target.value)}} />
        </div>
        <div className="form-control form-control-check">
            <label>Set Reminder?</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => {setreminder(e.currentTarget.checked)}}/>
        </div>
        <input className="btn btn-block" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask
import React, { useState } from "react";
import { Task } from "../Types"

type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

const TaskInput: React.FC<Props> = ({ tasks, setTasks }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(tasks.length + 1)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false
        }

        setTasks([newTask, ...tasks])
        setInputTitle('')
    }

    return (
        <div>
            <div className={"inputForm"}>
                <div className={"inner"}>
                    <input
                        type="text"
                        className={"input"}
                        value={inputTitle}
                        onChange={handleInputChange}
                        placeholder="TODOを入力してください。"
                    />
                    <button onClick={handleSubmit} className={"btn is-primary"}>
                        追加
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TaskInput
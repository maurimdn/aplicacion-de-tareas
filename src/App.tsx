import React, {  useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");

  const [tasks, setTaks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
    console.log(tasks)
  };

  const addTask = (name: string) => {
    const newTask: ITask[] = [...tasks, { name, done: false }];
    setTaks(newTask);
  };

  const toggleDoneTask = (i : number)=>{
    const newTasks: ITask[] =[...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTaks(newTasks)
  }

  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="ingrese tarea"
                  onChange={(e) => setNewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                  
                />
                <button className="btn btn-success btn-block mt-2">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {tasks.map((t: ITask, i: number) => (
        <div className="card card-body mt-2" key={i}>
           <h2 style={{textDecoration: t.done ? 'line-through': ''}}>{t.name}</h2>
           <div>
             <button className="btn btn-secondary" onClick={()=>toggleDoneTask(i)}>
               {t.done ? "Realizado: ✅" : "Pendiente: ❎"}
             </button>
           </div>
        </div>
      ))}
    </div>
  );
}

export default App;

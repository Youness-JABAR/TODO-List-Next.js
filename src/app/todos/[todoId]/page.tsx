import Link from "next/link";
import { Todo } from "../../../../typings.d";
import { notFound } from 'next/navigation'

type PageProps = {
    params : {
        todoId: string
    }
}

// in ISR WE USE REVALIDATION PARAM  if the page is SSR that's ok if not the page will be dynamically SSR and cach it and 
const fetchTodo= async (todoId:string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {next:{revalidate:60}});
    const todo: Todo = await res.json();
    return todo;
}


export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[]= await res.json(); 
    const trimmedTodos = todos.splice(0,10);  
    return trimmedTodos.map((todo) => ({
      todoId: todo.id.toString()
    }))
  }

async function TodoPage({params : { todoId} }: PageProps) {

    const todo = await fetchTodo(todoId);

    if(!todo.id){
        return notFound()
    }
    return (
      <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg"  >
        <p >
            #{todo.id}: {todo.title}
        </p>
        <p>
            completed: {todo.completed ? "Yes" : "No"}
        </p>
        <p className="border-t border-black mt-5 text-right" >
            By User: {todo.userId}
        </p>
      </div>
    )
  }
export default TodoPage
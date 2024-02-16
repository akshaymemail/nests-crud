import { Injectable } from '@nestjs/common';
import { todoDTO } from './dto';

@Injectable({})
export class TodoService {
  getAllTodo() {
    return Todos;
  }

  addOne(payload: todoDTO) {
    let todo = {
      id: Todos.length + 1,
      title: payload.title,
      status: payload.status,
    };
    Todos.push(todo);
    return Todos;
  }
  getOne(id: number) {
    const todo = Todos.find((todo) => todo.id === id);
    console.log('todo', todo, id);
    return todo;
  }
  updateOne(id: number, payload: todoDTO) {
    const modifiedTodos = Todos.map((obj) => {
      if (obj.id === id) {
        return { ...obj, ...payload };
      }
      return obj;
    });

    return modifiedTodos;
  }
  deleteOne(id: number) {
    return Todos.filter((todo) => todo.id !== id);
  }
}

const Todos = [
  {
    id: 1,
    title: 'Implement authentication',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'Add databse support',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Add Caching',
    status: 'Pending',
  },
];

import { atom } from "jotai";
import { jotaiStore } from "../jotai-store";

export const todosAtom = atom([]);

export const addTodo = (todos, todo) => {
  jotaiStore.set(todosAtom, [
    ...todos,
    {
      description: todo,
      isFinished: false,
    },
  ]);
};

export const checkTodo = (todos, idx) => {
  const newTodos = (todos[idx].isFinished = !todos[idx].isFinished);
  jotaiStore.set(todosAtom, newTodos);
};

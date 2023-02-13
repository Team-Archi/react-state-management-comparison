import React, { useState } from "react";
import styled from "styled-components";
import { jotaiStore } from "../modules/jotai-store";
import { addTodo, checkTodo, todosAtom } from "../modules/todo";

function TodoList() {
  const [text, setText] = useState("");
  const todos = jotaiStore.get(todosAtom)

  const handleText = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    if (e.key === "Enter") {
      addTodo(todos, text);
      setText("");
    }
  };

  return (
    <TodoListWrap>
      <h2>Jotai Todo</h2>
      <TodoInput
        value={text}
        placeholder="할 일을 입력하세요."
        onChange={handleText}
        onKeyPress={onSubmit}
      />

      <ListWrap>
        {jotaiStore.get(todosAtom).map((todo, idx) => {
          return (
            <TodoItem key={idx}>
              <CheckBox
                type="checkbox"
                defaultChecked={todo.isFinished}
                onClick={() => checkTodo(todos, idx)}
              />
              <p>{todo.description}</p>
            </TodoItem>
          );
        })}
      </ListWrap>
    </TodoListWrap>
  );
}

export default TodoList;

const TodoListWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;
  margin: 12px;
`;

const TodoInput = styled.input`
  padding: 8px;
`;

const ListWrap = styled.div``;

const TodoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const CheckBox = styled.input``;

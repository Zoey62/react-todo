import React from "react";
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import {useTodoState} from "./TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    const todos = useTodoState();
    console.log(todos);

    return (
        <TodoListBlock>
            {/*<TodoItem text="프로젝트 생성하기" done={true} />*/}
            {/*<TodoItem text="컴포넌트 스타일링 하기" done={true} />*/}
            {/*<TodoItem text="Context 만들기" done={false} />*/}
            {/*<TodoItem text="기능 구현하기" done={false} />*/}
            {todos.map((todo) => (
                <TodoItem id={todo.id} text={todo.text} done={todo.done} />
            ))}
        </TodoListBlock>
    );
}

export default TodoList;
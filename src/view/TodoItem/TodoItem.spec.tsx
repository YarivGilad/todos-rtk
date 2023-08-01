import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from "./TodoItem.view";
import { ITodo } from "../../types.ts";
import { createStore } from "../../state/configure.store.ts";
import { Provider } from 'react-redux';


let store = createStore();

beforeEach(() => {
    store = createStore()
});

test('renders a title', () => {
    const propsObj: ITodo = {
        id: 'sa9efya',
        title: 'check the items',
        completed: false,
        show: true
    };
    render(
        <Provider store={store}>
            <TodoItem {...propsObj} />
        </Provider>
    );
    const divElement = screen.getByText(/the items/i);
    expect(divElement).toBeInTheDocument();
});

test('show delete btn on hover', async () => {
    const propsObj: ITodo = {
        id: 'sa9efya',
        title: 'check the items',
        completed: false,
        show: true
    };
    render(
        <Provider store={store}>
            <TodoItem {...propsObj} />
        </Provider>
    );
    const todoItem = screen.getByTitle(/todo item/i);

    fireEvent.mouseEnter(todoItem);
    const removeIcon = screen.getByTitle(/remove icon/i);
    expect(removeIcon).toBeInTheDocument();
});
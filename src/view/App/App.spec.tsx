import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from "./App.view";
import { createStore } from "../../state/configure.store.ts";
import { addTodo } from '../../state/todos.slice.ts';
import { Provider } from 'react-redux';


let store = createStore();

beforeEach(() => {
    store = createStore()
});

function renderComponent(){
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
test('footer exists, when items exist', () => {
    store.dispatch(addTodo('some fake title'));
    renderComponent();
    const footer = screen.getByTitle(/footer/i);
    expect(footer).toBeInTheDocument();
});

test('footer hidden, when no items', () => {

    renderComponent();
    const footer = screen.queryByTitle(/footer/i);
    expect(footer).not.toBeInTheDocument();
});

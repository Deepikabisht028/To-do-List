import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todo',
    initialState: { 
        todos: [] 
    },
    reducers: {
        addTodo: (state, action) => {
            const value = action.payload;

            //Logic for checking for duplicate task
            const sameValue = state.todos.find((todo) => todo.task.toLowerCase() === value.toLowerCase());

            //adding a unique id for key usage
            if (!sameValue && value) {
                state.todos.push({ id: crypto.randomUUID(), task: value, checked: false });
            }
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => action.payload !== todo.id)
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo);
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
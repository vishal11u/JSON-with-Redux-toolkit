import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "CardTravel",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.push(action.payload);
            }
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            return state.filter(item => item.id !== itemIdToRemove);
        }
    }
});

export const { addItem, removeItem } = slice.actions;
export default slice.reducer;

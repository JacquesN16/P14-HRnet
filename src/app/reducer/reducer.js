import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
    employee: []
}

const userSlice = createSlice({
    name: 'global',
    initialState: defaultState,
    reducers: {
        setEmployee: (state, action) => {
            state.employee = action.payload
        },
    },
})
export default userSlice.reducer

export const { setEmployee } = userSlice.actions

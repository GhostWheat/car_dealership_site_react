import { createSlice } from '@reduxjs/toolkit';

interface CarState { //these keynames will NEED to match the
    //exact names on the Flask side
    color: string;
    year: number;
    make: string;
    model: string;
    vin: string;

}

const initialState: CarState = {
    color: '',
    year: 0,
    make: '',
    model: '',
    vin: '',
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseColor: (state, action) => { state.color = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseVIN: (state, action) => { state.vin = action.payload },
    }
})

//Export the reducer
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    //deconstruct our actions... the dispatchers
    chooseColor,
    chooseYear,
    chooseMake,
    chooseModel,
    chooseVIN,
} = rootSlice.actions
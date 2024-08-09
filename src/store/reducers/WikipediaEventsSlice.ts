import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {WikipediaEventModel} from '../../models/wikipedia-event.model';

interface StateInterface {
  wikipediaEvents: WikipediaEventModel[];
}

const initialState: StateInterface = {
  wikipediaEvents: []
};

export const WikipediaEventsSlice = createSlice({
  name: 'mainWikipediaEventsData',
  initialState,
  reducers: {
    addWikipediaEvents: (state, action: PayloadAction<WikipediaEventModel[]>) => {
      state.wikipediaEvents = action.payload;
    }
  }
});

export const {addWikipediaEvents} = WikipediaEventsSlice.actions;

export default WikipediaEventsSlice.reducer;

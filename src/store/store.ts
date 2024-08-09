import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import wikipediaEventState from './reducers/WikipediaEventsSlice';
import messageState from './reducers/MessageSlice';

const rootReducer: Reducer<any> = combineReducers({
  wikipediaEventState,
  messageState
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;

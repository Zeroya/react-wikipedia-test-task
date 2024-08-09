import {ReactElement} from 'react';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MessagePositionVerticalEnum, MessagePositionHorizontalEnum} from '../../enums/message-position.enum';
import {VariantEnum} from '../../enums/variant.enum';

type initialStateProps = {
  state: boolean;
  options: {
    variant: VariantEnum;
    anchorOrigin: {
      vertical: MessagePositionVerticalEnum;
      horizontal: MessagePositionHorizontalEnum;
    };
    autoHideDuration: number | null;
    message: ReactElement | string;
  };
};

const initialState: initialStateProps = {
  state: false,
  options: {
    variant: VariantEnum.Info,
    anchorOrigin: {
      vertical: MessagePositionVerticalEnum.Top,
      horizontal: MessagePositionHorizontalEnum.Center
    },
    autoHideDuration: 3000,
    message: 'Hi'
  }
};

export const MessageSlice = createSlice({
  name: 'mainMessageData',
  initialState,
  reducers: {
    showMessage(state, action: PayloadAction<Partial<initialStateProps['options']>>) {
      state.state = true;
      state.options = {
        ...initialState.options,
        ...action.payload
      };
    },
    hideMessage(state) {
      state.state = false;
    }
  }
});

export const {hideMessage, showMessage} = MessageSlice.actions;

export default MessageSlice.reducer;

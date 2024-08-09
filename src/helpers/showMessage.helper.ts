import {showMessage} from '../store/reducers/MessageSlice';
import {VariantEnum} from '../enums/variant.enum';
import {AppDispatch} from '../store/store';

export function showError(message: string, dispatch: AppDispatch): void {
  dispatch(showMessage({message, variant: VariantEnum.Error}));
}

export function showSuccess(message: string, dispatch: AppDispatch): void {
  dispatch(showMessage({message, variant: VariantEnum.Success}));
}

export function showWarning(message: string, dispatch: AppDispatch): void {
  dispatch(showMessage({message, variant: VariantEnum.Warning}));
}

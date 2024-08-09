import {styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';
import Typography from '@mui/material/Typography';
import {hideMessage} from '../../../store/reducers/MessageSlice';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux-hooks';
import {colorConfigurator} from '../../../constants/colorConstants';
import {VariantEnum} from '../../../enums/variant.enum';

type StyledSnackbarProps = {
  variant?: VariantEnum;
};

const StyledSnackbar = styled(Snackbar)<StyledSnackbarProps>(({variant}) => ({
  zIndex: 10000,
  '& .content': {
    ...(variant === 'success' && {
      backgroundColor: colorConfigurator.green,
      color: colorConfigurator.white
    }),

    ...(variant === 'error' && {
      backgroundColor: colorConfigurator.red,
      color: colorConfigurator.white
    }),

    ...(variant === 'info' && {
      backgroundColor: colorConfigurator.blue,
      color: colorConfigurator.white
    }),

    ...(variant === 'warning' && {
      backgroundColor: colorConfigurator.orange,
      color: colorConfigurator.white
    })
  }
}));

function CustomSnackbar() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.messageState.state);
  const options = useAppSelector((state) => state.messageState.options);

  return (
    <StyledSnackbar {...options} open={state} onClose={() => dispatch(hideMessage())}>
      <SnackbarContent
        className="content"
        message={
          <div className="flex items-center">
            <Typography className="mx-8">{options.message}</Typography>
          </div>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={() => dispatch(hideMessage())} size="small">
            x
          </IconButton>
        ]}
      />
    </StyledSnackbar>
  );
}

export default CustomSnackbar;

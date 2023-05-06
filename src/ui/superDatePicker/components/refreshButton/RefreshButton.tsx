import RefreshIcon from '../../../../../static/icons/refresh.svg';
import { CustomButton } from '../../../shared/customButton';

function RefreshButton() {
  return (
    <CustomButton
      type='submit'
      text='Refresh'
      filled
    >
      <RefreshIcon
        focusable={false}
        aria-hidden
      />
    </CustomButton>
  );
}

export { RefreshButton };

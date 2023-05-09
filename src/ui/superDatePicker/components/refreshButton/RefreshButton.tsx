import RefreshIcon from '../../../../../static/icons/refresh.svg';
import { CustomButton } from '../../../shared/customButton';
import { useStore } from '../../hooks/useStore';

function RefreshButton() {

  const { store: { datesValid } } = useStore();

  return (
    <CustomButton
      type='submit'
      text='Refresh'
      filled
      disabled={!datesValid}
    >
      <RefreshIcon
        focusable={false}
        aria-hidden
      />
    </CustomButton>
  );
}

export { RefreshButton };

import styles from './superDatePicker.module.scss';
import picture from '../../../static/img/dummy.jpeg';
import Icon from '../../../static/icons/sun.svg';

function SuperDatePicker() {
  return (
    <>
      <img src={picture} width={300} height={200} alt="Some pic" />
      <h1 className={styles.title}>UI Component</h1>
      <h2>Super Date Picker</h2>
      <Icon className={styles.icon} />
    </>
  );
}

export { SuperDatePicker };

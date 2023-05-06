import styles from './timeOutput.module.scss';

function TimeOutput() {
  return (
    <div className={styles.output}>
      <label className={styles.outputLabel}>Start date</label>
      <input
        className={styles.outputInput}
        type='text'
        value='Default Value'
        readOnly
      />
    </div>
  );
}

export { TimeOutput };

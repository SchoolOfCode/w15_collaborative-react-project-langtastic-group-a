function DateAndTime({ date, time }) {
  return <p data-testid='dateandtime-container'>{`${date} ${time}`}</p>;
}
export default DateAndTime;

const WatchRecord = ({ record }) => {
  const recordList = record.map((item, index) => (
    <li key={index}>
      <span>{item.title + ': '}</span>
      <span>{item.time}</span>
    </li>
  ));
    
  return (
    <div style={{ border: 'solid purple' }}>
      <ul style={{ color: '#2096F3' }}>
        {recordList}
      </ul>
    </div>
  );
}

WatchRecord.propTypes = {
  record: React.PropTypes.array.isRequired,
};

window.App.WatchRecord = WatchRecord;

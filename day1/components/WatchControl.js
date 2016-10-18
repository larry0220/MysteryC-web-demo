const { Button } = window.App;

const WatchControl = ({ status, addRecord, clearRecord, startWatch, pauseWatch, canReset, canRecord }) => {

  function pressStart() {
    if (status !== 'active') {
      startWatch();
    } else {
      pauseWatch();
    }
  }

  function pressRecord() {
    if (status === 'active') {
      addRecord()
    } else {
      clearRecord()
    }
  }

  return (
    <div id="watch-control"
      style={{ border: 'solid red' }}>
      <Button
        className="btn-left"
        onPress={() => pressRecord()}
        text={canReset ? '復位' : '計次'} />

      <Button
        className="btn-right"
        onPress={() => pressStart()}
        text={canRecord ? '停止' : '啟動'} />
    </div>
  )
}

WatchControl.propTypes = {
  pauseWatch: React.PropTypes.func.isRequired,
  clearRecord: React.PropTypes.func.isRequired,
  startWatch: React.PropTypes.func.isRequired,
  addRecord: React.PropTypes.func.isRequired,
};

window.App.WatchControl = WatchControl;
const WatchFace = ({ sectionTime, totalTime }) => (
  <div
    style={{ border: 'solid orange' }}
    className="center">
    <p>state.sectionTime: <span style={{color: '#2096F3'}}>{sectionTime}</span></p>
    <p>state.totalTime: <span style={{color: '#2096F3'}}>{totalTime}</span></p>
  </div>
)


WatchFace.propTypes = {
  sectionTime: React.PropTypes.string.isRequired,
  totalTime: React.PropTypes.string.isRequired,
};

window.App.WatchFace = WatchFace;

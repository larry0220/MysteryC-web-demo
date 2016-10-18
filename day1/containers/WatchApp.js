const { WatchFace, WatchControl, WatchRecord, Timer } = window.App;
const timer = new Timer();
let recordCounter = 0;
const setInitialState = () => (
  {
    status: 'stop',
    canRecord: false,
    canReset: false,
    record:[
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""},
      {title:"",time:""}
    ],
    totalTime: "00:00.00",
    sectionTime: "00:00.00",
  }
)


class WatchApp extends React.Component {
  constructor() {
    super();
    this.startWatch = this.startWatch.bind(this);
    this.pauseWatch = this.pauseWatch.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
    this.addRecord = this.addRecord.bind(this);

    this.state = setInitialState();
  }

  componentWillUnmount() {
    timer.reset();
    recordCounter = 0;
  }

  startWatch() {
    this.setState({
      status: 'active',
      canRecord: true,
      canReset: false
    });

    timer.start(() => {
      this.setState({
        totalTime: timer.formatTotal(),
        sectionTime: timer.formatSection()
      });
    });
  }

  pauseWatch() {
    this.setState({
      status: 'pause',
      canRecord: false,
      canReset: true
    });
    timer.pause()
  }

  resetWatch() {
    timer.reset();
    recordCounter = 0;

    this.setState(setInitialState())
  }

  addRecord() {
    recordCounter++;
    let record = this.state.record.slice();

    if (recordCounter < 8) {
      record.pop();
    }

    record.unshift({
      title: "計次" + recordCounter,
      time: timer.getSection()
    });

    this.setState({ record });
  }

  render(){
    return(
      <div style={{ border: 'solid yellow', padding: 20 }}>
        <WatchFace totalTime={this.state.totalTime} sectionTime={this.state.sectionTime}></WatchFace>
        <WatchControl
          status={this.state.status}
          addRecord={this.addRecord}
          clearRecord={this.resetWatch}
          startWatch={this.startWatch}
          pauseWatch={this.pauseWatch}
          canReset={this.state.canReset}
          canRecord={this.state.canRecord} />
          
        <div>
          <p>state.status: <span style={{color: '#2096F3'}}>{this.state.status}</span></p>
          <p>state.canRecord: <span style={{color: '#2096F3'}}>{this.state.canRecord.toString()}</span></p>
          <p>state.canReset: <span style={{color: '#2096F3'}}>{this.state.canReset.toString()}</span></p>
        </div>
        
        <div style={{ paddingTop: 10 }}>
          <p>state.record:</p>
          <WatchRecord record={this.state.record}></WatchRecord>
        </div>
        
      </div>
    )
  }
}

window.App.WatchApp = WatchApp;
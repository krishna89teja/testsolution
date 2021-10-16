const TimelineReporter = require('wdio-timeline-reporter').default;
class Report{
    
    addContext(message){
    //    TimelineReporter.addContext(message,new Date().toLocaleString());
    TimelineReporter.addContext({
        title: new Date().toLocaleString(),
        value: message
      });
    }
}
module.exports = new Report()
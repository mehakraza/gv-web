let alt = require('../alt');
import TimeLineSource from '../sources/TimeLineSource';
class TimeLineAction{
	getData(){
		return TimeLineSource.fetchTimeLineData();
	}
}

module.exports = alt.createActions(TimeLineAction);

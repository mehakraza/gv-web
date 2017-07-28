import alt from '../alt';
import TimeLineAction from '../actions/TimelineAction';
import TimeLineSource from '../sources/TimeLineSource';



class TimeLineStore {
  constructor() {
    this.bindActions(TimeLineAction);
    this.state = {
      groups:[],
      flights: [],
    };
  }

	onGetData(data){
		let localGroup = [];
		let localItems = [];
		let ind = 1;
			Object.keys(data).forEach(function(groupKey,groupIndex) {
	    	localGroup.push({
	    		id: groupIndex,
	    		title: groupKey
	    	})


	    		data[groupKey]['flights'].forEach((flightData) =>{
	    				localItems.push({
	    					id:ind,
	    					group:groupIndex,
	    					start_time:flightData.arrivalDate,
	    					end_time:flightData.departureTime,
	    					title:flightData.type,

	    				});
	    				ind++;
	    		})



			});


		this.setState({
      groups: localGroup,
      flights: localItems
    });
 		console.log("in groups11::",this.state.groups,localItems);

	}
}

module.exports = alt.createStore(TimeLineStore, 'TimeLineStore');

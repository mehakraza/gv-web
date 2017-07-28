import React, {Component} from 'react';
import Gantt from './Gantt';
import './Gantt.css';

let data = {
  data: [
    {id: 1, text: 'Task #1', start_date: '15-01-1990', duration: 3, progress: 0.6},
    {id: 2, text: 'Task #2', start_date: '18-04-2017', duration: 3, progress: 0.4}
  ],
  
};	
class GantComponent extends Component{
	render(){
		

		return (
	           <div className="gantt-container">
		          <Gantt
		            tasks={data}
		            zoom = "Months"
		          />
		        </div>
	    );
	}
}

module.exports = GantComponent;
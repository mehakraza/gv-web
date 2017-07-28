import React, {Component} from 'react';
import moment from 'moment';
import Timeline from 'react-calendar-timeline';
import AltContainer from 'alt-container';

import TimeLineStore from '../stores/TimeLineStore';
import TimeLineAction from '../actions/TimelineAction';
import Popup from 'react-popup';
import './popup.example.css';


class TimeLineComponent extends Component{


  componentDidMount() {
    TimeLineAction.getData();
  }


  render(){
     const groups1 = [
      {id: 1, title: 'group 1'},
      {id: 2, title: 'group 2'}
    ]

    const items1 = [
      {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
      {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'), end_time: moment().add(0.5, 'hour')},
      {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
    ]

    return(

           <AltContainer store={TimeLineStore}>
              <TimeLineComp/>
           </AltContainer>
    )
  }
}

module.exports = TimeLineComponent;



class TimeLineComp extends Component {

    componentWillReceiveProps(nextProps) {
      console.log('all : componentWillReceiveProps' );
    }

    canvasClick(groupId, time, e){
      console.log(groupId, time, e);
    }

    componentDidMount() {
      var fixed = document.getElementsByClassName('rct-canvas');
      console.log("fixed::",fixed[0]);
    }

    onItemSelect(itemId,e){
      console.log("event emitted11",itemId,e,e.clientX);


     let mySpecialPopup = Popup.register({
          title: 'I am special',
          content: 'Since I am special you might need me again later. Save me!',
          buttons: {
              left: ['cancel'],
              right: ['ok']
          },
          noOverlay: false,
           position: function (box) {
              let bodyRect      = document.body.getBoundingClientRect();
              let btnOffsetTop  = 300- bodyRect.top;
              let btnOffsetLeft = 400 - bodyRect.left;
              let scroll        = document.documentElement.scrollTop || document.body.scrollTop;

              box.style.top  = (btnOffsetTop - box.offsetHeight - 10) - scroll + 'px';
              box.style.left = (btnOffsetLeft  - (box.offsetWidth / 2)) + 'px';
              box.style.margin = 0;
              box.style.opacity = 1;
          }
      });



     Popup.queue(mySpecialPopup);
    }
    render() {
       console.log("pp",this.props);
       if(this.props.flights.length !== 0 ){
        return(
          <div>


        <Popup />

              <Timeline groups={this.props.groups}
                          items={this.props.flights}
                          defaultTimeStart={moment().add(-12, 'hour')}
                          defaultTimeEnd={moment().add(12, 'hour')}
                          onItemSelect = {this.onItemSelect}
                          itemTouchSendsClick={false}
                          canMove = {false}
                          itemTouchSendsClick={true}
                          traditionalZoom = {true}
                          dragSnap = {0}
                          onCanvasClick = {this.canvasClick}
                />
          </div>
        )
       }else{
        return(null);
       }

    }
}

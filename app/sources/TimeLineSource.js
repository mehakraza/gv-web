import TimeLineAction from '../actions/TimelineAction';
import moment from 'moment';

let  items =   {
  "VJB-9H":{
    "type":"CH",
    "flights":[
      {
        "departureTime":new Date('05-01-2017 01:03:44'),
        "arrivalDate":new Date('05-03-2017 02:03:44'),
        "type":"paid"
      },
      {
        "departureTime":new Date('05-16-2017 03:03:44'),
        "arrivalDate":new Date('05-17-2017 04:05:00'),
        "type":"unpaid"
      },
      {
        "departureTime":new Date('06-01-2017 05:10:44'),
        "arrivalDate":new Date('06-02-2017 06:12:44'),
        "type":"paid"
      },
      {
        "departureTime":new Date('06-06-2017 01:06:15'),
        "arrivalDate":new Date('06-06-2017 05:08:00'),
        "type":"unpaid"
      }
    ]
  },
  "VJA-9H":{
    "type":"CH2",
    "flights":[
      {
        "departureTime":new Date('05-10-2017 00:03:44'),
        "arrivalDate":new Date('05-12-2017 00:20:44'),
        "type":"empty leg"
      },
      {
        "departureTime":new Date('05-16-2017 00:03:44'),
        "arrivalDate":new Date('05-18-2017 00:10:44'),
        "type":"paid"
      },
      {
        "departureTime":new Date('06-03-2017 00:05:44'),
        "arrivalDate":new Date('06-04-2017 00:15:44'),
        "type":"empty leg"
      }
    ]
  },
  "VJC-9h":{
    "type":"CH3",
    "flights":[
      {
        "departureTime":new Date('05-05-2017 01:03:44'),
        "arrivalDate":new Date('05-07-2017 06:05:15'),
        "type":"program"
      },
      {
        "departureTime":new Date('05-10-2017 10:03:44'),
        "arrivalDate":new Date('05-13-2017 12:03:44'),
        "type":"direct"
      },
      {
        "departureTime":new Date('06-08-2017 15:03:44'),
        "arrivalDate":new Date('05-09-2017 20:03:44'),
        "type":"program"
      },
      {
        "departureTime":new Date('06-12-2017 10:03:44'),
        "arrivalDate":new Date('06-12-2017 20:03:44'),
        "type":"direct"
      }
    ]
  }
}


let TimeLineSource = {
  fetchTimeLineData() {
    return  items
  }
};

module.exports = TimeLineSource;


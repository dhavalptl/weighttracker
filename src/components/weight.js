import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Segment} from 'semantic-ui-react';
import './weight.css';
class Weight extends Component {
    render() {
        const data = {
            labels: ['01-2017', '02-2017', '03-2017', '04-2017', '05-2017', '06-2017', '07-2017','08-2017', '09-2017', '10-2017','11-2017','12-2017'],
            datasets: [
              {
                label: 'Weight',
                fill: false,
                borderColor: 'lightsalmon',
                data: [65, 59, 80, 40, 56, 34, 60, 40, 56, 67, 40, 66]
              }
            ]
          };
        return (
            <Segment className="weight">
                <Line data={data} options={{
                    maintainAspectRatio: false,
                    /*scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    },*/
                    
                }} responsive={true} legend={{
                    display: false
                }}/>
            </Segment>
        );
    }
}

export default Weight;
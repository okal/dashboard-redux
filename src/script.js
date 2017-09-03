import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts/highcharts';
import {drawer} from 'material-components-web';

const sideBar = new drawer.MDCTemporaryDrawer(
    document.querySelector('.mdc-temporary-drawer')
);

document.querySelector('.mdc-toolbar__icon--menu').addEventListener(
    'click',
    () => sideBar.open = true
)

function renderChart(container) {
    Highcharts.chart(
        container,
        {

            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },

            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                series: {
                    pointStart: 2010
                }
            },

            series: [{
                name: 'Installation',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: 'Manufacturing',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: 'Sales & Distribution',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: 'Project Development',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: 'Other',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }]

        });
}
class Chart extends React.Component {
    componentDidMount() {
        renderChart(this.chartContainer)
    }
    componentWillUnmount() {
        this.chartContainer.children.remove()
    }
    render() {
        return (
            <div className="mdc-card">
                <section className="mdc-card__primary">
                    <h1 className="mdc-card__title mdc-card__title--large">Charts</h1>
                </section>
                <section className="mdc-card__media"
                         ref={(chartContainer) => this.chartContainer = chartContainer}>

                </section>
                <section className="mdc-card__actions">
                </section>
            </div>
        )
    }
}

ReactDOM.render(<Chart/>, document.querySelector('main'));

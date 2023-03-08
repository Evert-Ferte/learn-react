export default function ResultsTable() {
    // fetch('127.0.0.1:5000/output')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));

    // const apiCall = async () => {
    //     const response = await fetch('127.0.0.1:5000/output');
    //     const data = await response.json();

    //     console.log('Data from api:')
    //     console.log(data)
        
    //     return (
    //         <table>
    //             <tr>
    //                 <th>Time</th>
    //                 <th>Anomalous sensor</th>
    //                 <th>Value</th>
    //                 <th>Probability</th>
    //             </tr>
    //             <tr>
    //                 <td>data.time</td>
    //                 <td>data.sensor</td>
    //                 <td>data.value</td>
    //                 <td>data.probability</td>
    //             </tr>
    //         </table>
    //     );
    // }
    // apiCall.apply()
    
    let results = []
    let timeOptions = { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    let startTime = new Date("2023-02-26T18:34:18")
    let sensors = ['tanks.fuel.0.currentLevel.last', 'electrical.batteries.0.capacity.stateOfCharge.last', 'propulsion.3.oilPressure.last']
    let baseProbability = 0.98

    for (let i = 0; i < 30; i++) {
        let nSensor = sensors[randomInt(0, sensors.length)]

        results.push(
            <tr>
                <td>{new Date(startTime.getTime() - (3600000 * i)).toLocaleDateString(undefined, timeOptions)}</td>
                <td>{nSensor}</td>
                <td>{Math.round(((Math.random() - 0.5) * 1.5) * 100000) / 100000}</td>
                <td>{baseProbability + ((Math.random() - 0.5) * 4) * 0.01}</td>
            </tr>
        );
    }

    return (
        <table>
            <tr>
                <th>Time</th>
                <th>Anomalous sensor</th>
                <th>Value</th>
                <th>Probability</th>
            </tr>
            {results}
        </table>
    );
}

function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

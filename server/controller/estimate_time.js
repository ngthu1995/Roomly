const distance = require('google-distance-matrix');
const Est = require('../models/calculate_time')

exports.calculate = (req, res) => {
    const { origin, destination } = req.body;
    const calculate = new Est({ origin, destination })

    const result = distance.matrix(calculate.origin, calculate.destination, (err, distances) => {
        if (err) {
            return console.log(err)
        }
        if (!distances) {
            return console.log('no distances')
        }
        if (distance.status === 'OK') {
            for (var i = 0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                    }
                }
            }
        }
    })

}
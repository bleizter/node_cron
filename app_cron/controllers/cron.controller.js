const moment = require('moment');
class cronController {
    constructor () {}

    async scheduler () {
        var tgl = '2024-09-16 13:33:17';

        var dateSys = moment().format();

        const tglCheck = moment(tgl)
                    .add(process.env.MINUTES, 'minutes')
                    .format();

        try {
            if (tglCheck <= dateSys) {
                console.log('masuk sini')
            } else {
                console.log('skip')
            }
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = cronController;
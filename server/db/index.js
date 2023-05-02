const { db } = require('./db');
const { User } = require('./Models/User');
const init = async () => {
    try {
        await db.sync({ force: true }); //typically we don't want to do force true in production mode.
        // await User.create({ firstName: 'John' });

        console.log('connected');
    } catch (error) {
        console.log(error);
    }
};

init();

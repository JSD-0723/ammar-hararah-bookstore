import { Sequelize } from 'sequelize';
import sequelize from '../config/db';
import seedAuthors from './author';
import seedPublishers from './publisher';
import seedGenres from './genre';
import seedBooks from './book';
import seedUsers from './user';

const runSeeders = async () => {
    try {
        await sequelize.sync({ force: true });

        await seedAuthors(sequelize);
        await seedPublishers(sequelize);
        await seedGenres(sequelize);
        await seedBooks(sequelize);
        await seedUsers(sequelize);

        console.log('Seeding process completed successfully.');
    } catch (error) {
        console.error('Error in seeding process:', error);
    } finally {

        await sequelize.close();
    }
};

runSeeders();
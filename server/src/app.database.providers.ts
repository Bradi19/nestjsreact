import { Sequelize } from 'sequelize-typescript';
import { Cat } from './modules/cat.entity';

const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'nikos',
        password: 'Kolyan2010/',
        database: 'auctions',
      });
      sequelize.addModels([Cat]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
export default databaseProviders;

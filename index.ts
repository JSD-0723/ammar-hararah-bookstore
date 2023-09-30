import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './src/config/db';
import routes from './src/routes/router';
import passport from './src/auth/passport';
import dotenv from 'dotenv';
import authenticateMiddleware from './src/middlewares/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(passport.initialize());
app.use(bodyParser.json());

app.use(routes.authRoutes);
app.use(routes.bookRoutes);
app.use(routes.genreRoutes);
app.use(routes.authorRoutes);
app.use(routes.publisherRoutes);
app.use(routes.rentRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

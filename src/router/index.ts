import express from 'express';
import authentication from './authentication';
import users from './users';

const router = express.Router();

// default function return router object.
export default (): express.Router => {
  authentication(router);
  users(router);
  return router;
};

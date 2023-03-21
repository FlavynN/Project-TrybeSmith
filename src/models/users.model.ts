import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

const newUser = async (user: IUser): Promise<IUser> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `
  INSERT INTO Trybesmith.users 
  (username, vocation, level, password) 
  VALUES (?,?,?,?)`,
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const loginModel = async (login: ILogin): Promise<IUser[]> => {
  const { username } = login;

  const [rows] = await connection.execute<RowDataPacket[] & IUser[]>(
    `
    SELECT * FROM Trybesmith.users WHERE username = ?;
  `,
    [username],
  );
  return rows;
};

const usersModel = { newUser, loginModel };

export default usersModel;
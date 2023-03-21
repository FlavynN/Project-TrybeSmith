import { RowDataPacket } from 'mysql2';
import { ILogin, IUser } from '../interfaces';
import connection from './connection';

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

const usersModel = { loginModel };

export default usersModel;
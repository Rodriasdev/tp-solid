import * as dotenv from 'dotenv';
dotenv.config();

export type vr = string | undefined

export const PORT :vr= process.env.PORT;
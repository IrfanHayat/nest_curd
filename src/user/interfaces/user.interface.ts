import mongoose from 'mongoose';

export interface User extends mongoose.Document{
    id: string,
    name: string,
    address: string,
    email: string
}
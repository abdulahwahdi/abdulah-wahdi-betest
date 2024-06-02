import User, { IUser } from '../models/userModel';
import { producer } from '../config/kafka';
import { getCache, setCache, delCache } from '../config/redis';

export const createUser = async (userData: IUser) => {
    const user = new User(userData);
    await user.save();
    await setCache(user.id, JSON.stringify(user));
    await producer.send({
        topic: 'user-topic',
        messages: [{ value: JSON.stringify(user) }]
    });
    return user;
};

export const getAll = async() => {
    const users = await User.find();
    return users;
}

export const updateUser = async (id: string, updateData: Partial<IUser>) => {
    const user = await User.findByIdAndUpdate(id, updateData, { new: true });
    if (user) {
        await setCache(id, JSON.stringify(user));
        await producer.send({
            topic: 'user-topic',
            messages: [{ value: JSON.stringify(user) }]
        });
    }
    return user;
};

export const deleteUser = async (id: string) => {
    const user = await User.findByIdAndDelete(id);
    if (user) {
        await delCache(id);
        await producer.send({
            topic: 'user-topic',
            messages: [{ value: JSON.stringify({ id, deleted: true }) }]
        });
    }
    return user;
};

export const getUserByProperty = async (propName: string, propValue: string) => {
    try {
      const user = await User.findOne({ [propName]: propValue });
      return user;
    } catch (error) {
      console.error('Error retrieving user:', error);
      throw error;
    }
  };
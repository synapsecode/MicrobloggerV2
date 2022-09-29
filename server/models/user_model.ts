import { User } from '@prisma/client';
import prisma from './prisma_instance';

interface UserData {
    username: string,
    hashedPassword: string,
    fullName: string,
    dplink: string,
    coverlink: string,
    biolink?: string,
    location?: string,
    description?: string,
}

export default class UserModel {
    user_reference: User;
    constructor(instance: User) {
        this.user_reference = instance;
    }

    static create = async (data: UserData): Promise<UserModel> => {
        let u: User | null;
        //Check if exact user already exists
        u = await prisma.user.findFirst({
            where: { username: data.username }
        })
        if (u === null) {
            //Create user
            u = await prisma.user.create({
                data: data
            });
        }
        return new UserModel(u);
    }

    read = async () => { }

    update = async () => { }

    delete = async () => { }

    // ------------- [actions] -----------------
    follow = async (u: UserModel) => {

    }

    unfollow = async (u: UserModel) => {

    }

    removeFollower = async (u: UserModel) => {

    }

    // ------------- [ getters ] --------------

    getPosts = async () => { }

    getBookmarkedPosts = async () => { }
}

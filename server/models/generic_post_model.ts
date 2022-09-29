import { GenericPost } from '@prisma/client';
import prisma from './prisma_instance';

interface GenericPostData {

}

interface MicroblogData {

}

interface BlogData {

}

interface PollData {

}

export default class GenericPostModel {
    post_reference: GenericPost;
    constructor(instance: GenericPost) {
        this.post_reference = instance;
    }

    // static create = async (data: GenericPostData): Promise<GenericPostModel> => {
    // }

    read = async () => { }

    update = async () => { }

    delete = async () => { }

    // ----------------- [ actions ] -------------------
    add_like = async () => { }

    remove_like = async () => { }

    add_reshare = async () => { }

    add_quote = async () => { }

    // ------------- [ getters ] --------------
    getLikes = async () => { }

    getReshares = async () => { }

    getAuthors = async () => { }
}
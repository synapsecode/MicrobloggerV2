import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()
import { UserModel, GenericPostModel } from './models';

async function main() {

}

// Runner method
main().catch(e => console.error(e.message)).finally(async () => {
    await prisma.$disconnect();
})
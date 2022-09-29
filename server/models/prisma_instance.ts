import { PrismaClient } from '@prisma/client';
console.log('Creating PrismaClient');
const prisma = new PrismaClient()
export default prisma;
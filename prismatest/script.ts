import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

//prisma client interactions happen here
async function main() {

    // //creation
    // console.log('starting');
    // const user = await prisma.user.create({ data: { name: "Sally" } })
    // console.log('Created User => ', user)

    // //operations
    // const users = await prisma.user.findMany();
    // console.log('Found Users => ', users)

    // await prisma.user.deleteManyy();


    await prisma.user.deleteMany();
    const user: User = await prisma.user.create({
        data: {
            name: "Kyle",
            email: "kyle@gmail.com",
            age: 27,
            userPreference: {
                create: {
                    emailUpdates: true,
                }
            }
        }
    })

}

//Runner method
main().catch(e => console.error(e.message)).finally(async () => {
    await prisma.$disconnect();
})
import prisma from "../../../libs/prisma"

export async function POST(request){
    const { anime_mal_id, user_email, anime_name, anime_image } = await request.json()
    const data = { anime_mal_id, user_email, anime_name, anime_image }

    const createCollection = await prisma.collection.create({ data })

    if(!createCollection){
        return Response.json({ status:500, isCreated: false })
    } else{
        return Response.json({ status:200, isCreated: true })
    }
}

export async function DELETE(request){
    const { anime_mal_id, user_email } = await request.json()

    const deleteCollection = await prisma.collection.deleteMany({
        where : {
            anime_mal_id: anime_mal_id,
            user_email: user_email
        }
    })

    if(!deleteCollection){
        return new Response(JSON.stringify({ status:500, isDeleted: false}), { status: 500 })
    } else {
        return new Response(JSON.stringify({ status:200, isDeleted: true}), { status: 200 })
    }
    
}
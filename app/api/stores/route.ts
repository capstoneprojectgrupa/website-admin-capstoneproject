import { NextResponse } from "next/server"
import {auth} from "@clerk/nextjs"
import db from "@/lib/db";

export async function POST(req: Request){
    try{
        const {userId} = auth() 
        const body = await req.json();

        const {name} = body

        if (!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }

        if (!name) {
            return new NextResponse("Nama toko perlu di input", {status: 400})
        }

        const store = await db.store.create({
            data: {
                name,
                userId
            }
        })

        return NextResponse.json(store);

    } catch (error) {
        console.log("[STORES_POST]", error)
        return new NextResponse("Internal error", {status: 500})
    }
}
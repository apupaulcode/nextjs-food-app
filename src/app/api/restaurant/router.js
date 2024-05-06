import mongoose from "mongoose";
import { restaurantSchema } from "@/app/lib/restaurantModel"; // Assuming this is the correct path to your model
import {NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect('mongodb://127.0.0.1:27017/restaurant-db')
    .then(console.log('Db is connected'))
    .catch((error)=>{
        console.log('Error in connecting db')
        console.log(error);
    })
    const data = await restaurantSchema.find()
    console.log(data);

    return NextResponse.json(data)
}

import { NextResponse } from "next/server";
import {sql} from '@vercel/postgres';

//Handling POST request
export async function POST(req, res) {
    //Get the Form Data
    const Formdata = await req.formData();
    const title = Formdata.get('title');
    const startTime = Formdata.get('startTime');
    const endTime = Formdata.get('endTime');

    sql'INSERT INTO times (title,totaltime,userid) VALUES (${title}, ${endTime-startTime}, 1);';
    //Response 
    return NextResponse.json({title, startTime, endTime})
}
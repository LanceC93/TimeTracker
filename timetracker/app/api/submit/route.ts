import { sql } from '@vercel/postgres';
import { NextResponse } from "next/server";

//returns elapsed time from time input
function elapsedTime(start: string, end: string) {
    if(start && end) {

      //hours
      let endInt = parseInt(end.substring(0,2));     //stores hour of the end time
      let startInt = parseInt(start.substring(0,2));   //stores hour of the start time
      let hour = 0;

      if(endInt - startInt < 0) {                            //checks for times starting in pm and ending in am
        hour = (endInt - startInt + 24);
      }
      hour = (endInt - startInt);

      //minutes
      endInt = parseInt(end.substring(3), 10);     //stores minute of the end time
      startInt = parseInt(start.substring(3), 10);   //stores minute of the start time
      
      if(endInt > startInt) { 
        return [hour, (endInt-startInt)];
      }

      return [hour,(((60 - startInt) + endInt) % 60)];
      } 

      return null;
}

//Handling POST request
export async function POST(req, res) {
    //Get the Form Data
    const Formdata = await req.formData();
    const title = Formdata.get('title');
    const startTime = Formdata.get('startTime');
    const endTime = Formdata.get('endTime');
    const elapsed = elapsedTime(startTime, endTime);

    try {
        await sql`INSERT INTO times (title,totaltime) VALUES (${title}, ${elapsed});`
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    //Response 
    return NextResponse.json({title, startTime, endTime})
}
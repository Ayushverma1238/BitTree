import clientPromise from "@/lib/mongodb"; 

export async function POST(req) { 
    const body = await req.json()
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection('links');

    const doc = await collection.findOne({handle: body.handle});
    if(doc){
        return Response.json({success: false, error:true, result:null, message:"You are already added"})
    }

    const result = await collection.insertOne(body)
    // console.log(body);

    
    return Response.json({success: true, error:false, result:result, message:"Your BitTree has been added Enjoy!"})
}
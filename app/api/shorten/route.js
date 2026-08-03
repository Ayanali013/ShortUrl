import clientPromise from "@/lib/mongodb";
import link from "@/model/link";

export async function POST(request) {
  try {
    // Connect to MongoDB

  const mngdb = await clientPromise;

  const db = mngdb.db("ShortLinks")
  const collection = db.collection("url")

    // Get data from frontend
    const data = await request.json();
    console.log(data)

        // Backend Validation
    if (!data.url || !data.shortUrl) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }


    // Check if short URL already exists
    const doc = await collection.findOne({shorturl: data.shortUrl });

    if (doc) {
      return Response.json(
        {
          success: false,
          message: "Short URL already exists",
        },
        { status: 409 }
      );
    }

    // saving the data in database

    const result = await collection.insertOne({
      url: data.url,
      shortUrl : data.shortUrl
    })
console.log(result)



    // Save to database
    // const inp = await link.create({
    //   url,
    //   shorturl,
    // });
    //  console.log(inp)

    // Success response
    return Response.json(
      {
        success: true,
        error:false,
        message: "Generated Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error,
      },
      { status: 500 }
    );
  }
}
import clientPromise from "@/lib/mongodb";
import link from "@/model/link";

export async function POST(request) {
  try {
    // Connect to MongoDB
  const mngdb = await clientPromise;

  const db = mngdb.db("ShortLinks")
  const collection = db.collection("url")

    // Get data from frontend
    const { url, shorturl } = await request.json();
    console.log(url)

    // Backend Validation
    if (!url || !shorturl) {
      return Response.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 }
      );
    }

    // Check if short URL already exists
    const existing = await link.findOne({ shorturl });

    if (existing) {
      return Response.json(
        {
          success: false,
          message: "Short URL already exists",
        },
        { status: 409 }
      );
    }

    // Save to database
    const inp = await link.create({
      url,
      shorturl,
    });
     console.log(inp)

    // Success response
    return Response.json(
      {
        success: true,
        message: "Generated Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
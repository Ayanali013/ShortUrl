import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
   const mngdb = await clientPromise;

  const db = mngdb.db("ShortLinks")
  const collection = db.collection("url")

const data = await collection.findOne({
    shortUrl : params.shortUrl,
})
console.log(params)
  if (!data) {
    return <h1>404 - Short URL Not Found</h1>;
  }

  redirect(data.url);
}
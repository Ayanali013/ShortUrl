// import clientPromise from "@/lib/mongodb";
// import { redirect } from "next/navigation";


// export default async function page(params) {

// const mngdb = await clientPromise;
//    const shorturl =  params.shorturl
//   const db = mngdb.db("ShortLinks")
//   const collection = db.collection("url")

//   const doc = await collection.findOne ({
//     shorturl : shorturl
//   })
//   if (doc){
//     redirect(doc.url)
//   }
//   else{
//     redirect(`${NEXT_PUBLIC_HOST}`)
//   }

 




  
import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function Page({ params }) {
  const mngdb = await clientPromise;

  const db = mngdb.db("ShortLinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({
    shorturl: params.shorturl,
  });

  if (doc) {
    redirect(doc.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }
}
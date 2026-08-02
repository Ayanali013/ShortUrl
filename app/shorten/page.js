"use client"

import React from "react";
import { useState } from "react";



const Shorten = () => {

  const [url, seturl] = useState("")
  const [shortUrl, setshortUrl] = useState("")
  const [generate, setgenerate] = useState(false)

  const genLink = async (params) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    await fetch("/api/shorten", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));

    seturl("")
    setshortUrl("")

  }






  return (
    <main className="min-h-screen bg-purple-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-lg rounded-xl bg-purple-100 p-6 sm:p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl sm:text-3xl font-bold">
          Generate Form
        </h1>


        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter the url"
            onChange={e => { seturl(e.target.value) }}
            onKeyDown={(e) => {
    if (e.key === "Enter") {
      document.getElementById("generateBtn").click();}}}
            className="w-full rounded-md border border-gray-300 p-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="text"
            placeholder="Enter the shortUrl"
            onChange={e => { setshortUrl(e.target.value) }}
            className="w-full rounded-md border border-gray-300 p-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
          />

          <button onClick={genLink} id = " generateBtn"className=" w-full rounded-md bg-blue-600 py-3 text-sm sm:text-base font-semibold text-white transition active:translate-y-0.75  hover:bg-blue-700">
            Generate
          </button>
        </div>
      </div>
    </main>
  );
};

export default Shorten;

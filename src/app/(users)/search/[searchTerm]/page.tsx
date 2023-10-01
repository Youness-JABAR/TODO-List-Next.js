import React from "react";

type PageProps = {
  params: {
    searchTerm: string;
  };
};

type SearchResult = {
  organic: [
    {
      position: number;
      title: string;
      link: string;
      snippet: string;
    }
  ];
};

const search = async (searchTerm: string) => {

    var myHeaders = new Headers();
myHeaders.append("X-API-KEY", `${process.env.API_KEY}`);
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "q": `${searchTerm}`
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
};

const res = await fetch("https://google.serper.dev/search", requestOptions);
  const data : SearchResult = await res.json();
  return data;
};
async function SearchResults({   params: { searchTerm } }: PageProps) {
  const searchResults = await search(searchTerm);

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
      <ol className="space-y-5 p-5">
        { searchResults.organic && searchResults.organic.map((result) => (
          <li key={result.position} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SearchResults;

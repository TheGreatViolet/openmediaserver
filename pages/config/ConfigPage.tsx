import Navbar from "components/Navbar";
import { useEffect, useState } from "react";
import { MediaServerConfig } from "types";
import { IoMdAdd } from "react-icons/io";

export function ConfigPage() {
  const [config, setConfig] = useState<MediaServerConfig | null>(null);

  useEffect(() => {
    const res = fetch("/api/config");

    res.then((res) => {
      res.json().then((json) => {
        setConfig(json as MediaServerConfig);
      });
    });
  });

  return (
    <>
      <div className="w-screen h-screen flex flex-col bg-storm-gray-800">
        <Navbar />

        <div className="flex-1 flex flex-col p-4">
          <h1 className="text-3xl font-bold text-storm-gray-50">Config</h1>

          {/* Media Directories */}

          <div>
            <h2 className="mt-8 text-2xl font-bold text-storm-gray-50">
              Media Directories
            </h2>
            <p className="mt-2 text-xl text-storm-gray-50">
              These are the directories where media will be searched for
            </p>
            <p className="mt-1 text-lg text-storm-gray-50">
              Current directories:
            </p>
            <ul className="list-none bg-jacksons-purple-600 pl-2 w-56 rounded-md">
              {config?.mediaLocations.map((location) => (
                <li className="text-storm-gray-50 list-item">{location}</li>
              ))}

              {config?.mediaLocations.length === 0 ? (
                <li className="text-storm-gray-50 list-item">
                  No directories configured
                </li>
              ) : null}
            </ul>
            <div className="flex flex-row mt-2 w-56">
              <div className="flex-1" />

              <button className="bg-jacksons-purple-600 text-storm-gray-50 p-2 rounded-md">
                <h3>Add</h3>
              </button>

              <button className="ml-2 bg-jacksons-purple-600 text-storm-gray-50 p-2 rounded-md">
                <h3>Remove</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

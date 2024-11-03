"use client";

import CollectionCard from "./CollectionCard";

const ClientCollection = ({ collection, userEmail }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-6 mt-5">
      {collection.slice(0, 5).map((collect, index) => (
        <CollectionCard key={index} collect={collect} userEmail={userEmail} />
      ))}
    </div>
  );
};

export default ClientCollection;

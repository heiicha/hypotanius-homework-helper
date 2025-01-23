/*
This file is only the storage of the 4 forms data. It is not a form itself. [MASTER FILE]
*/
import React, { useState, useEffect } from "react";

export default function Master() {
  const [waterfall, setWaterfall] = useState(null);
  const [others, setOthers] = useState(null);
  const [management, setManagement] = useState(null);
  const [identity, setIdentity] = useState(null);

  useEffect(() => {
    const savedWaterfall = localStorage.getItem("waterfall");
    const savedOthers = localStorage.getItem("others");
    const savedManagement = localStorage.getItem("management");
    const savedIdentity = localStorage.getItem("identity");

    if (savedWaterfall) setWaterfall(JSON.parse(savedWaterfall));
    if (savedOthers) setOthers(JSON.parse(savedOthers));
    if (savedManagement) setManagement(JSON.parse(savedManagement));
    if (savedIdentity) setIdentity(JSON.parse(savedIdentity));
  }, []);

  return (
    <div>
      <h1>Master Data</h1>

      <section>
        <h2>Waterfall</h2>
        {waterfall ? (
          <pre>{JSON.stringify(waterfall, null, 2)}</pre>
        ) : (
          <p>No Waterfall data found.</p>
        )}
      </section>

      <section>
        <h2>Others</h2>
        {others ? (
          <pre>{JSON.stringify(others, null, 2)}</pre>
        ) : (
          <p>No Others data found.</p>
        )}
      </section>

      <section>
        <h2>Management</h2>
        {management ? (
          <pre>{JSON.stringify(management, null, 2)}</pre>
        ) : (
          <p>No Management data found.</p>
        )}
      </section>

      <section>
        <h2>Identity</h2>
        {identity ? (
          <pre>{JSON.stringify(identity, null, 2)}</pre>
        ) : (
          <p>No Identity data found.</p>
        )}
      </section>
    </div>
  );
}

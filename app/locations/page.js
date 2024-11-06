"use client";

import React from "react";
import Location from "../../components/location-data-table";
import AppSidebar from "../comp/AppSidebar";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

function page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "locations"));
      const locationsData = querySnapshot.docs.map((doc) => doc.data()); 
      console.log(locationsData);
      setData(locationsData); 
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Location data={data} />
      </div>
      <div>
        <AppSidebar />
      </div>
    </div>
  );
}

export default page;

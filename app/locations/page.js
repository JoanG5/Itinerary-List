"use client";

import React from "react";
import Location from "../../components/location-data-table";
import AppSidebar from "../comp/AppSidebar";
import SignIn from "../comp/SignIn";

import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

function LocationTable() {
  const [data, setData] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      const map = {
        "slightly-interested": "Slightly Interested",
        "very-interested": "Very Interested",
        interested: "Interested",
      };
      const querySnapshot = await getDocs(collection(db, "locations"));
      const locationsData = querySnapshot.docs
        .map((doc) => {
          const data = doc.data();
          return {
            ...data,
            interestLevel: map[data.interestLevel] || data.interestLevel,
          };
        })
        .sort((a, b) => {
          const order = {
            "Very Interested": 1,
            Interested: 2,
            "Slightly Interested": 3,
          };
          return order[a.interestLevel] - order[b.interestLevel];
        });
      setData(locationsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        {user ? (
          <h1>
            <Location data={data} />
            <AppSidebar />
          </h1>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
}

export default LocationTable;

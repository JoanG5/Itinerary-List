"use client";

import React from "react";
import Submit from "../comp/Submit"
import AppSidebar from "../comp/AppSidebar";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

function page() {
  return (
    <div>
      <div>
        <Submit />
      </div>
      <div>
        <AppSidebar />
      </div>
    </div>
  );
}

export default page;

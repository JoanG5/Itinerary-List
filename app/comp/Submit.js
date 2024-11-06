"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, Toaster } from "sonner";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Component() {
  const [locationName, setLocationName] = useState("");
  const [address, setAddress] = useState("");
  const [interestLevel, setInterestLevel] = useState("");
  const [user] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newLocation = await addDoc(collection(db, "locations"), {
      name: user.displayName,
      locationName,
      address,
      interestLevel,
    });
    console.log("Form submitted:", {
      name,
      locationName,
      address,
      interestLevel,
    });
    toast.success("Form submitted successfully!");

    setLocationName("");
    setAddress("");
    setInterestLevel("");
  };

  return (
    <>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Location Interest Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location-name">Name of Location</Label>
              <Input
                id="location-name"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
                placeholder="Enter location name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter address"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest-level">Interest Level</Label>
              <Select
                value={interestLevel}
                onValueChange={setInterestLevel}
                required
              >
                <SelectTrigger id="interest-level">
                  <SelectValue placeholder="Select your interest level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="slightly-interested">
                    Slightly Interested
                  </SelectItem>
                  <SelectItem value="interested">Interested</SelectItem>
                  <SelectItem value="very-interested">
                    Very Interested
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
      <Toaster />
    </>
  );
}

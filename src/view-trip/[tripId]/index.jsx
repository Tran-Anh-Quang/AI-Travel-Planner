import React, { useEffect } from "react";
import { toast } from "sonner";
import InforSection from "./components/InforSection";
import { useParams } from "react-router-dom";

function ViewTrip() {
  const { tripId } = useParams();
  const [tripData, setTripData] = React.useState();

  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);

  /* *
    Used to get Trip information from Firebase
    */
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTripData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      toast("No trip found!");
    }
  };
  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Information Section */}
      <InforSection trip={tripData} />

      {/* Recommend Hotels */}

      {/* Daily plan */}

      {/* Footer */}
    </div>
  );
}

export default ViewTrip;

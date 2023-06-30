import { type Metadata } from "next";
import GoogleMap from "~/clients/components/GoogleMap";

export const metadata: Metadata = {
  title: "Map",
  description: "Generated by create-t3-app",
};

const MapPage = () => {
  const address = "3970 Carrigan court, Burnaby, BC";

  return <GoogleMap address={address} />;
};

export default MapPage;

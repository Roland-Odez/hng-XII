import FormContainer from "@/components/FormContainer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen px-5 lg:px-24 lg:pt-9 pt-3">
      <Navbar />
      <FormContainer />
    </div>
  );
}

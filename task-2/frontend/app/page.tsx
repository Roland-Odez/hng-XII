import FormContainer from "@/components/FormContainer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="px-5 lg:px-24 lg:pt-9 pt-3">
      <Navbar />
      <FormContainer />
    </div>
  );
}

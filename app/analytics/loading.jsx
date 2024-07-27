import { LoaderCircle } from "lucide-react";
const loading = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <LoaderCircle className="animate-spin h-12 w-12" />
    </div>
  );
};

export default loading;

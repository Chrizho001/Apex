import api from "../axios/api";
import { useState } from "react";
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("api/subscribe/", { email });

      setLoading(false);
      setErrors({});
      // toast.success("Subscription successful");
      const msg = response.data.detail;
      toast.success(msg);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data || {});
      setLoading(false);
      toast.error("Subscription failed");
    }
  };

  return (
    <section className="container mx-auto mt-12 md:px-12">
      <div className="bg-gray-200 py-4  flex flex-col md:flex-row items-center justify-between rounded-md px-3">
        <div className="w-full md:w-[300px]">
          <h1 className="text-3xl font-bold text-black">
            Subscribe To Our NewsLetter
          </h1>
        </div>
        {/* newsletter form */}
        <div className="w-full flex flex-col gap-y-3  md:w-[40%]">
          <h1 className="text-sm font-normal text-black py-2">
            Stay in the loop with expert fitness tips, nutrition advice,
            upcoming events, and exclusive member offers — delivered straight to
            your inbox every week. Be the first to know and never miss out.
          </h1>
          <div className="flex items-center bg-gray-300 rounded-full px-3 py-3">
            <div className="flex flex-col w-full ">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                value={email}
                name="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 w-full "
                id=""
              />
            </div>
            {!loading ? (
              <button
                onClick={handleSubmit}
                className="bg-orange-500 px-2 py-2 text-white text-sm rounded-full font-bold"
              >
                Subscribe
              </button>
            ) : (
              <div className="flex w-fit items-center justify-center ">
                <Spinner
                  color="success"
                  aria-label="Success spinner example"
                  size="lg"
                />
              </div>
            )}
          </div>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
        )}
        {errors.non_field_errors && (
          <p className="text-red-500 text-sm mt-2">
            {errors.non_field_errors[0]}
          </p>
        )}
        {errors.error && (
          <p className="text-red-500 text-sm mt-2">{errors.error}</p>
        )}
        {errors.detail && (
          <p className="text-red-500 text-sm mt-2">{errors.detail}</p>
        )}
      </div>
    </section>
  );
};

export default NewsLetter;

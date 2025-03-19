import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  first: z.string().min(1, "First name is required"),
  last: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  organisation: z.string().min(1, "Organisation is required"),
  message: z.string().optional(),
});

function Touch() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const [message, setMessage] = React.useState("");

  const onSubmit = async (formData) => {
    setMessage("");
    try {
      const res = await fetch(
        "https://next-step-backend-bqug.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Email sent successfully!");
        reset();
      } else {
        setMessage(`❌ Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send email. Please try again.");
    }
  };

  return (
    <div>
      <section className="py-5" id="contact">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-lg-6">
              <h3 className="fw-bold fs-2 mb-4">Get in touch</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="row g-4">
                <div className="col-md-6">
                  <label>
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("first")}
                    className="form-control"
                  />
                  <p className="text-danger">{errors.first?.message}</p>
                </div>
                <div className="col-md-6">
                  <label>
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("last")}
                    className="form-control"
                  />
                  <p className="text-danger">{errors.last?.message}</p>
                </div>
                <div className="col-md-6">
                  <label>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="form-control"
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                <div className="col-md-6">
                  <label>
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("phone")}
                    className="form-control"
                  />
                  <p className="text-danger">{errors.phone?.message}</p>
                </div>
                <div className="col-md-12">
                  <label>
                    Organisation <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("organisation")}
                    className="form-control"
                  />
                  <p className="text-danger">{errors.organisation?.message}</p>
                </div>
                <div className="col-md-12">
                  <label>Message</label>
                  <textarea
                    {...register("message")}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btnPrimary">
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              {message && (
                <p
                  className="mt-3"
                  style={{ color: message.startsWith("✅") ? "green" : "red" }}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Touch;

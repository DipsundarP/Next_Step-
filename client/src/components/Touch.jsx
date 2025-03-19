import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  first: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z]+$/, "First name must contain only letters"),
  last: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z]+$/, "Last name must contain only letters"),
  email: z.string().email("Invalid email format"),
  phone: z
    .string()
    .regex(
      /^\d{10}$/,
      "Phone number must be exactly 10 digits and start with a non-zero"
    ),
  organisation: z.string().min(1, "Organisation is required"),
  message: z.string().optional(),
});

function Touch() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData) => {
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
        reset();
      }
    } catch (error) {}
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
                  <input {...register("first")} className="form-control" />
                  <p className="text-danger">{errors.first?.message}</p>
                </div>
                <div className="col-md-6">
                  <label>
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input {...register("last")} className="form-control" />
                  <p className="text-danger">{errors.last?.message}</p>
                </div>
                <div className="col-md-6">
                  <label>
                    Email <span className="text-danger">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    className="form-control"
                  />
                  <p className="text-danger">{errors.email?.message}</p>
                </div>
                <div className="col-md-6">
                  <label>
                    Phone <span className="text-danger">*</span>
                  </label>
                  <input {...register("phone")} className="form-control" />
                  <p className="text-danger">{errors.phone?.message}</p>
                </div>
                <div className="col-md-12">
                  <label>
                    Organisation <span className="text-danger">*</span>
                  </label>
                  <input
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

            <div className="col-md-6 col-lg-5">
              <p>6A, Kiran Sankar Roy Road, Kolkata-700001, India</p>
              <p>engage@nextsteps.net.in</p>
              <p>+91 9830320209 / 9836285620</p>
              <p>
                Follow us:
                <a
                  href="https://www.linkedin.com/company/next-steps-communications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  <i className="ri-linkedin-box-fill fs-4"></i>
                </a>
                <a
                  href="https://wa.me/919836285620"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginLeft: "1px",
                  }}
                >
                  <i className="ri-whatsapp-fill fs-4"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Touch;

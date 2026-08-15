"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send } from "lucide-react";
import { projectTypes, budgetRanges } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  details: z
    .string()
    .min(10, "Please provide at least 10 characters of detail"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClasses =
    "w-full rounded-btn border border-white/10 bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-muted/60 transition-colors focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30";

  return (
    <div className="card-surface p-6 md:p-8">
      <h3 className="text-xl font-semibold text-text-primary">
        Start Your Project
      </h3>

      {submitted ? (
        <div className="mt-6 rounded-btn border border-accent/20 bg-accent/5 p-6 text-center">
          <p className="font-medium text-accent">Thank you for your inquiry!</p>
          <p className="mt-2 text-sm text-text-muted">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="mb-1.5 block text-sm text-text-muted"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              className={cn(
                inputClasses,
                errors.fullName && "border-red-500/50",
              )}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm text-text-muted"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={cn(inputClasses, errors.email && "border-red-500/50")}
              placeholder="john@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="mb-1.5 block text-sm text-text-muted"
            >
              Company (Optional)
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className={inputClasses}
              placeholder="Your Company"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="mb-1.5 block text-sm text-text-muted"
              >
                Project Type
              </label>
              <select
                id="projectType"
                {...register("projectType")}
                className={cn(
                  inputClasses,
                  errors.projectType && "border-red-500/50",
                )}
                defaultValue=""
              >
                <option value="" disabled>
                  Select type
                </option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-surface">
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                className="mb-1.5 block text-sm text-text-muted"
              >
                Estimated Budget
              </label>
              <select
                id="budget"
                {...register("budget")}
                className={cn(
                  inputClasses,
                  errors.budget && "border-red-500/50",
                )}
                defaultValue=""
              >
                <option value="" disabled>
                  Select budget
                </option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range} className="bg-surface">
                    {range}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label
              htmlFor="details"
              className="mb-1.5 block text-sm text-text-muted"
            >
              Project Details
            </label>
            <textarea
              id="details"
              rows={5}
              {...register("details")}
              className={cn(
                inputClasses,
                "resize-none",
                errors.details && "border-red-500/50",
              )}
              placeholder="Tell us about your project..."
            />
            {errors.details && (
              <p className="mt-1 text-xs text-red-400">
                {errors.details.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full gap-2"
            disabled={isSubmitting}
          >
            <Send className="h-4 w-4" />
            {isSubmitting ? "Submitting..." : "Submit Project Inquiry"}
          </Button>
        </form>
      )}
    </div>
  );
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function InquiryForm({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      await emailjs.send(
        "service_zdtytg8",
        "template_z6jr6h6",
        {
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          mobile: String(formData.get("mobile") || ""),
          destination: String(
            formData.get("destination") || ""
          ),
          month: String(formData.get("month") || ""),
          travelers: String(
            formData.get("travelers") || ""
          ),
        },
        "gPZNH787tLpMV8SD0"
      );

      toast.success(
        "Inquiry submitted successfully!"
      );

      form.reset();
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to send inquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`grid gap-3 ${
        compact ? "md:grid-cols-5" : "md:grid-cols-2"
      }`}
    >
      <Input
        name="name"
        placeholder="Your name"
        required
      />

      <Input
        name="email"
        type="email"
        placeholder="Email address"
        required
      />

      <Input
        name="mobile"
        type="tel"
        pattern="[0-9+ ]{7,}"
        placeholder="Mobile number"
        required
      />

      <Input
        name="destination"
        placeholder="Destination (e.g. Manali)"
        required
      />

      <Select
        name="month"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Travel month
        </option>

        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>

      <Input
        name="travelers"
        type="number"
        min={1}
        max={30}
        placeholder="Travelers"
        required
      />

      <button
        type="submit"
        disabled={submitting}
        className={`${
          compact ? "md:col-span-5" : "md:col-span-2"
        } mt-1 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:bg-primary/90 disabled:opacity-60`}
      >
        {submitting
          ? "Sending..."
          : "Request a Callback"}
      </button>
    </form>
  );
}

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
    />
  );
}

function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
    >
      {children}
    </select>
  );
}
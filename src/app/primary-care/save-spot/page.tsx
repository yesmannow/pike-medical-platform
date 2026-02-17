import { redirect } from "next/navigation";

/**
 * Primary care does not use "Save My Spot"; redirect to Book Appointment.
 */
export default function PrimaryCareSaveSpotPage() {
  redirect("/primary-care/book");
}

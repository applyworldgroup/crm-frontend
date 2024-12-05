import { z } from "zod";
import Appointment from "../../page";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  address: z.string(),
  phone: z.string(),
  appointmentDate: z.string(),
  reasonOfVisit: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

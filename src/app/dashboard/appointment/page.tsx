import BookAppointment from "@/app/components/book-appointment";import { FC } from "react";
interface AppointmentProps {}
const Appointment: FC<AppointmentProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-xl">Appointments</div>
      <BookAppointment />
    </div>
  );
};

export default Appointment;

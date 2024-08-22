import BookAppointment from "@/app/components/book-appointment";import { FC } from "react";
import { columns } from "./table/components/columns";
import { DataTable } from "./table/components/data-table";
interface AppointmentProps {}
const Appointment: FC<AppointmentProps> = ({}) => {
  const tasks = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      address: "123 Main St, Springfield, IL",
      phone: "+1234567890",
      appointmentDate: "2024-09-15T10:30:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      address: "456 Elm St, Metropolis, IL",
      phone: "+1234567891",
      appointmentDate: "2024-09-20T14:00:00.000Z",
      reasonOfVisit: "Routine Checkup",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael.johnson@example.com",
      address: "789 Oak St, Gotham, NY",
      phone: "+1234567892",
      appointmentDate: "2024-10-01T09:00:00.000Z",
      reasonOfVisit: "Follow-up",
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Brown",
      email: "emily.brown@example.com",
      address: "321 Pine St, Smallville, KS",
      phone: "+1234567893",
      appointmentDate: "2024-09-25T11:15:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 5,
      firstName: "Chris",
      lastName: "Wilson",
      email: "chris.wilson@example.com",
      address: "654 Maple St, Star City, CA",
      phone: "+1234567894",
      appointmentDate: "2024-09-28T13:30:00.000Z",
      reasonOfVisit: "Checkup",
    },
    {
      id: 6,
      firstName: "Sarah",
      lastName: "Lee",
      email: "sarah.lee@example.com",
      address: "987 Cedar St, Central City, OH",
      phone: "+1234567895",
      appointmentDate: "2024-09-22T15:45:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 7,
      firstName: "David",
      lastName: "Martinez",
      email: "david.martinez@example.com",
      address: "159 Birch St, Coast City, CA",
      phone: "+1234567896",
      appointmentDate: "2024-10-05T08:30:00.000Z",
      reasonOfVisit: "Routine Checkup",
    },
    {
      id: 8,
      firstName: "Linda",
      lastName: "Taylor",
      email: "linda.taylor@example.com",
      address: "753 Walnut St, Blüdhaven, NJ",
      phone: "+1234567897",
      appointmentDate: "2024-09-30T10:00:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 9,
      firstName: "Robert",
      lastName: "Anderson",
      email: "robert.anderson@example.com",
      address: "951 Cherry St, Fawcett City, MA",
      phone: "+1234567898",
      appointmentDate: "2024-10-10T16:00:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 10,
      firstName: "Karen",
      lastName: "Harris",
      email: "karen.harris@example.com",
      address: "852 Fir St, Keystone City, PA",
      phone: "+1234567899",
      appointmentDate: "2024-09-26T14:30:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 11,
      firstName: "Daniel",
      lastName: "Clark",
      email: "daniel.clark@example.com",
      address: "147 Ash St, Hub City, IL",
      phone: "+1234567800",
      appointmentDate: "2024-10-02T12:45:00.000Z",
      reasonOfVisit: "Follow-up",
    },
    {
      id: 12,
      firstName: "Jessica",
      lastName: "Lopez",
      email: "jessica.lopez@example.com",
      address: "369 Spruce St, Midway City, IL",
      phone: "+1234567801",
      appointmentDate: "2024-09-18T10:15:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 13,
      firstName: "Matthew",
      lastName: "King",
      email: "matthew.king@example.com",
      address: "741 Willow St, National City, CA",
      phone: "+1234567802",
      appointmentDate: "2024-09-21T09:30:00.000Z",
      reasonOfVisit: "Routine Checkup",
    },
    {
      id: 14,
      firstName: "Laura",
      lastName: "Young",
      email: "laura.young@example.com",
      address: "258 Cypress St, Opal City, FL",
      phone: "+1234567803",
      appointmentDate: "2024-10-12T11:30:00.000Z",
      reasonOfVisit: "Consultation",
    },
    {
      id: 15,
      firstName: "Steven",
      lastName: "Hall",
      email: "steven.hall@example.com",
      address: "369 Redwood St, Midway City, IL",
      phone: "+1234567804",
      appointmentDate: "2024-09-29T13:45:00.000Z",
      reasonOfVisit: "Consultation",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-xl">Appointments</div>
      <BookAppointment />
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};

export default Appointment;

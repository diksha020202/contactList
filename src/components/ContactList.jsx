import { useState } from "react";
import ContactCard from "./ContactCard";

const initData = [
  {
    id: 1,
    name: "Annette",
    email: "annette@annette.com",
    phone: "+91-92419214231"
  },
  {
    id: 2,
    name: "Theresa",
    email: "Theresa@Theresa.com",
    phone: "+91-92419214231"
  },
  {
    id: 3,
    name: "Cody",
    email: "Cody@Cody.com",
    phone: "+91-92419214231"
  },
  {
    id: 4,
    name: "Max",
    email: "Max@Max.com",
    phone: "+91-92419214231"
  },
  {
    id: 5,
    name: "Marvin",
    email: "Marvin@Marvin.com",
    phone: "+91-92419214231"
  },
  {
    id: 6,
    name: "Brooklyn",
    email: "Brooklyn@Brooklyn.com",
    phone: "+91-92419214231"
  }
];

function ContactList() {
  const [data, setData] = useState(initData);

  return (
    <div>
      {data.map((item) => (
        <ContactCard
          key={item.id}
          name={item.name}
          email={item.email}
          phone={item.phone}
        />
      ))}
    </div>
  );
}

export default ContactList;

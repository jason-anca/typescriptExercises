interface Friend {
    name: string;
    phone: string;
    age: number
}

const friend1 = {
    name: "Mate Domonics",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2 = {
    name: "Cormac Farrell",
    phone: "086--12345",
    age: 31,
  };
  
  const friends = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
  const colleague1 = {
    name: "Stephen Glennon",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Niall Jordan",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Owen O'Neill",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);
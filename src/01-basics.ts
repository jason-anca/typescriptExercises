interface Friend {
    name: string;
    phone: string;
    age: number
}

interface Colleague {
  name: string;
  department: string;
  contact: { email: string, extension: number }
}


const friend1: Friend = {
    name: "Mate Domonics",
    phone: "087-12345",
    age: 25,
  };
  
  const friend2: Friend = {
    name: "Cormac Farrell",
    phone: "086--12345",
    age: 31,
  };
  
  const friends = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Stephen Glennon",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Niall Jordan",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
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
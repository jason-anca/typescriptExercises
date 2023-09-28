import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass, Matching } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial ) : Friend {
  return { ...friend, ...updates}
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}))

function secureFindFriends(friends: Friend[], criteria: (f: Friend) => boolean): SecureFriendContact[] {
    const matches = friends.filter(criteria);
    return matches.map((f) => {
      const secure: SecureFriendContact = {
        name: f.name,
        phone: f.phone,
      };
      return secure;
    });
  }
  let result = secureFindFriends(
      friends,
      (f: Friend) => f.age < 30
  )
  console.log(result)

  function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
      name: colleague.name,
      department: colleague.department,
      passCode: passCode,
    };
  }
  console.log(generateEventPass(colleagues.current[0]));

  //Added a colleague with matching name since a friend and colleague do not have matching names.
  const colleague: Colleague = {
    name: "Mate Domonics",
    department: "I.T.",
    contact: {
      email: "mdomonics@it.com",
      extension: 45,
    },
  };
  //Adding the colleague to the Colleagues array so it can be read
  colleagues.current.push(colleague)

  function intersection(friends: Friend[],colleagues: Colleague[]): Matching[] {
    let result: Matching[] = []
    friends.reduce((res, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        let newMatch : Matching = {
            name: colleague.name,
            age: friend.age,
            contact: {
                email: colleague.contact.email,
                extension: colleague.contact.extension
            }
        }
        result.push(newMatch)
      }
      return res;
    }, result);
    return result;
  }
  
  console.log(intersection(friends, colleagues.current));
  
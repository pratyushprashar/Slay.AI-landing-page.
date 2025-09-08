import {initializeApp} from "firebase/app"
import {getDatabase,set,ref, push, child, get, update, onValue} from "firebase/database"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAP8nt5Em7VvJVDZ3QO0ikJP2rhNgFwKCU",
  authDomain: "slamai-30c4a.firebaseapp.com",
  databaseURL: "https://slamai-30c4a-default-rtdb.firebaseio.com",
  projectId: "slamai-30c4a",
  storageBucket: "slamai-30c4a.firebasestorage.app",
  messagingSenderId: "499322844254",
  appId: "1:499322844254:web:82ed7a2bd432d70a4570cf",
  measurementId: "G-R13YSKMPN3"
};

export class Service {

    constructor() {
    const app = initializeApp(firebaseConfig);
    this.db=getDatabase(app)
    
  }

async storeEmail(email) {
  try {
    const safeKey = email.replace(/\./g, ','); // Firebase doesn't allow dots in keys
    const emailRef = ref(this.db, `users/emails/${safeKey}`);

    const snapshot = await get(emailRef);
    if (snapshot.exists()) {
      console.warn("Duplicate email:", email);
      return "duplicate";
    }

    await set(emailRef, { email });
    return true;
  } catch (error) {
    console.error("storeEmail error:", error);
    return false;
  }
}




async  getAllEmails() {
  try {
    
    const snapshot = await get(child(ref(this.db), "users/emails"));

    if (snapshot.exists()) {
      const data = snapshot.val();

      // Convert the object into an array of emails
      const emails = Object.values(data).map(entry => entry.email);
      

      return emails;
    } else {
      console.log("No data found.");
      return [];
    }
  } catch (error) {
    console.error("getAllEmails error", error);
    return [];
  }
}

async storeComments(userName,newOpinion){
 
    try {
       const  commentsref= ref(this.db,"comments/comment")
        const newCommentsref=push(commentsref)

        const finalOpinion = newOpinion.opinion ? newOpinion.opinion : newOpinion;
        await set(newCommentsref,{
            name:userName,
            opinion:finalOpinion,
            isVisible:false,
            // likes: 0,
            timeStamp:Date.now()
        })
        return true
        
    } catch (error) {
    console.error("storeComment error", error);
    return false;
    }
}


async getComments() {
  try {
    const commentsRef = ref(this.db, "comments/comment");
    const snapshot = await get(commentsRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      // Convert object to array
      const commentsArray = Object.entries(data).map(([id, comment]) => ({
        id, // include unique Firebase key
        ...comment,
      }));

      // Optionally filter only visible comments
      const visibleComments = commentsArray.filter(c => c.isVisible);

      // Sort by most recent
      const sorted = visibleComments.sort((a, b) => b.timeStamp - a.timeStamp);

      return sorted;
    } else {
      console.log("No comments found.");
      return [];
    }
  } catch (error) {
    console.error("getComments error:", error);
    return [];
  }
}



// async updateLike(commentId, newLikeCount) {
//   try {
//     const commentRef = ref(this.db, `comments/comment/${commentId}`);
//     await update(commentRef, {
//       likes: newLikeCount
//     });
//     return true;
//   } catch (error) {
//     console.error("updateLike error", error);
//     return false;
//   }
// }


async emailCount(count){
    
    try {
    const commentsRef = ref(this.db, "users/emailCount");
     await set(commentsRef, count);
 
    return true;
    } catch (error) {
    console.error("updateEmailCount error:", error);
    return false;
   }
}

async getEmailCount() {
  try {
    const countRef = ref(this.db, "users/emailCount");
    const snapshot = await get(countRef);

    if (snapshot.exists()) {
      return snapshot.val(); // returns the number (e.g., 27)
    } else {
      console.warn("Email count not found");
      return 0;
    }
  } catch (error) {
    console.error("getEmailCount error:", error);
    return 0;
  }
}


listenForVisibleComments(callback) {
  const commentsRef = ref(this.db, "comments/comment");

  onValue(commentsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();

      const visibleComments = Object.entries(data)
        .map(([id, comment]) => ({
          id,
          ...comment
        }))
        .filter(comment => comment.isVisible)
        .sort((a, b) => b.timeStamp - a.timeStamp);

      callback(visibleComments);
    } else {
      callback([]);
    }
  });
}

}

export const service=new Service()
import React from "react";
import su from '../images/3.jpg'

const Message = ({ message }) => {
  const messageClassName =
    message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200";

  return (
    <div className={`flex mb-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
      {message.role === "bot" && (
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full m-2">
          <img src={su} alt="Bot" className="w-full h-full rounded-full" />
        </div>
      )}
      <div className={`p-2 max-w-xs rounded-lg ${messageClassName}`}>
        {message.text}
      </div>
    </div>
  );
};

export default Message;

















// import Tippy from "@tippyjs/react";
// import dayjs from "dayjs";
// import calendar from "dayjs/plugin/calendar";
// import { useEffect, useRef, useState } from "react";
// import "tippy.js/dist/tippy.css";
// // import { useAuth } from "../context/AuthContext";
// import useCreateAvatar from "../Hooks/useCreateAvatar";

// const Message = (props) => {
//   const { message, uid, photoURL, displayName, createdAt } = props;
//   const { currentUser } = "susan"
// //   useAuth();
//   const [avatar] = useCreateAvatar(displayName);
//   const ref = useRef();
//   const [msgDate, setMsgDate] = useState("");
//   dayjs.extend(calendar);

//   useEffect(() => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//     if (createdAt != null) {
//       if (dayjs().diff(dayjs.unix(createdAt.seconds), "h") > 48) {
//         setMsgDate(dayjs.unix(createdAt.seconds).format("MMMM D, YYYY h:mm A"));
//       } else {
//         setMsgDate(dayjs.unix(createdAt.seconds).calendar());
//       }
//     } else {
//       setMsgDate("Just now");
//     }
//   }, [props]);

//   return (
//     <>
//       <div
//         ref={ref}
//         className={`w-full flex pb-2 items-end ${
//           currentUser.uid === uid && " flex-row-reverse"
//         } `}
//       >
//         {avatar ? (
//           <div>
//             <img
//               className="inline-block h-8 w-8 rounded-full"
//               src={photoURL == null ? avatar : photoURL}
//               alt="Avatar"
//             />
//           </div>
//         ) : null}
//         <div
//           className={`max-w-[50%] flex flex-col ${
//             currentUser.uid === uid ? "items-end" : "items-start"
//           }`}
//         >
//           <span
//             className={`text-zinc-400 text-xs  ${
//               currentUser.uid === uid ? "mr-2" : "ml-2"
//             } `}
//           >
//             {displayName}
//           </span>
//           <Tippy
//             content={<span className="text-sm">{msgDate}</span>}
//             placement={currentUser.uid === uid ? "left" : "right"}
//             arrow={false}
//           >
//             <p
//               className={`mt-1 text-white max-w-3xl break-words ${
//                 currentUser.uid === uid ? "own-message" : "other-message"
//               } `}
//             >
//               {message}
//             </p>
//           </Tippy>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Message;
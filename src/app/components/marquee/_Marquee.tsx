// import React from "react"

// import Link from "next/link"

// import styles from "./marquee.module.css"

// // type MarqueeProps = {
// //   items?: MarqueeItem[]
// // }

// export default function Marquee({ items = [] }: {items: []}) {
//   return (
//     <div
//       className={`${styles.marquee} w-full overflow-hidden text-[var(--background)] font-extrabold text-6xl flex z-10`}
//     >
//       <div className="w-full flex gap-12">
//         {items.map((item) => (
//           <Link
//             href={item.url}
//             key={item.text}
//             className="flex translate-y-3 flex-nowrap text-nowrap"
//             download={item.isDownload}
//           >
//             {item.text}
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

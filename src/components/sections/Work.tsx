// import { BASE_PATH } from "@/lib/basePath";

// const projects = [
//   {
//     title: "Research Paper Assistant",
//     description:
//       "A research tool built with LangChain and OpenAI to help decision-makers explore academic papers faster.",
//     href: "https://research-workshop-final-7fcsjeiuy9kzcsnyektuxu.streamlit.app/",
//   },
//   {
//     title: "LSTM Time Series Forecasting",
//     description:
//       "A forecasting app using an LSTM network to predict future values from historical data.",
//     href: "https://lstm-tsf-v2.streamlit.app/",
//   },
//   {
//     title: "SVM Tumor Classifier",
//     description:
//       "A classification model using Support Vector Machines to distinguish benign from malignant tumors.",
//     href: "https://sameehaafr-svmpca.streamlit.app/",
//   },
//   {
//     title: "Spotify Song Recommender",
//     description:
//       "A music recommendation system built with K-Nearest Neighbors to suggest songs based on audio features.",
//     href: "https://sameehaafr-knnmusic.streamlit.app/",
//   },
// ];

// export function Work() {
//   return (
//     <section id="work" className="border-t border-border px-6 py-20">
//       <div className="mx-auto max-w-5xl">
//         <h2 className="flex items-center gap-2 text-3xl font-semibold text-foreground">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src={`${BASE_PATH}/stickers/blue-star-clay.png`}
//             alt=""
//             className="w-6 -rotate-6 select-none"
//           />
//           Selected Work
//         </h2>
//         <p className="mt-3 max-w-lg text-base text-muted">
//           A few projects I&apos;ve designed and built recently.
//         </p>
//         <ul className="mt-10 divide-y divide-border">
//           {projects.map((project) => (
//             <li key={project.href}>
//               <a
//                 href={project.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block py-4 text-foreground transition-colors hover:text-accent"
//               >
//                 <span className="text-base font-medium">{project.title}</span>
//                 <p className="mt-1 text-sm text-muted">
//                   {project.description}
//                 </p>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

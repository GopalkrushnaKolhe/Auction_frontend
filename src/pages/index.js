import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// // import styles from '@/styles/Home.module.css' // not working, dont know why! Used below line as solution
// // import styles from '@/styles/Home.module.css' // not working, dont know why! Used below line as solution
// import styles from "../styles/Home.module.css";
// import Script from "next/script";
// import Link from "next/link";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div>
      <Head></Head>

        <div className="h-screen bg-blue-500">
          <Navbar />
        </div>
    </div>
  );
}

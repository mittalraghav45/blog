import NavBar from "@/components/navbar/NavBar";
import styles from "./homepage.module.css";
import Link from "next/link";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Footer />
    </div>
  );
}

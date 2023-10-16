import Link from "next/link";
import confirmStyles from "./confirm.module.css";

export default function Confirmation() {
  return (
    <div className={confirmStyles.center}>
      <h1>Confirmation</h1>

      <h2>Thank you for your message!</h2>

      <Link href={`/`}>
        <h3 className={confirmStyles.link}>Back to posts</h3>
      </Link>
    </div>
  );
}

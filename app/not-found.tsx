import { title, subtitle } from "@/components/primitives";

export default function My404() {
  return (
    <center className="pt-36">
      <h1 className={title({ color: "violet", size: "lg" })}>
        Page Not Found | 404
      </h1>
    </center>
  );
}

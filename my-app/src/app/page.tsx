import variables from "@/style/variables.module.scss";
import "@/style/homeScreen.scss";

export default function Home() {
  return (
    <p className="justText" style={{ color: variables.primaryColor }}>
      Hey
    </p>
  );
}

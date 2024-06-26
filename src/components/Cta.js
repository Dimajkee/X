import "./Cta.css";
import Button from "./form/Button";
import Input from "./form/Input";

function Cta() {
  return (
    <div className="cta">
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div>
        <Input
          placeholder={"Email adress"}
          style={{
            fontSize: "1.3em",
          }}
        ></Input>
        <Button
          style={{
            fontSize: "1.3em",
          }}
        >
          {"Get started >"}
        </Button>
      </div>
    </div>
  );
}

export default Cta;

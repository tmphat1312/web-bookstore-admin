import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import BackgroundHeading from "../ui/BackgroundHeading";
import Row from "../ui/Row";

function Settings() {
  return (
    <Row>
      <BackgroundHeading>Cài đặt</BackgroundHeading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;

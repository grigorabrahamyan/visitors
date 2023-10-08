import Layout from "./Layout";
import { SBoxLayout } from "./Layout.style";
import CustomAlert from "./CustomAlert";

const LayoutContainer = () => {
  return (
    <SBoxLayout>
      <Layout />
      <CustomAlert />
    </SBoxLayout>
  );
};

export default LayoutContainer;

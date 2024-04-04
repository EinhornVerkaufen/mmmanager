import { type FC } from "react";
import { PageAnim } from "~/shared/ui";
import { BillsList, MainHeader } from "~/widgets";

const Main: FC = () => {
  return (
    <PageAnim>
      <MainHeader/>
      <BillsList/>
    </PageAnim>
  );
};

export default Main;

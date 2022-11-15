import { Tab } from "@mui/material";
import React, { Fragment, FunctionComponent, useState } from "react";
import { ECTabs } from "../../../components/ECTabs";
import { ReviewProductTab } from "./ReviewsProductTab";
import { SpecificationsProductTab } from "./SpecificationsProductTab";

interface SingleProductTabsProps {
  description: string | number;
}

export const SingleProductTabs: FunctionComponent<SingleProductTabsProps> = ({
  description,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <ECTabs value={value} onTabChange={handleChange}>
        <Tab value={0} label="Specifications" />
        <Tab value={1} label="Reviews" />
      </ECTabs>
      <SpecificationsProductTab
        description={description}
        index={0}
        value={value}
      />
      <ReviewProductTab index={1} value={value} />
    </Fragment>
  );
};

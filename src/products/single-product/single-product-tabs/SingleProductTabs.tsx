import { Tab } from "@mui/material";
import React, { Fragment, FunctionComponent, useState } from "react";
import { ECTabs } from "../../../components/ECTabs";
import { FeedbackModel } from "../../../shared/models";
import { ReviewProductTab } from "./reviews-tab/ReviewsProductTab";
import { SpecificationsProductTab } from "./specification-tab/SpecificationsProductTab";

interface SingleProductTabsProps {
  description: string | number;
  system: string;
  ram: string;
  internal: string;
  reviews: FeedbackModel[];
}

export const SingleProductTabs: FunctionComponent<SingleProductTabsProps> = ({
  description,
  system,
  ram,
  internal,
  reviews,
}) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <ECTabs value={value} onTabChange={handleChange}>
        <Tab value={0} label="Specifications" />
        <Tab value={1} label={`Reviews (${reviews.length})`} />
      </ECTabs>
      <SpecificationsProductTab
        description={description}
        ram={ram}
        internal={internal}
        system={system}
        index={0}
        value={value}
      />
      <ReviewProductTab reviews={reviews} index={1} value={value} />
    </Fragment>
  );
};

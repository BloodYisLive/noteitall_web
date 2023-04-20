import _ from "lodash";
import React from "react";
import Chip from "../chip-component";
import styles from "./index.module.css";

export interface PopularTagType {
  label: string;
  name: string;
  id: string;
}

interface IPopularTagsCard {
  data: Array<PopularTagType>;
}

const PopularTagsCard: React.FC<IPopularTagsCard> = (props) => {
  const { data } = props;
  return (
    <React.Fragment>
      {!_.isEmpty(data) ? (
        <div className='rounded-xl border border-borderColor p-5 bg-cardBackground'>
          <span className={`${styles.text__underline} gradient-text font-bold`}>
            Popular Tags
          </span>
          <div className='flex flex-wrap mt-6'>
            {data.map((item, _) => {
              return (
                <Chip
                  containerStyle='mb-2 mr-2'
                  key={item.id}
                  label={item.label}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};

PopularTagsCard.defaultProps = {
  data: [],
};

export default PopularTagsCard;

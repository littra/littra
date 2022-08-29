import React from "react";
import styles from "./css/FeatureBanner.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import _ from "lodash";
import { Card } from "../../WebSite Ui Components/Card/Card";

const cards = [
  {
    icon: "feature3.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle1} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes1} />,
  },
  {
    icon: "feature2.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle2} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes2} />,
  },
  {
    icon: "monitor.png",
    title: <FormattedMessage {...HomeMessages.featureCardTitle3} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes3} />,
  },
  {
    icon: "feature4.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle4} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes4} />,
  },
  {
    icon: "feature5.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle5} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes5} />,
  },
  {
    icon: "feature6.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle6} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes6} />,
  },
  {
    icon: "feature7.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle7} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes7} />,
  },
  {
    icon: "feature8.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle8} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes8} />,
  },
  {
    icon: "feature3.svg",
    title: <FormattedMessage {...HomeMessages.featureCardTitle9} />,
    description: <FormattedMessage {...HomeMessages.featureCardDes9} />,
  },
];
export default class FeatureBanner extends React.Component {
  renderCard = (item, id) => {
    return (
      <Card
        key={id}
        icon={item.icon}
        title={item.title}
        description={item.description}
      />
    );
  };
  render() {
    return (
      <div className={styles.base} id="features">
        <div className={styles.featureWrapper}>
          {_.chunk(cards, 3).map((row, id) => {
            return (
              <div className={styles.featureRow} key={id}>
                {row.map((item, id) => {
                  return this.renderCard(item, id);
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

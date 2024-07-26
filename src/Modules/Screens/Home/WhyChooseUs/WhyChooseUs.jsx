import React from "react";
import './WhyChooseUs.css';

const features = [
  {
    iconClass: "fa-globe",
    title: "Modern Design",
    description: "We use the latest technology for the latest world because we know the demand of people.",
    iconBgClass: "feature-icon-modern"
  },
  {
    iconClass: "fa-anchor",
    title: "Creative Design",
    description: "We are always creative and always listen to our customers. We mix these two things and make the best design.",
    iconBgClass: "feature-icon-creative"
  },
  {
    iconClass: "fa-hourglass-half",
    title: "24 x 7 User Support",
    description: "If our customer has any problem or query, we are always happy to help them.",
    iconBgClass: "feature-icon-support"
  },
  {
    iconClass: "fa-database",
    title: "Business Growth",
    description: "Everyone wants to live on top of the mountain, but all the happiness and growth occur while you're climbing it.",
    iconBgClass: "feature-icon-growth"
  },
  {
    iconClass: "fa-upload",
    title: "Market Strategy",
    description: "Holding back technology to preserve broken business models is like allowing blacksmiths to veto the internal combustion engine in order to protect their horseshoes.",
    iconBgClass: "feature-icon-strategy"
  },
  {
    iconClass: "fa-camera",
    title: "Affordable Cost",
    description: "Love is a special word, and I use it only when I mean it. You say the word too much and it becomes cheap.",
    iconBgClass: "feature-icon-affordable"
  }
];

const FeatureItem = ({ iconClass, title, description, iconBgClass }) => (
  <div className="feature-item">
    <span className={`icons ${iconBgClass}`}>
      <i className={`fa ${iconClass}`}></i>
    </span>
    <h6 className="feature-title">{title}</h6>
    <p className="feature-description">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="section-head">
          <h4 className="section-title">
            <span className="highlighted-text">Why Choose</span> Us?
          </h4>
          <p className="section-description">
            When you choose us, you'll feel the benefit of 10 years' experience in Web Development. Because we know the digital world and we know how to handle it. With working knowledge of online, SEO, and social media.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              iconClass={feature.iconClass}
              title={feature.title}
              description={feature.description}
              iconBgClass={feature.iconBgClass}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;

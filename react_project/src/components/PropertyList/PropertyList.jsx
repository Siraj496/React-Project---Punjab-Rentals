import "./PropertyList.css";
import Property from "./Property/Property";

const PropertyList = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <Property
          key={property.id}
          {...property}
          /* all these can be written in short as above {...property}
          image={property.image}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
          address={property.address}
          rent={property.rent}
          surface={property.surface}
          available={property.available}
          date={property.date}
          type={property.type}*/
        />
      ))}
    </div>
  );
};

export default PropertyList;

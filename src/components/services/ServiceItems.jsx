import "./serviceitems.css";

function ServiceItems(props) {
  return (
    <div className="service_image-text">
      <div className="service_image">
        <img src={props.src} alt="drug pill" />
      </div>
      <div className="service_text">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default ServiceItems;
